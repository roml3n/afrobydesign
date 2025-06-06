import { useEffect, useState } from "react";

interface KitFormResponse {
  success: boolean;
  message?: string;
}

declare global {
  interface Window {
    _kit?: {
      submitForm?: (data: any) => Promise<any>;
      onReady?: (callback: () => void) => void;
    };
  }
}

export const useKitForm = (formId: string) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isKitReady, setIsKitReady] = useState(false);

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector(`script[data-uid="${formId}"]`)) {
      setIsScriptLoaded(true);
      return;
    }

    // Create and load the script
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", formId);
    script.src = `https://roml3n.kit.com/${formId}/index.js`;

    script.onload = () => {
      setIsScriptLoaded(true);
      // Wait for Kit to be ready
      if (window._kit?.onReady) {
        window._kit.onReady(() => {
          setIsKitReady(true);
        });
      } else {
        // Fallback in case onReady is not available
        const checkKitReady = setInterval(() => {
          if (window._kit?.submitForm) {
            setIsKitReady(true);
            clearInterval(checkKitReady);
          }
        }, 100);

        // Clear interval after 5 seconds if Kit doesn't initialize
        setTimeout(() => clearInterval(checkKitReady), 5000);
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [formId]);

  const submitForm = async (data: {
    email: string;
    url: string;
  }): Promise<KitFormResponse> => {
    if (!isScriptLoaded || !isKitReady) {
      return {
        success: false,
        message: "Form is not ready yet. Please try again in a moment.",
      };
    }

    if (!window._kit?.submitForm) {
      console.error("Kit form submission not available");
      return {
        success: false,
        message: "Form submission is not available. Please try again later.",
      };
    }

    try {
      console.log("Submitting to Kit with data:", data);
      const response = await window._kit.submitForm({
        email: data.email,
        "site.url": data.url,
      });

      console.log("Kit form submission response:", response);
      return { success: true, message: "Form submitted successfully" };
    } catch (error) {
      console.error("Kit form submission error:", error);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to submit form",
      };
    }
  };

  return { isScriptLoaded, isKitReady, submitForm };
};

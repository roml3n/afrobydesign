"use client";

import { useEffect, useState } from "react";

type ViewCounterProps = {
  siteId: string;
  initialViews: number;
};

const ViewCounter = ({ siteId, initialViews }: ViewCounterProps) => {
  const [views, setViews] = useState(initialViews);
  const [hasIncremented, setHasIncremented] = useState(false);

  useEffect(() => {
    // Only increment once per session
    if (!hasIncremented) {
      const incrementViews = async () => {
        try {
          const response = await fetch(`/api/sites/${siteId}/views`, {
            method: "POST",
          });

          if (response.ok) {
            setViews((prev) => prev + 1);
            setHasIncremented(true);
          }
        } catch (error) {
          console.error("Error incrementing views:", error);
        }
      };

      incrementViews();
    }
  }, [siteId, hasIncremented]);

  return <p className="font-medium text-gray-5">Viewed {views} times</p>;
};

export default ViewCounter;

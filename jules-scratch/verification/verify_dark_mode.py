from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # 1. Navigate to the page
    page.goto("http://localhost:3000")

    # 2. Take a screenshot of the light mode
    page.screenshot(path="jules-scratch/verification/light-mode.png")

    # 3. Click the theme toggle button
    toggle_button = page.get_by_role("button", name="Toggle theme")
    toggle_button.click()

    # 4. Wait for the dark mode to be applied
    # We can wait for the body to have the dark mode class
    page.wait_for_selector("body.dark", state="attached")

    # 5. Take a screenshot of the dark mode
    page.screenshot(path="jules-scratch/verification/dark-mode.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

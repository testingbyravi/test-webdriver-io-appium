import { $ } from '@wdio/globals';

/**
 * Enters text into an input field
 *
 * @param {string} selector - The CSS selector for the input field.
 * @param {string} value - The data to be entered into the input field.
 */
export async function enterText(selector: string, value: string): Promise<void> {
    await $(selector).setValue(value);
}

/**
 * Clicks on an element
 *
 * @param {string} selector - The CSS selector for the element to be clicked.
 */
export async function elementClick(selector: string): Promise<void> {
    await $(selector).click();
}

/**
 * Checks if an element is displayed.
 *
 * @param {string} selector - The CSS selector for the element.
 */
export async function isElementDisplayed(selector: string): Promise<boolean> {
    return await $(selector).isDisplayed();
}

/**
 * Retrieves the text content of an element
 *
 * @param {string} selector - The CSS selector for the element.
 */
export async function getText(selector: string): Promise<string> {
    return await $(selector).getText();
}
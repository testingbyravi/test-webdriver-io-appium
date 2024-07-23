import {enterText, elementClick, isElementDisplayed, getText} from '../solvent/elementCommands'

/**
 * Login template using interface for the Login functionality
 * entering the username, entering the password, submitting the form,
 * and checking for login success or error messages.
 */
export interface Login {
    enterUsername(value: string): Promise<Login>
    enterPassword(value: string): Promise<Login>
    submit(): Promise<Login>
    isLoginErrorMessage(loginErrorMessage: string): Promise<Login>; 
    isLoginSuccess(): Promise<Login>; 
}

/**
 * Locators for the login screen
 */
const username: string = "//android.widget.EditText[@content-desc='test-Username']";
const password: string = "//android.widget.EditText[@content-desc='test-Password']";
const submitButton: string = "//android.view.ViewGroup[@content-desc='test-LOGIN']";
const cartIcon: string = "//android.view.ViewGroup[@content-desc='test-Cart']/android.view.ViewGroup/android.widget.ImageView"
const firstProduct: string = "(//android.view.ViewGroup[@content-desc='test-Item'])[1]/android.view.ViewGroup/android.widget.ImageView"
const isLoginError: string = "//android.widget.TextView[@text='Username and password do not match any user in this service.']";

export const login: Login = {
    /**
     * Enters the password into the username input field.
     * 
     * @param value - username to be entered.
     * @returns A promise that resolves to the current instance of the Login interface.
     */
    async enterUsername(value: string): Promise<Login> {
        await enterText(username, value)
        return this
    },

    /**
     * Enters the password into the password input field.
     * 
     * @param value - password to be entered.
     * @returns A promise that resolves to the current instance of the Login interface.
     */
    async enterPassword(value: string): Promise<Login> {
        await enterText(password, value)
        return this
    },

    /**
     * Submit login screen.
     *
     * @returns A promise that resolves to the current instance of the Login interface.
     */
    async submit(): Promise<Login> {
        await elementClick(submitButton)
        return this
    },

    /**
     * Checks if the login error message is displayed on the screen.
     * 
     * @param expectedLoginErrorMessage - The expected error message to compare with the actual message.
     * @returns A promise that resolves to the current instance of the Login interface.
     */
    async isLoginErrorMessage(loginErrorMessage): Promise<Login> {
        let actualResult = await getText(isLoginError)
        await expect(loginErrorMessage).toEqual(actualResult)
        return this
    },

    /**
     * Checks if certain elements are located on screen after successful login
     * 
     * @returns A promise that resolves to the current instance of the Login interface.
     */
    async isLoginSuccess(): Promise<Login> {
        let actualResult = await isElementDisplayed(cartIcon)
        expect(actualResult).toBe(true)

        actualResult = await isElementDisplayed(firstProduct)
        expect(actualResult).toBe(true)
        return this
    }
}
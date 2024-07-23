import { When, Then } from '@cucumber/cucumber';
import {login} from '../pages/Login'

/**
 * Entering the username.
 *
 * @param {string} username - The username to be entered.
 */
When(/^I enter username "(.*)"$/, async (username: string) => {
  await login.enterUsername(username);
});

/**
 * Entering the password.
 *
 * @param {string} password - The password to be entered.
 */
When(/^I enter password "(.*)"$/, async (password: string) => {
  await login.enterPassword(password);
});

/**
 * Clicking the submit button.
 */
When(/^I click on submit button$/, async () => {
  await login.submit();
});

/**
 * Verifying successful login.
 */
Then(/^I should be able to login successfully$/, async () => {
  await login.isLoginSuccess();
});

/**
 * Verifying unsuccessful login.
 */
Then(/^I should not be able to login "(.*)"$/, async (loginErrorMessage: string) => {
  await login.isLoginErrorMessage(loginErrorMessage);
});

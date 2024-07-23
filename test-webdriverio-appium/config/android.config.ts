import { config } from '../wdio.conf';
import {AndroidInfo} from './android.info';
import path from 'path';

// Setup Capabilities
export const capabilities = [
    {
        platformName: AndroidInfo.platformName(),
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        automationName: AndroidInfo.automationName(),
        udid: AndroidInfo.udid(),
        platformVersion: AndroidInfo.platFormVersion(),
        app: path.resolve(`./apps/${AndroidInfo.appName()}`)
    }
];

config.cucumberOpts.tagExpression = '@sanity';
exports.config = config;

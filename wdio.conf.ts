export const config = {
    runner: 'local',
    port: 4723,
    specs: ['./features/**/*.feature'],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./steps/**/*.ts'],
        timeout: 60000
    },
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '15.0',
        'appium:appPackage': 'com.google.android.gm',
        'appium:appActivity': 'com.google.android.gm.ConversationListActivityGmail',
        'appium:automationName': 'UiAutomator2'
    }],
    services: ['appium'],
    reporters: ['spec']
};

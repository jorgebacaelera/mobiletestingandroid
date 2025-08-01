# Automatización Gmail - BDD

Este proyecto usa WebdriverIO + Appium + Cucumber para automatizar login en Gmail (mock).

## Pasos para ejecutar

1. Instalar dependencias:
```
npm install @wdio/cli @wdio/local-runner @wdio/cucumber-framework @wdio/spec-reporter appium webdriverio typescript ts-node --save-dev
```

2. Instalar driver UiAutomator2:
```
appium driver install uiautomator2
```

3. Iniciar Appium en otra terminal:
```
appium
```

4. Ejecutar pruebas:
```
npx wdio run wdio.conf.ts
```

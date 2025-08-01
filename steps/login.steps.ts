import { Given, When, Then } from '@wdio/cucumber-framework';
import GmailLoginPage from '../pages/GmailLoginPage';

const gmailPage = new GmailLoginPage();

Given('que el usuario abre la app de Gmail', async () => {
  // App ya está abierta por Appium
});

When('ingresa su correo y contraseña válidos', async () => {
  await gmailPage.ingresarEmail('usuario@gmail.com');
  await gmailPage.ingresarPassword('password123');
});

Then('debería ver el mensaje de bienvenida', async () => {
  await gmailPage.validarLoginExitoso();
});

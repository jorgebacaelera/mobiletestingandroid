import { ChainablePromiseElement } from 'webdriverio';

export default class GmailLoginPage {
    private get inputEmail(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.EditText[@content-desc="Correo o teléfono"]');
    }

    private get btnNext(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.Button[@content-desc="Siguiente"]');
    }

    private get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.EditText[@content-desc="Introduce tu contraseña"]');
    }

    private get lblWelcomeMessage(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//android.widget.TextView[contains(@text,"Bienvenido")]');
    }

    async ingresarEmail(email: string) {
        await (await this.inputEmail).setValue(email);
        await (await this.btnNext).click();
    }

    async ingresarPassword(password: string) {
        await (await this.inputPassword).setValue(password);
        await (await this.btnNext).click();
    }

    async validarLoginExitoso() {
        const mensaje = await (await this.lblWelcomeMessage).getText();
        expect(mensaje).toContain('Bienvenido');
    }
}

Feature: Login en la App de Gmail

  Scenario: Usuario inicia sesión correctamente
    Given que el usuario abre la app de Gmail
    When ingresa su correo y contraseña válidos
    Then debería ver el mensaje de bienvenida

I.click("#dashboard_welcome_message_link");
I.wait(5);
I.select("R$10 - Recompensa-título-10");
I.fill("Título", "Email-título-10");
I.fill(".text-field.height-medium", "Email-texto-10");
I.click("Salvar");
I.see("Recompensas salvas com sucesso");
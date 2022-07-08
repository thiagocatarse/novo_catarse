I.click("#dashboard_user_settings_link");
I.select("Pessoa física");
I.fill("Nome completo", "QA Criar projeto");
I.fill("CPF", "10528190792");
I.fill("user[birth_date]", "03081984");
TEST.run('forms/address_project');
I.click("Salvar");
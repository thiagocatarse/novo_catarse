// Ir para o Historico de apoio
I.click("#user-menu");
I.see("#user-menu-dropdown");
I.click("Histórico de apoio");
I.see("#private-contributed-tab");
I.see(".thumb-project");
I.see(DATA.project_aon_01_name);
I.see("PIX");
I.see("Aguardando confirmação do pagamento");
I.click("Visualizar Pix");
//checar página de agradecimento
TEST.run('../thank-you/thank_you_pix');
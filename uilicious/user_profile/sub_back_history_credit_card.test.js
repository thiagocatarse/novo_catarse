// Ir para o Historico de apoio
I.click("#user-menu");
I.see("#user-menu-dropdown");
I.click("Histórico de apoio");
I.see("#private-contributed-tab");
I.see(".thumb-project");
I.see(DATA.project_sub_01_name);
I.click("Histórico de pagamento");
I.see("Cartão");
I.click(".modal-close");
I.dontSee("Cartão");
I.see(DATA.project_sub_01_name);


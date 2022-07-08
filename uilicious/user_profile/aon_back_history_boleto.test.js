// Ir para o Historico de apoio
I.click("#user-menu");
I.see("#user-menu-dropdown");
I.click("Histórico de apoio");
I.see("#private-contributed-tab");
I.see(".thumb-project");
I.see(DATA.project_aon_01_name);
I.see("Boleto bancário");
I.click("Imprimir boleto");
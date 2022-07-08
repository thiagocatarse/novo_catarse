// Ir para o Historico de apoio
I.click("#user-menu");
I.see("#user-menu-dropdown");
I.click("Histórico de apoio");
I.see("#private-contributed-tab");
I.see(".thumb-project");
I.see(DATA.project_sub_01_name);
I.click("Histórico de pagamento");
I.see("Boleto com venc.");
I.click(".modal-close");
I.dontSee("Boleto com venc.");
I.see(DATA.project_sub_01_name);
I.see("O boleto de sua assinatura vence dia");
I.click("Imprimir boleto");
I.wait(3);
I.closeTab();


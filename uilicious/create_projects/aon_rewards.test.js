if(I.see$("#dashboard_reward_link")){
  I.click("#dashboard_reward_link");
}


//checar se os erros de recompensa em branco estão corretos e se é possível adicionar uma recompensa
UI.context(".reward-card", function(){
	I.click("Salvar");
  I.see("Valor deve ser igual ou superior a R$10.");
	I.see("Descrição não pode ficar em branco.");
	I.fill("Título", "Recompensa-título-10");
	I.fill(".project-edit-reward", "10")
	I.select("Out");
	I.select("2024");
	I.fill("Descrição", "Recompensa-descrição-10");
  I.upload('Image (opcional)', 'assets/thumb.jpg');
	I.select("Frete Nacional");
	I.fill("Resto do Brasil", "5,00");
	I.click("Adicionar destino");
	I.select("Acre");
	// I.fill("Acre", "10,00");
	I.click("Salvar");
	I.wait(10);
	I.see("Para R$ 10 ou mais");
	I.see("0 apoiadores");
	I.see("Recompensa-título-10");
	I.see("Recompensa-descrição-10");
	I.see("out/2024");
	I.see("Frete Nacional");
	I.see("Link para apoio direto");
	I.see(".clipboard");
	//checar se é possível deletar uma recompensa
	I.click(".fa-edit");
	I.click(".remove_fields");
	I.acceptAlert();
	I.wait(3);
	I.dontSee("Para R$ 10 ou mais");
	I.dontSee("0 apoiadores");
	I.dontSee("Recompensa-título-10");
	I.dontSee("Recompensa-descrição-10");
	I.dontSee("out/2024");
	I.dontSee("Frete Nacional");
	I.dontSee("Link para apoio direto");
	I.dontSee(".clipboard");
})

//checar se é possível adicionar uma recompensa
I.click("+ Adicionar recompensa");
UI.context(".reward-card", function(){
	I.fill("Título", "Recompensa-título-20");
	I.fill(".project-edit-reward", "20")
	I.select("Nov");
	I.select("2023");
	I.fill("Descrição", "Recompensa-descrição-20");
  I.upload('Image (opcional)', 'assets/thumb.jpg');
	I.select("Frete Nacional e Internacional");
	I.fill("Resto do Brasil", "5,00");
	I.fill("Internacional", "6,00");
	I.click("Adicionar destino");
	I.select("Acre");
	// I.fill("Acre", "10,00");
	I.click("Salvar");
	I.wait(10);
	I.see("Para R$ 20 ou mais");
	I.see("0 apoiadores");
	I.see("Recompensa-título-20");
	I.see("Recompensa-descrição-20");
	I.see("nov/2023");
	I.see("Frete Nacional");
	I.see("Link para apoio direto");
	I.see(".clipboard");
})


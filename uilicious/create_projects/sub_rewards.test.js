I.click("#dashboard_reward_link");

//checar se os erros de recompensa em branco estão corretos e se é possível adicionar uma recompensa
UI.context(".reward-card", function(){
	I.click("Salvar");
  I.see("Valor deve ser igual ou superior a R$5.");
	I.see("Descrição não pode ficar em branco.");
	I.fill("Título", "Recompensa-título-10");
	I.fill(".project-edit-reward", "10")
	I.fill("Descrição", "Recompensa-descrição-10");
  I.upload('Image (opcional)', 'assets/thumb.jpg');
	I.click("Salvar");
	I.wait(10);
	I.see("R$ 10 por mês");
	I.see("0 assinantes");
	I.see("R$ 10 por mês");
	I.see("Link para apoio direto")
	I.see(".clipboard")
})
//clicar em editar assinatura no perfil de usuário
I.click("Editar assinatura");
I.select("R$ 15 ou mais por mês");
I.click("Continuar");
I.click("Próximo passo");
I.click("Boleto bancário");
I.click("Confirmar alterações na assinatura");
UI.context(".modal-dialog-content", function(){ 
  I.wait(20);
	I.see("recompensa-titulo-sub-15");
	I.count(".fa-angle-right", 2);
	I.see("R$15");
	I.see("Boleto Bancário");
	I.see("Cobrança hoje: Nenhuma");
	I.see("Próxima cobrança:");
	I.click("Confirmar");
})

//checar página de agradecimento
TEST.run('../thank-you/edit_subscription');

//checar página de usuário
TEST.run('../user_profile/sub_back_history_credit_card_edit_subscription');
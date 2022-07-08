//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_sub_01')

//fazer cadastro
TEST.run('../login/login_normal_user');

//certifico de que o Catarse reconheceu meu user
I.see("Dados do apoiador");

//selecionar meio de pagamento
I.click("Próximo passo");

//preencher dados de cartão
TEST.run('../forms/credit_card_old_user');
I.click("Finalizar pagamento");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');

//checar se pagamento foi confirmado
var status_06 = UI.execute(function () { 
if (window.location.href.indexOf("payment_confirmed=true") > -1) {
  return "yes"
} else {
  return "no"
}
});

if (status_06 == "yes") {
TEST.log.pass("Pagamento confirmado");	
} else {
	TEST.log.fail("Pagamento não confirmado");	
}

//checar ID do pagamento
var payment_id_06 = UI.execute(function (){
	var url_06 = window.location.href; 
  var value_06 = 'payment_id=';
  var hash_06 = url_06.indexOf(value_06);
  var variantId_06 = url_06.substring(hash_06 + value_06.length, url_06.length);
	return variantId_06
});

TEST.log.info(payment_id_06)

//deslogar
TEST.run('../login/logout')
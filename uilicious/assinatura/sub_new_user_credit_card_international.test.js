//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_sub_01')

//fazer cadastro
I.click("Cadastre-se");
TEST.run('../login/sign_up_new_user_03')

//selecionar país estrangeiro
TEST.run('../forms/address_international')

//selecionar meio de pagamento
I.click("Next step");

//preencher dados de cartão
TEST.run('../forms/credit_card_international');
I.click("Finish payment");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');

//checar se pagamento foi confirmado
var status_02 = UI.execute(function () { 
if (window.location.href.indexOf("payment_confirmed=true") > -1) {
  return "yes"
} else {
  return "no"
}
});

if (status_02 == "yes") {
TEST.log.pass("Pagamento confirmado");	
} else {
	TEST.log.fail("Pagamento não confirmado");	
}

//checar ID do pagamento
var payment_id_02 = UI.execute(function (){
	var url_02 = window.location.href; 
  var value_02 = 'payment_id=';
  var hash_02 = url_02.indexOf(value_02);
  var variantId_02 = url_02.substring(hash_02 + value_02.length, url_02.length);
	return variantId_02
});

TEST.log.info(payment_id_02)

//checar se abre o histórico de apoio
TEST.run('../user_profile/sub_back_history_credit_card')

//deslogar
TEST.run('../login/logout')
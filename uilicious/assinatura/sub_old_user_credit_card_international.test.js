//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_sub_01')

//fazer cadastro
TEST.run('../login/login_international')

//certifico de que o Catarse reconheceu meu user
I.see("Full name");

//selecionar meio de pagamento
I.click("Next step");

//preencher dados de cartão
TEST.run('../forms/credit_card_international');
I.click("Finish payment");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');

//checar se pagamento foi confirmado
var status_05 = UI.execute(function () { 
if (window.location.href.indexOf("payment_confirmed=true") > -1) {
  return "yes"
} else {
  return "no"
}
});

if (status_05 == "yes") {
TEST.log.pass("Pagamento confirmado");	
} else {
	TEST.log.fail("Pagamento não confirmado");	
}

//checar ID do pagamento
var payment_id_05 = UI.execute(function (){
	var url_05 = window.location.href; 
  var value_05 = 'payment_id=';
  var hash_05 = url_05.indexOf(value_05);
  var variantId_05 = url_05.substring(hash_05 + value_05.length, url_05.length);
	return variantId_05
});

TEST.log.info(payment_id_05)

//deslogar
TEST.run('../login/logout')



//
// Hit the "Run" button to run this test.
//
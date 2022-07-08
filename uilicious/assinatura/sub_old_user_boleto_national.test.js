//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_sub_01')

//fazer cadastro
TEST.run('../login/login_normal_user');

//certifico de que o Catarse reconheceu meu user
I.see("Dados do apoiador");

//selecionar meio de pagamento
I.see("Dados do apoiador");
I.click("Próximo passo");
I.click("Boleto bancário")
I.see("Imprimir boleto")
I.click("Imprimir boleto")

//checar página de agradecimento
TEST.run('../thank-you/thank_you_boleto_sub')

//checar se pagamento foi confirmado
var status_04 = UI.execute(function () { 
if (window.location.href.indexOf("payment_confirmed=true") > -1) {
  return "yes"
} else {
  return "no"
}
});

if (status_04 == "yes") {
TEST.log.pass("Pagamento confirmado");	
} else {
	TEST.log.fail("Pagamento não confirmado");	
}

//checar ID do pagamento
var payment_id_04 = UI.execute(function (){
	var url_04 = window.location.href; 
  var value_04 = 'payment_id=';
  var hash_04 = url_04.indexOf(value_04);
  var variantId_04 = url_04.substring(hash_04 + value_04.length, url_04.length);
	return variantId_04
});

TEST.log.info(payment_id_04)

//deslogar
TEST.run('../login/logout')



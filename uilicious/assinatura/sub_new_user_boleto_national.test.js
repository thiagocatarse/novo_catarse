//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_sub_01')

//fazer cadastro
I.click("Cadastre-se");
TEST.run('../login/sign_up_new_user_01');

//preencher dados de usuário no checkout
TEST.run('../forms/address');

//selecionar meio de pagamento
I.click("Próximo passo");
I.click("Boleto bancário");
I.see("Imprimir boleto");
I.click("Imprimir boleto");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_boleto_sub');

//checar se pagamento foi confirmado
var status_01 = UI.execute(function () { 
if (window.location.href.indexOf("payment_confirmed=true") > -1) {
  return "yes"
} else {
  return "no"
}
});

if (status_01 == "yes") {
TEST.log.pass("Pagamento confirmado");	
} else {
	TEST.log.fail("Pagamento não confirmado");	
}

//checar ID do pagamento
var payment_id_01 = UI.execute(function (){
	var url_01 = window.location.href; 
  var value_01 = 'payment_id=';
  var hash_01 = url_01.indexOf(value_01);
  var variantId_01 = url_01.substring(hash_01 + value_01.length, url_01.length);
	return variantId_01
});

TEST.log.info(payment_id_01)

//checar se abre o histórico de apoio
TEST.run('../user_profile/sub_back_history_boleto');

//checar se é possível cancelar a assinatura
TEST.run('./cancel_subscription');

//deslogar
TEST.run('../login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
I.fill("#inbox_field",email_01);
I.click("#go_inbox");
I.wait(30);
I.see("Bem-vindo ao Catarse!");
I.see("Estamos contando com o seu apoio mensal!");
I.see("primeiro");
I.see("vence o boleto");
I.see("Solicitação de cancelamento de assinatura");
I.see(" Sua assinatura foi cancelada!");
}


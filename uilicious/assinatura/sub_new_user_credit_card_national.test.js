//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_sub_01')

//fazer cadastro
I.click("Cadastre-se");
TEST.run('../login/sign_up_new_user_02');

//preencher dados de usuário no checkout
TEST.run('../forms/address');

//selecionar meio de pagamento
I.click("Próximo passo");

//preencher dados de cartão
TEST.run('../forms/credit_card');
I.click("Finalizar pagamento");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');

//checar se pagamento foi confirmado
var status_03 = UI.execute(function () { 
if (window.location.href.indexOf("payment_confirmed=true") > -1) {
  return "yes"
} else {
  return "no"
}
});

if (status_03 == "yes") {
TEST.log.pass("Pagamento confirmado");	
} else {
	TEST.log.fail("Pagamento não confirmado");	
}

//checar ID do pagamento
var payment_id_03 = UI.execute(function (){
	var url_03 = window.location.href; 
  var value_03 = 'payment_id=';
  var hash_03 = url_03.indexOf(value_03);
  var variantId_03 = url_03.substring(hash_03 + value_03.length, url_03.length);
	return variantId_03
});

TEST.log.info(payment_id_03)

//checar se abre o histórico de apoio
TEST.run('../user_profile/sub_back_history_credit_card');

//checar se é possível editar assinatura
TEST.run('./edit_subscription');

//deslogar
TEST.run('../login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
I.fill("#inbox_field",email_02);
I.click("#go_inbox");
I.wait(30);
I.see("Bem-vindo ao Catarse!");
I.see("oprimeiro");
I.see("Sua assinatura foi atualizada!");
I.see("Recibo mensal de apoio");
I.see("Mensagem de boas vindas");	
}


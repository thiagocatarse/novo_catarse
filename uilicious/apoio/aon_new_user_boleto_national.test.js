//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_aon_01')

//fazer cadastro
TEST.run('../login/sign_up_new_user_01')

//checar a URL da contribuição
var contributionID_aon_new_user_boleto_national = UI.execute(function () { 
    return window.location.pathname.replace('/pt','').replace('/edit','')
});
TEST.log.info(contributionID_aon_new_user_boleto_national);

//preencher dados de usuário no checkout
TEST.run('../forms/address')

//selecionar meio de pagamento
I.click("Próximo passo");
I.click("Boleto bancário")
I.see("Imprimir boleto")
I.click("Imprimir boleto")

//checar página de agradecimento
TEST.run('../thank-you/thank_you_boleto')
I.amAt(contributionID_aon_new_user_boleto_national);
//checar se abre o histórico de apoio
TEST.run('../user_profile/aon_back_history_boleto')

//Logout
TEST.run('login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
I.fill("#inbox_field",email_01);
I.click("#go_inbox");
I.wait(30);
I.see("Bem-vindo ao Catarse!");
I.see("Estamos contando com o seu apoio!");
I.see("vence o boleto gerado para qa_prod");
}

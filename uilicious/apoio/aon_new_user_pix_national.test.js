//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_aon_01')

//fazer cadastro
TEST.run('../login/sign_up_new_user_03')

//checar a URL da contribuição
var contributionID_aon_new_user_pix_national = UI.execute(function () { 
    return window.location.pathname.replace('/pt','').replace('/edit','')
});
TEST.log.info(contributionID_aon_new_user_pix_national);

//checar se recompensa foi selecionada
I.count("recompensa-titulo-10",3);

//preencher dados de usuário no checkout
TEST.run('../forms/address')

//selecionar meio de pagamento
I.click("Próximo passo");

//selecionar PIX
I.click("PIX");
I.see("Lembre-se, este QR Code vence dia");
I.click("Gerar QR Code");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_pix');
I.amAt(contributionID_aon_new_user_pix_national);

//checar se abre o histórico de apoio
TEST.run('../user_profile/aon_back_history_pix')

//Logout
TEST.run('login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
I.fill("#inbox_field",email_03);
I.click("#go_inbox");
I.wait(30);
I.see("Bem-vindo ao Catarse!");
I.see("Recibo provisório: apoio confirmado para qa_prod");
}
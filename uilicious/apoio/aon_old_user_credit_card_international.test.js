//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_aon_01')

//fazer cadastro
I.click("Faça seu login")
TEST.run('../login/login_international')

//checar a URL da contribuição
var contributionID_aon_old_user_credit_card_international = UI.execute(function () { 
    return window.location.pathname.replace('/pt','').replace('/edit','')
});
TEST.log.info(contributionID_aon_old_user_credit_card_international);

//certifico de que o Catarse reconheceu meu user
I.see("Full name");

//selecionar meio de pagamento
I.click("Next step");

//preencher dados de cartão
I.see("#credit-card-record-0");
I.click("Use another card.")
TEST.run('../forms/credit_card_international');
I.click("Finish payment");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');
I.amAt(contributionID_aon_old_user_credit_card_international);

//Logout
TEST.run('login/logout')
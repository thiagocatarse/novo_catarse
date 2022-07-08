//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_aon_01')

//fazer cadastro
TEST.run('../login/sign_up_new_user_02')

//checar a URL da contribuição
var contributionID_aon_new_user_credit_card_international = UI.execute(function () { 
    return window.location.pathname.replace('/pt','').replace('/edit','')
});
TEST.log.info(contributionID_aon_new_user_credit_card_international);

//selecionar país estrangeiro
TEST.run('../forms/address_international')

//selecionar meio de pagamento
I.click("Next step");

//preencher dados de cartão
I.dontSee("Boleto bancário");
I.dontSee("PIX");
TEST.run('../forms/credit_card_international');
I.click("Finish payment");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');
I.amAt(contributionID_aon_new_user_credit_card_international);

//checar se abre o histórico de apoio
TEST.run('../user_profile/aon_back_history_credit_card')

//Logout
TEST.run('login/logout')


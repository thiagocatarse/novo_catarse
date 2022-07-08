//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_aon_01')

//fazer cadastro
I.click("Faça seu login")
TEST.run('../login/login_normal_user')

//checar a URL da contribuição
var contributionID_aon_old_user_credit_card_national = UI.execute(function () { 
    return window.location.pathname.replace('/pt','').replace('/edit','')
});
TEST.log.info(contributionID_aon_old_user_credit_card_national);

//certifico de que o Catarse reconheceu meu user
I.see("Dados do apoiador");

//Espero para carregar dados do endereço
I.wait(10);

//selecionar meio de pagamento
I.click("Próximo passo");

//preencher dados de cartão
I.see("#credit-card-record-0");
I.click("Usar outro cartão de crédito.")
TEST.run('../forms/credit_card_old_user');
I.click("Finalizar pagamento");

//checar página de agradecimento
TEST.run('../thank-you/thank_you_credit_card');
I.amAt(contributionID_aon_old_user_credit_card_national);

//Logout
TEST.run('login/logout')
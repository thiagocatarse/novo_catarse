//entrar no sandbox, acessar projeto e selecionar recompensa
TEST.run('./select_reward_project_aon_01')

//fazer cadastro
I.click("Faça seu login")
TEST.run('../login/login_normal_user')

//checar a URL da contribuição
var contributionID_aon_old_user_boleto_national = UI.execute(function () { 
    return window.location.pathname.replace('/pt','').replace('/edit','')
});
TEST.log.info(contributionID_aon_old_user_boleto_national);

//certifico de que o Catarse reconheceu meu user
I.see("Dados do apoiador");

//selecionar meio de pagamento
I.see("Dados do apoiador");
I.click("Próximo passo");
I.click("Boleto bancário")
I.see("Imprimir boleto")
I.click("Imprimir boleto")

//checar página de agradecimento
TEST.run('../thank-you/thank_you_boleto')
I.amAt(contributionID_aon_old_user_boleto_national);

//Logout
TEST.run('login/logout')
//Iniciar projeto
TEST.run('./form_new_aon_project')

//Criar usuário
TEST.run('../login/sign_up_new_user_01');

//Validar publicação
// TEST.run('./aon_validate_publish')

//Pegar URL do projeto
var aon_project_url = UI.execute(function () { 
    return window.location.href.replace('/edit#basics','')
});
TEST.log.info(aon_project_url);

//Preencher aba básico
TEST.run('./basics_adult');

//Preencher aba Financiamento
TEST.run('./aon_goals');

//Preencher aba Descrição
TEST.run('./description');

//Preencher aba Vídeo
TEST.run('./aon_video');

//Preencher aba Orçamento
TEST.run('./aon_budget');

//Preencher aba Card do projeto
TEST.run('./aon_card');

//Preencher aba Recompensas
TEST.run('./aon_rewards');

//Preencher aba Perfil publico
TEST.run('./user_about');

//Preencher aba Perfil publico
TEST.run('./user_settings');

//Publicar projeto 
TEST.run('./aon_publish');

//Checar projeto publicado
TEST.run('explore/aon/aon_project_insights_first_time');
TEST.run('explore/aon/aon_project_contributions_report_first_time');
I.click(".thumb-project-dashboard");
I.wait(5);
TEST.run('explore/aon/aon_project_show');

//Logout
TEST.run('login/logout')

//Checar se o projeto está declarado como adulto
TEST.run('explore/aon/aon_project_show_adult');

//logar como admin
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_admin');

I.goTo(aon_project_url);

// Deletar projeto
TEST.run('./delete_project')

//Logout
TEST.run('login/logout')

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
I.fill("#inbox_field",email_01);
I.click("#go_inbox");
I.wait(30);
I.see("O seu rascunho de projeto foi criado no Catarse");
I.see("Seu projeto está no ar no Catarse");
I.see("Bem-vindo ao Catarse!");
}

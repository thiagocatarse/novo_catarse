//Iniciar projeto
TEST.run('./form_new_flex_project')

//Criar usuário
TEST.run('../login/sign_up_new_user_02');

//Preencher aba Financiamento
TEST.run('./flex_goals_start');

//Validar publicação
//TEST.run('./flex_validate_publish');

//Preencher aba Financiamento
TEST.run('./flex_goals');

//Preencher aba básico
TEST.run('./basics');

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

//Checar se definição de prazo está funcionando
I.click("Definir prazo");
I.click("#flexible_project_online_days");
I.press("Backspace");
I.type("10");
I.click("Confirmar");
I.see(".modal-dialog-content");
UI.context(".modal-dialog-nav-bottom", function(){
	I.click("Sim");
})
I.see("Seu prazo foi definido com sucesso!");
I.see(".fa-check-circle");
I.click(".modal-close");
I.see("As informações foram atualizadas");
I.dontSee("Definir prazo");
I.click(".thumb-project-dashboard");
I.see("10 dias restantes");

//Deletar projeto
TEST.run('./delete_project')

//Logout
TEST.run('login/logout')

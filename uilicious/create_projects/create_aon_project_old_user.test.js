//Iniciar projeto
TEST.run('./form_new_aon_project_old_user')

//Criar usuário
TEST.run('../login/login_normal_user');

//Preencher aba básico
TEST.run('./basics');

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

//Publicar projeto 
TEST.run('./aon_publish');

//Checar projeto publicado
TEST.run('explore/aon/aon_project_insights_first_time');
I.click(".thumb-project-dashboard");
I.wait(5);
TEST.run('explore/aon/aon_project_show');

//Deletar projeto
TEST.run('./delete_project')

//Logout
TEST.run('login/logout')



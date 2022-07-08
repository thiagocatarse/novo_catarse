// Iniciar rascunho
TEST.run('./form_new_solidaria_project');

//Criar usuário
TEST.run('../login/sign_up_new_user_05');

//Tela Imagem do Projeto
TEST.run('./solidaria_card');

//Tela valor do projeto
TEST.run('./solidaria_goal');

//Tela de recompensas
TEST.run('./solidaria_reward_option');

//Fluxo com recompensas
I.click("Adicionar recompensas");

// Adicionar recompensas
TEST.run('./aon_rewards');
I.click("Próximo")

//Preencher dados do realizador
TEST.run('./solidaria_user_info');

//Checar fluxo de compartilhamento
TEST.run('./solidaria_share_flow');

//Checar projeto publicado
TEST.run('explore/aon/aon_project_insights_first_time');
I.click(".thumb-project-dashboard");
I.wait(5);
TEST.run('explore/aon/solidaria_project_show');

//Deletar projeto
TEST.run('./delete_project')

//Logout
TEST.run('login/logout')
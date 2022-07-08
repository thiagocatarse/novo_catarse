TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO PONTUAL PRE-LANCAMENTO");
TEST.run('create_projects/create_aon_coming_soon');

TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO PONTUAL TUDO OU NADA");

TEST.run('create_projects/create_aon_project');

TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO PONTUAL FLEX");

TEST.run('create_projects/create_flex_project');

TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO PONTUAL TUDO OU NADA ANTIGO USUARIO");

TEST.run('create_projects/create_aon_project_old_user');

TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO PONTUAL FLEX ANTIGO USUARIO");

TEST.run('create_projects/create_flex_project_old_user');

TEST.log.info("🔻🔻🔻🔻🔻 ENVIO DE NOVIDADES EM PROJETO PONTUAL");

TEST.run('create_projects/aon_online_posts');

TEST.log.info("🔻🔻🔻🔻🔻 EXPLORE PROJETOS");

TEST.run('explore/home');

TEST.run('create_projects/aon_online_posts');

TEST.log.info("🔻🔻🔻🔻🔻 PAINEL DE CONTROLE PROJETO ANTIGO");

TEST.run('create_projects/aon_project_insights');






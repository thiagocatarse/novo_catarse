TEST.log.info("π»π»π»π»π» CRIAΓΓO PROJETO PONTUAL PRE-LANCAMENTO");
TEST.run('create_projects/create_aon_coming_soon');

TEST.log.info("π»π»π»π»π» CRIAΓΓO PROJETO PONTUAL TUDO OU NADA");

TEST.run('create_projects/create_aon_project');

TEST.log.info("π»π»π»π»π» CRIAΓΓO PROJETO PONTUAL FLEX");

TEST.run('create_projects/create_flex_project');

TEST.log.info("π»π»π»π»π» CRIAΓΓO PROJETO PONTUAL TUDO OU NADA ANTIGO USUARIO");

TEST.run('create_projects/create_aon_project_old_user');

TEST.log.info("π»π»π»π»π» CRIAΓΓO PROJETO PONTUAL FLEX ANTIGO USUARIO");

TEST.run('create_projects/create_flex_project_old_user');

TEST.log.info("π»π»π»π»π» ENVIO DE NOVIDADES EM PROJETO PONTUAL");

TEST.run('create_projects/aon_online_posts');

TEST.log.info("π»π»π»π»π» EXPLORE PROJETOS");

TEST.run('explore/home');

TEST.run('create_projects/aon_online_posts');

TEST.log.info("π»π»π»π»π» PAINEL DE CONTROLE PROJETO ANTIGO");

TEST.run('create_projects/aon_project_insights');






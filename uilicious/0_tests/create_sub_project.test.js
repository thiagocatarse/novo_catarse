TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO ASSINATURA");

TEST.run('create_projects/create_sub_project');

TEST.log.info("🔻🔻🔻🔻🔻 CRIAÇÃO PROJETO ASSINATURA ANTIGO USUARIO");

TEST.run('create_projects/create_sub_project_old_user');

TEST.log.info("🔻🔻🔻🔻🔻 ENVIO DE NOVIDADES EM PROJETO ASSINATURAS");

TEST.run('create_projects/sub_online_posts');

//TEST.log.info("🔻🔻🔻🔻🔻 RELATORIOS PARA DOWNLOAD EM PROJETO ANTIGO DE ASSINATURA");

//TEST.run('explore/sub/sub_project_subscriptions_report_old_project');

TEST.log.info("🔻🔻🔻🔻🔻 PAINEL DE CONTROLE PROJETO ANTIGO");

TEST.run('create_projects/sub_project_insights');





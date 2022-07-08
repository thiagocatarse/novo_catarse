//Iniciar projeto
TEST.run('./form_new_aon_project')

//Criar usuário
TEST.run('../login/sign_up_new_user_06');

//Pegar URL do projeto
var aon_project_url = UI.execute(function () { 
    return window.location.href.replace('/insights','')
});
TEST.log.info(aon_project_url);

//Tentar criar página em breve sem dados obrigatórios
I.click("Pré-Lançamento");
I.click("Ativar página de pré-lançamento");
I.see("Não foi possível publicar sua página. Confira se a Imagem do Projeto e a Frase de Efeito estão preenchidas corretamente na aba Card do Projeto.");

//Preencher aba básico, imagens do projeto e user
TEST.run('./basics');
TEST.run('./aon_card');
TEST.run('./user_about');
TEST.run('./description');
TEST.run('./aon_budget');


// Publicar página de Pré-Lançamento
I.click("Pré-Lançamento");
I.click("Ativar página de pré-lançamento");
I.see("Ativa");
I.see("0 pessoas");

// Checar página de pré-lançamento
I.click("Visualizar página");
I.see("Em breve no Catarse");
I.see("Avise-me do lançamento!");
I.see("0 seguidores");
I.see(aon_project_name);

//Checar página de rascunho
I.click("Página de rascunho");
TEST.run('explore/aon/aon_project_draft');

//Logout
TEST.run('login/logout')

//Checar se pessoa pode se cadastrar
I.goTo(aon_project_url);
I.click("Avise-me do Lançamento!")
TEST.run('../login/login_normal_user');
I.see("Projeto salvo");
I.see("Você irá receber um email quando este projeto for publicado!");
// Ir para o Historico de apoio
I.click("#user-menu");
I.see("#user-menu-dropdown");
I.click("Notificações");
I.see(aon_project_name);

//Logout
TEST.run('login/logout')


//logar como admin
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_admin');
I.goTo(aon_project_url);

//Checar se tem 1 seguidor
UI.context("#project-nav", function(){
	I.click("Pré-Lançamento");
});
I.see("1 pessoa");
I.click("Desativar");
I.see("Ativar página de pré-lançamento");
UI.context("#project-nav", function(){
	I.click("Preview");
});
I.see("Compartilhe o link ao lado com pessoas de confiança e receba palpites sobre sua campanha antes do lançamento.");
I.dontSee("Útil para compartilhar publicamente e já ir engajando sua comunidade antes mesmo de lançar sua campanha");


// Deletar projeto
I.click("#dashboard_home_link");
I.click("Deletar projeto");
UI.context(".modal-dialog-inner", ()=>{ 
	I.fill(".text-field", "deletar-rascunho");
	I.click("Deletar para sempre");
	I.click("Deletar para sempre");
})
I.see("Projeto deletado com sucesso");


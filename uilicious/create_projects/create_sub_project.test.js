//Iniciar projeto
TEST.run('./form_new_sub_project')

//Criar usuário
TEST.run('../login/sign_up_new_user_03');

//Validar publicação 
//TEST.run('./sub_validate_publish')

//Pegar URL do projeto
var sub_project_url = UI.execute(function () { 
    return window.location.href.replace('/edit#start','')
});
TEST.log.info(sub_project_url);

//Preencher aba básico 
TEST.run('./basics');

//Preencher aba Meta 
TEST.run('./sub_goals');

//Preencher aba Descrição 
TEST.run('./description');

//Preencher aba Imagens 
TEST.run('./sub_card');

//Preencher aba Recompensas 
TEST.run('./sub_rewards');

//Preencher aba Email de boas vindas
TEST.run('./sub_welcome_message');

//Preencher aba Perfil publico
TEST.run('./user_about');

//Preencher aba Perfil publico
TEST.run('./user_settings');

//Publicar projeto
TEST.run('./sub_publish');

//Checar projeto publicado
TEST.run('explore/sub/sub_project_insights_first_time');
TEST.run('explore/sub/sub_project_subscriptions_report_first_time');
I.click(".thumb-project-dashboard");
I.wait(5);
TEST.run('explore/sub/sub_project_show');

//Logout
TEST.run('login/logout');

//deletar projeto sub
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_admin');
I.goTo(sub_project_url);


/* 
UI.execute(function() {
    var csrfToken = document.querySelectorAll('[name=csrf-token]')[0].getAttribute('content')
		fetch(`https://www.catarse.me/admin/projects/${117773}/revert_or_finish`, {
      method: 'PUT',  
			headers: {
            'X-CSRF-Token': csrfToken
        }
    })
    .then(function (response) {
			console.log('aqui acabou')
    })
}, [])
*/ 

if(DATA.site_catarse == 'https://www.catarse.me'){
UI.execute(function() {
  var sub_project_id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
	var csrfToken = document.querySelectorAll('[name=csrf-token]')[0].getAttribute('content')
		fetch(`https://www.catarse.me/admin/projects/${sub_project_id}/revert_or_finish`, {
      method: 'PUT',  
			headers: {
            'X-CSRF-Token': csrfToken
        }
    })
    .then(function (response) {
			console.log('aqui acabou')
    })
}, [])
I.goTo(sub_project_url + "/edit#start");
I.click("#dashboard_home_link");
I.click("Deletar projeto");
UI.context(".modal-dialog-inner", ()=>{ 
	I.fill(".text-field", "deletar-rascunho");
	I.click("Deletar para sempre");
})
}

//Logout
TEST.run('login/logout');

//Checar emails (somente em produção)
I.goTo(DATA.site_catarse);
if(I.amAt$("https://www.catarse.me")){
I.goTo("https://www.mailinator.com/v3/#/#inboxpane");
I.fill("#inbox_field",email_03);
I.click("#go_inbox");
I.wait(30);
I.see("O seu rascunho de projeto foi criado no Catarse");
I.see("Seu projeto está no ar no Catarse");
I.see("Bem-vindo ao Catarse!");
I.see("Relatório - Pagamentos confirmados");
I.see("Relatório - Base de Assinantes");	
}
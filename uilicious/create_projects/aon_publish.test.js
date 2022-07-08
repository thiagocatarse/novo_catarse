UI.context(".btn-send-draft-fixed", function(){ 
  I.click("Continuar");
})

I.wait(5);


var url_aon_project_publish = UI.execute(function () { 
    return window.location.href.replace('publish','push_to_online')
});

I.goTo(url_aon_project_publish);
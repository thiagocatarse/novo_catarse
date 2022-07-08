UI.context(".btn-send-draft-fixed", function(){ 
  I.click("Continuar");
})

I.wait(5);

var url_sub_project_publish = UI.execute(function () { 
    return window.location.href.replace('publish','push_to_online')
});
I.refreshPage();
I.wait(5);

I.goTo(url_sub_project_publish);
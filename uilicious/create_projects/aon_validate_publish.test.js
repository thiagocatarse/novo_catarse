var url_aon_project_validate = UI.execute(function () { 
    return window.location.href.replace('insights','validate_publish')
});

I.goTo(url_aon_project_validate);

I.see(DATA.error_aon_publish);

var url_aon_project_edit = UI.execute(function () { 
    return window.location.href.replace('validate_publish','insights')
});

I.goTo(url_aon_project_edit);
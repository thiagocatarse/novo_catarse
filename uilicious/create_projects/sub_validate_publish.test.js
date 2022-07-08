var url_sub_project_validate = UI.execute(function () { 
    return window.location.href.replace('edit#start','validate_publish')
});

I.goTo(url_sub_project_validate);

I.see(DATA.error_sub_publish);

var url_sub_project_edit = UI.execute(function () { 
    return window.location.href.replace('validate_publish','edit#start')
});

I.goTo(url_sub_project_edit);
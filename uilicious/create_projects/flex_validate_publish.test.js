var url_flex_project_validate = UI.execute(function () { 
    return window.location.href.replace('edit#goal','validate_publish')
});

I.goTo(url_flex_project_validate);

I.see(DATA.error_flex_publish);

var url_flex_project_edit = UI.execute(function () { 
    return window.location.href.replace('validate_publish','insights')
});

I.goTo(url_flex_project_edit);
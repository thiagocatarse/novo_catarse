//Checar botão de baixar relatórios
I.click("Baixar relatórios");
I.see("Exportar CSV/XLS");
I.see("Ver exportações");

//Escolher baixar relatórios
I.click("Exportar CSV/XLS");
I.see(".modal-backdrop");
I.see(".modal-dialog-outer");
I.see(".modal-dialog-inner");
I.select("Base de Assinantes");
I.select("Pagamentos confirmados");
I.select("Excel (XLS)");
I.click("Avançar");
I.see("Pronto! Estamos preparando seu arquivo.");
I.click("Acompanhar progresso");


//Checar página de exportações
TEST.run('explore/sub/sub_project_subscriptions_report_download_check');

//Voltar na navegação
var url_subscriptions_report = UI.execute(function () { 
    return window.location.href.replace('subscriptions_report_download','subscriptions_report ')
});
I.goTo(url_subscriptions_report);

//Checar botão de baixar relatórios
I.click("Baixar relatórios");
I.click("Ver exportações");

//Checar página de exportações
TEST.run('explore/sub/sub_project_subscriptions_report_download_check');

//Voltar na navegação
var url_subscriptions_report = UI.execute(function () { 
    return window.location.href.replace('subscriptions_report_download','subscriptions_report ')
});
I.goTo(url_subscriptions_report);



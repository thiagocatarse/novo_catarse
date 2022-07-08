I.click("#dashboard_subscriptions_link");

//Checar filtros de pesquisa
I.see("Base de assinantes");
I.see("Nome ou email");
I.see("Busque por assinantes");
I.see("Status"); 
I.see("Recompensa");
I.see("Meio de pgto.");
I.see("Total pago");
I.see("Meses pagos");
UI.context(".dashboard-header", function(){
	I.count(".text-field", 7);
})

//Checar cards de assinantes
I.see("0 assinaturas");  
I.see("Baixar relatórios");
I.see("Assinante");
I.see("Recompensa");
I.see("Pgto. mensal");
I.see("Total pago");
I.see("Última cobrança");
I.see("Status da Assinatura");

//Checar relatórios para download de assinaturas
TEST.run('explore/sub/sub_project_subscriptions_report_download')
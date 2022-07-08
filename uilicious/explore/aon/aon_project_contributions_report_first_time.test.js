I.click("#dashboard_reports_link");

//Checar filtros de pesquisa
I.see("Relatório de apoios");
I.see("Status do apoio");
I.see("Recompensa");
I.see("Status da entrega"); 
I.see("Status do questionário");
I.see("Busque por nome ou email do apoiador");
I.see("Buscar");

//Checar cards de assinantes
I.see("0 apoios");  
I.see("Baixar relatórios");
I.see("Selecionar todos");

//Checar relatórios para download de assinaturas
TEST.run('explore/aon/aon_project_contributions_report_download')
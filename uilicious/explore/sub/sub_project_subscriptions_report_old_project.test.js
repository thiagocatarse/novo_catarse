//Logout
TEST.run('login/logout')

//Login Admin
I.goTo("https://sandbox.catarse.me/pt/login");
TEST.run('login/login_admin');

//Acessar relatórios para download
I.goTo("https://sandbox.catarse.me/projects/47626");
I.goTo("https://sandbox.catarse.me/projects/47626/subscriptions_monthly_report_for_project_owners.csv");
I.dontSee("Desculpe, estamos com problemas");
I.goTo("https://sandbox.catarse.me/projects/47626");
I.goTo("https://sandbox.catarse.me/projects/47626/subscriptions_report_for_project_owners.csv");
I.dontSee("Desculpe, estamos com problemas");
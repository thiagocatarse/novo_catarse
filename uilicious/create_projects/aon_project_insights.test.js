//logar como admin
I.goTo(DATA.site_catarse + "/pt/login");
TEST.run('login/login_admin');

I.goTo(DATA.site_catarse);
I.goTo(DATA.project_aon_01_url);
I.click("#dashboard_home_link");
I.wait(5);
if(I.amAt$("https://sandbox.catarse.me/projects/48174/insights")){
	I.count("canvas#chart",2);
}
if(I.amAt$("https://www.catarse.me/projects/117700/insights")){
	I.count("canvas#chart",3);
}

//Logout
TEST.run('login/logout')

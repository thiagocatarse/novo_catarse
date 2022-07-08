if(I.see$("Faça seu login")){
  I.click("Faça seu login");
}
I.fill("email", DATA.login_normal_user_email + "@catarse.me");
I.fill("password", DATA.login_normal_user_password);
I.click("Fazer login");
I.wait(5);


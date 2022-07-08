/*
let email_03 = SAMPLE.id(10);
I.fill("email", "qa_prod+" + email_03 + "@catarse.me");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
*/
let email_03 = SAMPLE.id(10);
I.fill("email", email_03 + "@mailinator.com");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
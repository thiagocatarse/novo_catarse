/*
let email_01 = SAMPLE.id(10);
I.fill("email", "qa_prod+" + email_01 + "@catarse.me");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");
*/

let email_01 = SAMPLE.id(10);
I.fill("email", email_01 + "@mailinator.com");
I.fill("password", DATA.signup_password);
I.click("Efetuar cadastro");

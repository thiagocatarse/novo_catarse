I.click("#goal_link");
I.click(".choose-flex");
I.see(".choose-limited");
I.see(".choose-unlimited");
I.fill("#project-goal-input","10000");
I.click("Salvar");
I.refreshPage();
UI.context(".card-notification", function(){ // the following commands runs on the login form on
  I.click(".icon-close");
});
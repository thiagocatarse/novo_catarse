I.click("#budget_link");
UI.context("#budget-tab", function(){
  I.click(".redactor-editor");
	I.type("Lorem-ipsum-budget-project")
	I.click("Salvar")
})
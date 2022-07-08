I.goTo(DATA.create_sub_project);
if(I.see$("Protected Page")){
  I.fill("password", "123mudar");
	I.click("Submit");
}

let sub_project_name_old_user = SAMPLE.id(12);

UI.context("#form-create-projects", ()=>{ 
  I.fill("project[name]", sub_project_name_old_user)
  I.select("project[category_id]", "Artes")
	I.click("Comece seu rascunho")
})
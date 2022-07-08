I.click("#dashboard_home_link");
I.click("Cancelar projeto");
UI.context(".modal-dialog-inner", ()=>{ 
	I.fill(".text-field", "cancelar-projeto");
	I.click("Próximo passo");
	I.click("Cancelar campanha");
})
I.see("AGUARDANDO CANCELAMENTO");
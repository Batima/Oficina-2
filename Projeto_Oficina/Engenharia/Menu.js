var Menu = function()
{	
	instruct = false;
	credit = false;
	menu = true;
	SetaOk = true;
	waitReturn = false;
	time = 60;
	oneTime = false;
		
	
	this.nuvem1 = new Nuvem(700,50,-4,-800,50,["Arte/GarçaBranca1_F1.png","Arte/GarçaBranca1_F2.png","Arte/GarçaBranca1_F3.png"]);
	this.nuvem2 = new Nuvem(0,10,-4,800,10,["Arte/GarçaBranca2_F1.png","Arte/GarçaBranca2_F2.png","Arte/GarçaBranca2_F3.png"]);	
	this.nuvem3 = new Nuvem(300,NuvemOrigin,-20,300,100,["Arte/Logo.png"]);
	
	this.buttonIniciar = new Button(610,485,310, ["Arte/Buttons_G/B_Iniciar_G.png","Arte/Buttons_P/B_Iniciar_P.png"], "menu");
	this.buttonCreditos = new Button(610,485,398, ["Arte/Buttons_G/B_Creditos_G.png","Arte/Buttons_P/B_Creditos_P.png"], "menu");
	this.buttonInstrução = new Button(610,485,486, ["Arte/Buttons_G/B_Instrucao_G.png","Arte/Buttons_P/B_Instrucao_P.png"], "menu");
	
	this.source = [];
	
	this.draw = function()
	{
		masterImage.setPosition("menu");
		if(wBMenu){
			this.buttonIniciar.draw();
			this.buttonCreditos.draw();
			this.buttonInstrução.draw();
		}
	}
	
	this.update = function()
	{		
		if(this.nuvem3.y == 140){NuvemOrigin = 100;}
		
		if(wBMenu){
			if(colisionMouse(this.buttonIniciar)){
				this.buttonIniciar.bigButton();
				
				this.buttonIniciar.frame = 0;
				
				if(mouse_pressed){
					PlayOk = true;
					changeScene(Difficulty);
				}
			}
			else{
				this.buttonIniciar.smallButton();
			
				this.buttonIniciar.frame = 1;
			}
			
			if(colisionMouse(this.buttonCreditos))
			{
				this.buttonCreditos.bigButton();

				this.buttonCreditos.frame = 0;
				
				if(mouse_pressed){
					PlayOk = true;
					changeScene(Credit);			
				}
			}
			else{
				this.buttonCreditos.smallButton();

				this.buttonCreditos.frame = 1;
			}
			
			if(colisionMouse(this.buttonInstrução))
			{
				this.buttonInstrução.bigButton();

				this.buttonInstrução.frame = 0;
				
				if(mouse_pressed){
					PlayOk = true;
					changeScene(Instruct);			
				}
			}
			else{
				this.buttonInstrução.smallButton();

				this.buttonInstrução.frame = 1;
			}
					

			this.nuvem1.start(3);
			this.nuvem2.start(3);
			this.nuvem3.start(1);
			
		}
	}
}
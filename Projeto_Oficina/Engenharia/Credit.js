var Credit = function()
{
	game = false;
	instruct = false;
	credit = true;
	gover = false;
	menu = false;
	timestop = false;
	timerstop = false;
	SetaOk = true;
	cReturn = true;
	iReturn = false;
	wBMenu = false;
	
	this.x = 0;
	//this.nuvem1 = new Nuvem(0,10,-4,700,10,["Arte/nuvem.png"]);
	//this.nuvem2 = new Nuvem(700,75,-4,80,75,["Arte/nuvem2.png"]);
	this.buttonReturn = new Button(80,0,525, ["Arte/Buttons_G/voltar_grande.png","Arte/Buttons_P/voltar.png"], "voltar");
	
	this.draw = function()
	{
		masterImage.setPosition("creditos");
		
		if(waitReturn){
				this.buttonReturn.draw();
				
				if(colisionMouse(this.buttonReturn)){
				this.buttonReturn.bigButton();
				
				this.buttonReturn.frame = 0;
				
				if(mouse_pressed){
					PlayOk = true;
					bReturn = true;
					changeScene(Menu);
				}
			}
			else{
				this.buttonReturn.smallButton();
			
				this.buttonReturn.frame = 1;
			}
		}
	}
	
	this.update = function()
	{
		//this.nuvem2.start();
		//this.nuvem1.start();
	}
}
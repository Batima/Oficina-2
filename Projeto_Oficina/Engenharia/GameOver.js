var Gover = function()
{
	game = false;
	instruct = false;
	credit = false;
	gover = true;
	menu = false;
	timestop = false;
	timerstop = false;
	Iniciar = false;
	waitButtons = false;
	dificuldade = "";
	SetaOk  = true;
	cReturn = false;
	iReturn = false;
	wBMenu = false;

	time = 60;
	
	this.frame = 0;
	this.score = Score;
	this.source = ["Arte/gover1.png"];
	this.texture = new Imagem(ctx, this.source);
	
	this.buttonReturn = new Button(80,0,525, ["Arte/Buttons_G/voltar_grande.png","Arte/Buttons_P/voltar.png"], "voltar");
	
	/*if(dificuldade == "facil"){this.x = 0;}
	else if(dificuldade == "medio"){this.x = -820;}
	else if(dificuldade == "dificil"){this.x = -1641.5;}
	else{this.x = 0;}*/
	this.x = 0;
	this.y = 0;
	
	this.draw = function()
	{
		this.texture.desenhar(this.frame,this.x,this.y);
		
				this.buttonReturn.draw();
				
				if(colisionMouse(this.buttonReturn)){
				this.buttonReturn.bigButton();
				
				this.buttonReturn.frame = 0;
				
				if(mouse_pressed){
					PlayOk = true;
					changeScene(Menu, true);
				}
			}
			else{
				this.buttonReturn.smallButton();
			
				this.buttonReturn.frame = 1;
			}
		
	}
	
	this.update = function()
	{
		drawText(400,300, this.score, 'black', '50px ZonkersHand');
	}
}
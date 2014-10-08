var Difficulty = function(){
	
	menu = false;
	difficulty = true;
	SetaOk = true;

	this.buttonFacil = new Button(150,25,80, ["Arte/Buttons_G/B_DificuldadeF_G.png","Arte/Buttons_P/B_DificuldadeF_P.png"], "nuvem");
	this.buttonMedio = new Button(390,265,220, ["Arte/Buttons_G/B_DificuldadeM_G.png","Arte/Buttons_P/B_DificuldadeM_P.png"], "nuvem");
	this.buttonDificil = new Button(650,525,340, ["Arte/Buttons_G/B_DificuldadeD_G.png","Arte/Buttons_P/B_DificuldadeD_P.png"], "nuvem");

	this.draw = function (){
		masterImage.setPosition("dificuldade");
		if(masterImage.y > -49 ){
			this.buttonFacil.draw();
			this.buttonMedio.draw();
			this.buttonDificil.draw();
			
			waitButtons = true;
		}
	}
	
	this.update = function (){
	
		if(waitButtons){
			if(colisionMouse(this.buttonFacil)){
				this.buttonFacil.bigButton();
				
				this.buttonFacil.frame = 0;
				
				if(mouse_pressed){
					PlayOk = true;
					dificuldade = "facil";
					changeScene(Game);
				}
			}
			else{
				this.buttonFacil.smallButton();		
				this.buttonFacil.frame = 1;
			}
			
			if(colisionMouse(this.buttonMedio))
			{
				this.buttonMedio.bigButton();

				this.buttonMedio.frame = 0;
				if(mouse_pressed){
					PlayOk = true;
					dificuldade = "medio";
					changeScene(Game);
				}
			}
			else{
				this.buttonMedio.smallButton();	

				this.buttonMedio.frame = 1;
			}
			
			if(colisionMouse(this.buttonDificil))
			{
				this.buttonDificil.bigButton();

				this.buttonDificil.frame = 0;
				if(mouse_pressed){
					PlayOk = true;
					dificuldade = "dificil";
					changeScene(Game);
				}
			}
			else{
				this.buttonDificil.smallButton();	

				this.buttonDificil.frame = 1;
			}
		}
	
	}
}

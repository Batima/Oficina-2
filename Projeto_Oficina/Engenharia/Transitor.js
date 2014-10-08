var Transitor = function(){

	this.source = ["Arte/Tela_Master.png"];
	this.texture = new Imagem(ctx, this.source);	
	this.x ;
	this.y ;
	this.speed = 20;
	done = false;
	
	this.setPosition = function(bgPosition){
		
		this.bgPosition = bgPosition;

		switch(this.bgPosition){

			case "menu":
				if(!iReturn && !cReturn){
					this.x = -890;
					this.y = -600;
					wBMenu = true;
				}else if (iReturn && this.x > -890){
					this.x -= this.speed;
				} else if(cReturn && this.y < -600){
					this.y += this.speed;
				} else if ( this.x <= - 890 && this.y >= -600){
					wBMenu = true;
				}
				
			break;
			
			case "instruçao":
				if(this.x < -130)  this.x += this.speed;
				else{waitReturn = true;}
			break;
			
			case "creditos": 
				if(this.y > -1230) this.y -= this.speed;
				else{waitReturn = true;}
			break;
			
			case "dificuldade":
				if(this.y < -50) this.y += this.speed;
			break;
			
			case "jogo":
				switch (dificuldade){
					case "facil":
						if(this.x > -1720){
							this.x -= this.speed;
						}
						
						if(this.x <= -1720){
							if(this.y > -600){
								this.y -= this.speed;
								done = true;
							}
						}
					break;
					
					case "medio":
						if(this.x > -2517){
							this.x -= this.speed;							
						}
						
						if(this.x <= -2517){
							if(this.y > -600){
								this.y -= this.speed;
								done = true;
							}
						}
					break;
					
					case "dificil":			
						if(this.x > -3320){
							this.x -= this.speed;
							//console.log(this.x)
						}
						
						if(this.x <= -3320){
							if(this.y > -600){
								this.y -= this.speed;
								done = true;
								
							}
						}
					break;
				
				}
			break;
			
		}
		this.texture.desenhar(0, this.x, this.y);
		
	}
}
var Game = function()
{
	game = true;
	timestop = true;
	difficulty = false;
	waitButtons = false;
	Score = 0;
	
	this.done = true;
	this.player = new Player(400,465);
	this.playershots = [];
	this.enemyshots = [];
	this.enemies = [];
	this.x = 0;
	this.lifes = [];
	this.tempo = new Nuvem(10,250,0,0,0,["Arte/T1.png","Arte/T2.png","Arte/T3.png","Arte/T4.png"]);
	SetaOk = false;
	animationsGame = true;
	this.CDS = [];
	this.CD = new Nuvem(10,136,0,0,0,["Arte/C1.png"]);
	//this.CD2 = new Nuvem(10,136,0,0,0,["Arte/C2.png"]);
	//this.CD3 = new Nuvem(10,136,0,0,0,["Arte/C3.png]);
	
	for(var i = 0; i < 3; i++)
	{
		this.lifes[i] = new Nuvem(10 + i * 35,200,0,0,0,["Arte/Vida.png"]);
	}
	
	
	this.cor = "black";
	StartTime();

	this.draw = function()
	{	

			masterImage.setPosition("jogo");
			if(done)
			{
				time = 60;
				done = false;
			}
		
		
		
		if(masterImage.y <= - 600){
				
				this.CD.draw();
				if(!pause)
				{
					this.tempo.draw();
				}
				for(var i = 0; i < this.player.life; i++)
				{
					this.lifes[i].draw();
				}
				drawText(10,100, "score: " + Score , this.cor, '25px ZonkersHand');
				//drawText(10,150, "cooldown: ", this.cor, '25px ZonkersHand');
				drawText(60,275, time , this.cor, '25px ZonkersHand');
				//drawText(10,250, "vida: " + this.player.life , this.cor, '25px ZonkersHand');
				/*
				if(timer >= 50)
				{
					drawRect(125,136,timer,11,"red");
				}
				else if(timer >= 25 && timer < 50)
				{
					drawRect(125,136,timer,11,"yellow");
				}
				else if(timer < 25)
				{
					drawRect(125,136,timer,11,"gray");
				}
				*/
				if(pause)
				{
					drawText(365,300, "Pause" , 'Black', '50px ZonkersHand');
				}
				for(var i = 0; i < cds; i++)
				{
					if(this.CDS[i] != null)
					{
						this.CDS[i].draw();
					}
				}
		}
	}
	
	this.update = function()
	{

		if(masterImage.y <= - 600){
		
			if(!pause)
			{
				BgOk = true;
				this.player.update();
				this.player.draw();
				

				for(var i = 0; i < 9; i++)
				{
					this.CDS[i] = new Nuvem(30 + i * 16,137,0,0,0,["Arte/C2.png"]);
				}
				if(cds <= 9)
				{
					this.CDS[cds] = new Nuvem(30 + cds * 16,136,0,0,0,["Arte/C3.png"]);
				}
				console.log(cds);
				
				
				for(var i = 0; i < this.enemies.length; i++)
				{
					this.enemies[i].update();
					this.enemies[i].draw();
					
					
					if(this.enemies[i].shots <= 0 && this.enemies[i].x >= 0 && this.enemies[i].x <= canvas.width - this.enemies[i].w)
					{	
						this.enemies[i].downfall = true;
						this.enemies[i].behavior();
						EnemyDown = true;
						
						if(this.enemies[i].y > canvas.height + this.enemies[i].h)
						{
							this.enemies.splice(i,1);
							Score -= 5;
							break;
						}
					}
					else if(this.enemies[i].shots <= 0)
					{
						this.enemies[i].x = 1;
					}
				}
				
				if(this.enemies.length <= 0)
				{
					for(var i = 0; i < 3; i++)
					{
						this.enemies[i] = new Inimigo(150 + i * 225, -60 * i,this,(i + 1));
					}
				}
				
				for(var i = 0; i < this.playershots.length; i++)
				{
					this.playershots[i].update();
					this.playershots[i].draw();
					
					if(this.playershots[i].y < 0)
					{
						this.playershots.splice(i,1);
					}
				}
				
				for(var i = 0; i < this.enemyshots.length; i++)
				{
					this.enemyshots[i].update();
					this.enemyshots[i].draw();
					
					if(this.enemyshots[i].y > canvas.height)
					{
						this.enemyshots.splice(i,1);
						Score -= 5;
					}
				}
				
				// colisao tiroinimigo+tiroplayer
				for(var i = 0; i < this.playershots.length; i++)
				{
						for(var j = 0; j < this.enemyshots.length ; j++)
						{
							if(colidiu(this.playershots[i], this.enemyshots[j]))
							{
								
								this.playershots.splice(i,1);
								this.enemyshots.splice(j,1);
								Score += 5;
								break;
							}
						}	
				}
				
				//colisao tiro+player
				for(var j = 0; j < this.enemyshots.length ; j++)
				{
					if(colidiu(this.player, this.enemyshots[j]))
					{
						this.enemyshots.splice(j,1);
						this.player.life--;

						if(this.player.life <=0){
							//console.log("FOI PRO HELL")
							changeScene(Gover,true);
						}
					break;
					}			
				}
				
				//colisao player+inimigo
				for(var j = 0; j < this.enemies.length ; j++)
				{
					if(colidiu(this.player, this.enemies[j]))
					{
						this.enemies.splice(j,1);
						this.player.life--;
						//console.log(this.player.life)
						
						if(this.player.life <=0)
						{
							changeScene(Gover,true);
						}
					}
				}
				
				// colisao garça+playershot
				for(var i = 0; i < this.playershots.length; i++)
				{
					for(var j = 0; j < this.enemies.length ; j++)
					{
						if(colidiu(this.playershots[i], this.enemies[j]))
						{
							EnemyDamage = true;
							this.playershots.splice(i,1);
							
							if(this.enemies[j].downfall)
							{
								this.enemies[j].life--;
								
								if(this.enemies[j].life <= 0)
								{
									this.enemies.splice(j, 1);
									Score += 5;
									break;
								}
								
							}
							
							break;
						}
					}	
				}
				if(Score < 0){Score = 0;}
			}
			else{BgOk = false;}
		}
	}
}
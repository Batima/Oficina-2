Inimigo = function(x,y,scene,type)
{
	this.source = ["Arte/Inimigo" + type + "" + ".png"];
	this.texture = new Imagem(ctx, this.source);
	this.scene = scene;
	this.x = x;
	this.y = y;
	this.amp = 8;
	this.freq = 2;	
	this.xStart = 0;
	this.h = 90;
	this.w = 126;
	this.shots = 3;
	this.speed = 7;
	this.xSpeed = 5;
	this.life = 2;
	this.downfall = false;
	this.frame = 0;
	this.shootok = false;
	
	this.draw = function()
	{
		this.texture.desenhar(this.frame,this.x,this.y);
	}
	
	this.behavior = function (){
		
		switch (dificuldade) {
			case "facil":
				this.y += this.speed/2;
			break;
			
			case "medio":
				this.y += this.speed/2;
				this.x = this.amp*Math.sin(this.freq*2*Math.PI) + this.x;
				this.freq+=0.05;	
			break;
			
			case "dificil":
				this.y += this.speed;
				this.x = this.amp*Math.sin(this.freq*2*Math.PI) + this.x;
				this.freq+=0.05;
			break;
		}
	}
	
	this.start = function()
	{
		if(this.y < 25)
		{
			this.shootok = false;
			this.y += 5;
		}
		
		else
		{
			this.shootok = true;
		}
		
	}
	
	this.update = function()
	{
		this.start();
		
		if(this.shots > 0)
		{
			//this.x += this.speed;
			
			for(var i = 0; i < scene.enemies.length; i++)
			{
				if(this.x + this.w > canvas.width)
				{
					this.x = 300 / 75 - 100;
				}
			}
			
			var chance = 1 + Math.floor(Math.random() * 100);
			
			if(chance == 50)
			{
				if(this.shootok)
				{
					this.shots--;
					EnemyShot = true;
					scene.enemyshots.push(new Tiro(this.x+this.w/2, this.y, ["Arte/tiroinimigo.png"], 5,30,30));
				}
			}
		}
		
	}	
}
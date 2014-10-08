Player = function(x,y)
{
	this.source = [];
	
	for(var i = 0; i < 6; i++){
		this.source[i] = "Arte/AnimationPlayer/Player" + i +".png";
	}
	
	this.texture = new Imagem(ctx, this.source);
	this.x = x;
	this.y = y;
	this.h = 136;
	this.w = 60;
	this.speed = 15;
	this.life = 3;
	this.frame = 0;
	this.shooting = false;
	this.delay = 0;
	
	this.animator = function(frame, frame2)
	{
		if(this.shooting){this.frame = frame;this.shooting = false;}
		else{this.frame = frame2;}
	}
	
	this.draw = function()
	{
		this.texture.desenhar(this.frame,this.x,this.y);
	}
	
	this.update = function()
	{
		if(moveleft)
		{
			this.x -= this.speed;
			this.animator(0,3);

		}
		//console.log(this.x);
		
		else if(moveright)
		{
			this.x += this.speed;
			this.animator(2,5);
		}
		
		else{
			this.animator(1,4);
		}
		
		if(this.x < 200)
		{
			this.x = 200;
		}
		if(this.x > 700)
		{
			this.x = 700;
		}
			
		if(shoot && timer <= 50)
		{
			this.shooting = true;
			scene.playershots.push(new Tiro(this.x + this.w/3,this.y + this.h/4,["Arte/tiroplayer.png"], -10, 21,27));
			timer += 5;
			cds++;
			shoot = false;
		}
		
		else if(shoot && timer < 70 && timer > 50)
		{
			timer += 5;
			cds++;
			shoot = false;
		}
	}
}
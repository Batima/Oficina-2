Nuvem = function(x,y,speed,limitX,limitY,source)
{
	this.x = x;
	this.y = y;
	this.w = 50;
	this.h = 50;
	this.speed = speed;
	this.maX = limitX;
	this.maY = limitY;
	this.source = source;
	this.texture = new Imagem(ctx, this.source);
	this.frame = 0;
	
	this.draw = function()
	{
		//this.texture.desenhar(this.frame,this.x,this.y);
		this.texture.animar(3, this.source.length, this.x, this.y);

	}

	this.start = function()
	{	
		if(this.x > this.maX)
		{
			this.x += this.speed;
		}
		if(this.x < this.maX)
		{
			this.x -= this.speed;
		}
		
		if(this.y > this.maY)
		{
			this.y += this.speed;
		}
		if(this.y < this.maY)
		{
			this.y -= this.speed;
		}
		
		this.draw();
	}
	

	
}
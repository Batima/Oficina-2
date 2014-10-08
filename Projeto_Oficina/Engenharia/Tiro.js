var Tiro = function(x,y,source,speed, w, h)
{
	this.source = source;
	this.texture = new Imagem(ctx, this.source);
	this.x = x-w/2;
	this.y = y;
	this.h = h;
	this.w = w;
	this.speed = speed;
	this.frame = 0;
	this.draw = function()
	{
		this.texture.desenhar(this.frame,this.x,this.y);
	}
	this.update = function()
	{
		this.y += this.speed;
	}
}
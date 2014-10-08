var Mouse = function()
{
	this.source = ["Arte/Seta.png"];
	this.texture = new Imagem(ctx, this.source);
	this.w = 250;
	this.h = 150;
	this.x = mouseX - (this.w/this.divisor);
	this.y = mouseY - (this.h/this.divisor);
	this.w = 250;
	this.h = 150;
	this.frame = 0;
	this.divisor = 24;
	
	this.draw = function()
	{
		if(SetaOk)
		{
			this.texture.desenhar(this.frame,this.x,this.y);
		}
	}
	this.update = function()
	{
		this.x = mouseX - (this.w/this.divisor);
		this.y = mouseY - (this.h/this.divisor);
	}
}
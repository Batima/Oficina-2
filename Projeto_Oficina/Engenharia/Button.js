var Button = function(x,bigX,y,source,buttonType)
{
	this.source = source;
	this.texture = new Imagem(ctx, this.source);
	this.x = x;
	this.bigX = bigX;
	this.y = y;
	if(buttonType == "menu"){
		this.h = 44;
		this.w = 185;
		this.bigW = 219;
	}else if(buttonType == "voltar"){
		this.h = 50;
		this.w = 105;
		this.bigW = 136;
	}else{
		this.h = 73;	
		this.w = 185;
		this.bigW = 219;
	}
	
	this.mouseOver;
	this.frame = 1;
	
	this.draw = function()
	{
		this.texture.desenhar(this.frame,this.x,this.y);
	}
	
	this.bigButton = function (){
		this.x = this.bigX;
	}
	
	this.smallButton = function(){
		this.x = x-this.bigW/2;
	}
	
	this.moveCloudButton = function (){
		this.x += 3;
	}
}
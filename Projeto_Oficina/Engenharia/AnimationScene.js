var AnimationScene = function(source,frameNum)
{
	SetaOk = false;
	this.source = [];
	this.frame = 0;
	this.Ended = false;
	this.format = ").jpg";
	
	if(AnimationFrames == 49)
	{
		this.format = ").png";
	}
	else{this.format = ").jpg";}
	
	for(var i = 0; i < frameNum; i++)
	{
		this.source[i] = source + (i + 1) + this.format;
		//"Arte/Animation/EnterAnimation (" + (i + 1) + ").jpg";
	}
	this.texture = new Imagem(ctx, this.source);
	
	this.update = function()
	{
		this.frame++;
		
		if(this.frame >= this.source.length)
		{
			this.Ended = true;
			//changeScene(Menu,true);
		}
		
		if(mouse_pressed)
		{
			//changeScene(Menu,true);
			this.Ended = true;
		}
	}
	
	this.draw = function()
	{
		if(!this.Ended)
		{
			this.texture.desenhar(this.frame,0,0);
		}
	}
	
}//214,87
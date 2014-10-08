	function Imagem(ctx, srcs)
	{
		this.frames = [];
		this.srcs = srcs;
		this.ctx = ctx;
		this.onloaded = [];
		var bool = false;
		this.currentFrame = 0.;

		for(i = 0; i < this.srcs.length; i++)
		{	
			bool = false;
			//console.log(bool);
			this.frames[i] = new Image();
			this.frames[i].src = this.srcs[i];
				
			this.frames[i].onload = function()
			{
				bool = true;
				//console.log("carrego");
			}
		}
			
			this.desenhar = function (frame,x,y)
			{
				if(bool)
				{
					ctx.drawImage(this.frames[frame],x,y);
				}
			}
			
			this.animar = function (fps,frame,x,y)
			{
				if(bool)
				{
					this.currentFrame += delta * fps;
					//console.log( ' delta ' + delta );
					ctx.drawImage(this.frames[Math.floor(this.currentFrame%frame)], x, y);
				}
			}
	}
		 
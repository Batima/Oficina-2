//funções\/

menu = true;
instruct = false;
credit = false;
difficulty = false;
game = false;
gover = false;
timestop = false;
pause = false;
time = 60;

var Score = 0;
var BgOk = false;
var EnemyDamage = false;
var EnemyDown = false;
var EnemyShot = false;
var NuvemOrigin = 600;
var cds = 0;
var anime = false;

var StartTime = function()
{
	timerstop = true;
	updatetimer();
	passtime();
	time = 60;
}

function deltaTime()
{
	current = (new Date()).getTime();
	elapsed = current - start;
	start = current;
	var delta = elapsed / 1000;
	return delta;
}

var drawRect = function(x,y,w,h,color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}

var drawCircle = function(x,y,r,color)
{
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc( x, y, r, 0, 2 * Math.PI);
	ctx.fill();
}

var drawText = function(x,y,text,color,font)
{
	ctx.save();
	ctx.fillStyle = color;
	ctx.font = font;
	ctx.fillText(text, x, y);
	ctx.restore();
}

var cenainit;
var fade = "null";

var changeScene = function(Cena,fadet)
{
	if(fadet == undefined)
	{
		scene = new Cena();
	}
	if(fadet)
	{
		fade = "out";
		cenainit = Cena;
	}
}

var fadeOut = function()
{
	if(fade == "out")
	{
		ctx.globalAlpha -= 0.04;
	}	
	
	if(ctx.globalAlpha < 0.04)
	{
		fade = "in";
		scene = new cenainit();
	}
}

var fadeIn = function()
{
	if(fade == "in")
	{
		ctx.globalAlpha += 0.02;
	}
	
	if(ctx.globalAlpha >= 0.98)
	{
		fade = "null";
	}
}

var fades = function()
{
	fadeOut();
	fadeIn();
}

var timerinit = timer;
var timerstop = false;
cdsinit = cds;

var updatetimer = function()
{
	timerinit = timer;
	cdsinit = cds;
	
	if(timer > 0)
	{
		if(!pause)
		{
			timer -= 5;
			cds--;
		}	
	}
	
	if(timerstop)
	{
		setTimeout(updatetimer,700);
	}	

}

var timeinit = time;

var passtime = function()
{
	timeinit = time;
	if(!pause)
	{
		time--;
	}	
	
	if(time <= 0)
	{
		changeScene(Gover,true);
	}
	
	if(timestop)
	{
		setTimeout(passtime,1000);
	}	
}

var colidiu = function(corpo1, corpo2)
{
	if(corpo1.x < corpo2.x + corpo2.w &&
		corpo1.x + corpo2.w > corpo2.x  &&
		corpo1.y < corpo2.y + corpo2.h &&
		corpo1.y + corpo2.h > corpo2.y)
		{
			return true;
		}
		else
		{
			return false;
		}
}

var colisionMouse = function(corpo){
	
	if(mouse_x > corpo.x  && mouse_y > corpo.y
		&& mouse_x < corpo.x + corpo.w && mouse_y < corpo.y + corpo.h)
		{
			return true;
		}
		else{
			return false;
		}
		
}

var Atirou = false;
var timer = 0;

var dificuldade = "";

var PlayOk = false;
var waitButtons = false;
var waitReturn = false;
var cReturn = false;
var iReturn = false;
var wBMenu = false;
var mouseX;
var mouseY;

    //funções/\
	
	//input\/
	function input()
	{
		 mouse_x = 0;
		 mouse_y = 0;
		 mouse_pressed = false;
		 
		 _mouseMove = function(e)
		{
			mouse_x = e.x;
			mouse_y = e.y;
			mouseX = e.x;
			mouseY = e.y;
			//console.clear();
			//console.log("X:" + e.x , "Y:" + e.y);
		}
		
		  _mouseUp = function(e)
		{
			mouse_pressed = false;
		}	
		 _mouseDown = function(e)
		{
				mouse_pressed = true;
				mouse_x = e.x;
				mouse_y = e.y;
		}	
		
		
			 moveleft = false;
			 moveright = false;
			 shoot = false;
			 game = false;
			 
			
			 _keyDown = function(e)
			{
				switch (e.keyCode)
				{
					case 37: // seta esquerda
					if(game)
					{
						moveleft = true;
					}	
						break;

					case 39: // seta direita
					if(game)
					{
						moveright = true;
					}	
						break;
					
					case 32: // espaço
					if(game)
					{
						shoot = false;
					}	
						break;
					
					case 27: // escape
					if(game)
					{
						scene = new Menu();
					}
						break;
					
					default:
						console.log("keyDown: " + e.keyCode);
						break;
				}
			}
			
			 _keyUp = function(e)
			{
				switch (e.keyCode)
				{
					case 37:
					if(game)
					{
						moveleft = false;
					}	
						break;

					case 39:
					if(game)
					{
						moveright = false;
					}	
						break;
						
					case 38:
					if(game)
					{
						jump = false;
					}	
						break;
						
					case 32:
					if(game)
					{
						shoot = true;
						Atirou = true;
					}
						break;
						
					case 13: //enter
					if(game)
					{
						if(masterImage.y == - 600){
							if(pause)
							{
								pause = false;
								timestop = true;
								timerstop = true;
								passtime();
								updatetimer();
								
							}
							
							else if(!pause)
							{
								timestop = false;
								timerstop = false;
								pause = true;
							}
						}
					}
						break;
					
				}				
			}
			
			document.addEventListener("mousemove", _mouseMove, false);
			document.addEventListener("mouseup",   _mouseUp,   false);
			document.addEventListener("mousedown", _mouseDown, false);
			document.addEventListener("keydown", _keyDown, true);
			document.addEventListener("keyup",   _keyUp,   true);
	}		

	//input/\

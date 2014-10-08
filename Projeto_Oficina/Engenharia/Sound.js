function LoaderSound(src){

	this.sound = new Audio();
	this.sound.src = src;
	this.bool = false;
	
	this.sound.oncanplaythrough = function()
	{
		this.bool = true;
	}
}
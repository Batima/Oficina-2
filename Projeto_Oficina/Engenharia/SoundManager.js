var SoundManager = function()
{
	this.SoundClick = new LoaderSound("Som/click.wav");
	this.SoundAtirou = new LoaderSound("Som/Atirou.wav");
	this.SoundBg = new LoaderSound("Som/Background.wav");
	this.SoundEnemyDamage = new LoaderSound("Som/InimigoAtacado.wav");
	this.SoundEnemyDown = new LoaderSound("Som/InimigoAtaque.mp3");
	this.SoundEnemyShot = new LoaderSound("Som/InimigoCuspe.wav");
	
	this.update = function()
	{
		if(PlayOk)
		{
			this.SoundClick.sound.play();
			PlayOk = false;
		}
		if(Atirou)
		{
			this.SoundAtirou.sound.play();
			Atirou = false;
		}
		if(BgOk)
		{
			this.SoundBg.sound.play();
		}
		else if(!BgOk)
		{
			this.SoundBg.sound.pause();
		}
		if(EnemyDamage)
		{
			this.SoundEnemyDamage.sound.play();
			EnemyDamage = false;
		}
		if(EnemyDown)
		{
			this.SoundEnemyDown.sound.play();
			EnemyDown = false;
		}
		if(EnemyShot)
		{
			this.SoundEnemyShot.sound.play();
			EnemyShot = false;
		}
	}
	
}
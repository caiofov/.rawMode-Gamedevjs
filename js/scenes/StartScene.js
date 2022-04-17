class StartScene extends Phaser.Scene{
    constructor(){
        super('StartScene')
    }
    create(){
        this.background = this.add.sprite(0,0,'binary').setOrigin(0)
        this.background.displayHeight = game.config.height
        this.background.anims.play('binary_background')

        this.startText = this.add.text(game.config.width/2, game.config.height/2, 'START', {fontSize: '32px'})
        .setOrigin(.5)
        .setInteractive()
        
        this.startText.visible = false

        
    }
    update(){
        if(!this.background.anims.isPlaying){
            this.startText.visible = true
        }
        this.startText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            if(!this.isMenuOpen){
                this.startText.setScale(1.2);
            }
        })

        this.startText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            if(!this.isMenuOpen){
                this.startText.setScale(1.0);
            }
        })
        this.startText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('Scene1')
        })
        
    }

}
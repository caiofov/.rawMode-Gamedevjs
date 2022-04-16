class StartScene extends Phaser.Scene{
    constructor(){
        super('StartScene')
    }
    create(){
        this.timer = 0
        this.startText = this.add.text(game.config.width/2, game.config.height/2, 'START', {fontSize: '32px'})
        .setOrigin(.5)
        .setInteractive()

    }
    update(){

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
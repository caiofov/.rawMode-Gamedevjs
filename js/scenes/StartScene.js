class StartScene extends Phaser.Scene{
    constructor(){
        super('StartScene')
    }
    create(){
        this.physics.world.gravity.y = 65

        this.background = this.add.sprite(0,0,'binary').setOrigin(0)
        this.background.displayHeight = game.config.height
        this.background.anims.play('binary_background')

        this.startText = this.add.text(game.config.width/2, game.config.height/2, 'START', {fontSize: '34px'})
        .setOrigin(.5)
        .setInteractive()
        .setVisible(false)
        this.tutorial_text = this.add.text(game.config.width/2, game.config.height/2+40, 'TUTORIAL', {fontSize: '24px'})
        .setOrigin(.5)
        .setInteractive()
        .setVisible(false)

        this.title = this.add.text(game.config.width/2, 80, "", {fontSize: '60px'})
        .setOrigin(.5)
        .setAlign('center') 
        .setVisible(false)

        this.temporary_title = ""
        this.title_characters = (".raw mode").split('')
        this.count = 0
        
    }
    update(){
        if(!this.background.anims.isPlaying){
            this.startText.setVisible(true)
            this.tutorial_text.setVisible(true)
            this.title.setVisible(true)
        
            if(this.count < this.title_characters.length *2){
                this.animateTitle()
            }
        }


        //eventos para o botão de iniciar
        this.startText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.startText.setScale(1.2);
        })
        this.startText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.startText.setScale(1.0);
        })
        this.startText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('LevelMenu')
        })

        //eventos para o botão do tutorial
        this.tutorial_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.tutorial_text.setScale(1.2);
        })

        this.tutorial_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.tutorial_text.setScale(1.0);
        })
        this.tutorial_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('Tutorial1')
        })
        
    }

    animateTitle(){

        if(this.temporary_title.length < 9){
            this.temporary_title += Math.random() > 0.5 ? 1 : 0
        }
        else if(this.count < 9){
            let replace = this.temporary_title.charAt(this.count) == 0 ? 1 : 0
            this.temporary_title = this.temporary_title.substring(0,this.count) + replace + this.temporary_title.substring(this.count+1)
            this.count++
        }
        else{
            let idx = this.count - 9
            this.temporary_title = this.temporary_title.substring(0,idx) + this.title_characters[idx]+ this.temporary_title.substring(idx+1)
            this.count++
        }
        this.title.setText(this.temporary_title)
        
    }

}
class GameOver{
    constructor(scene){
        this.scene = scene
        this._create_window()  
    }

    _create_window(){
        //background da janela de game over
        this.background = this.scene.add.image(game.config.width/2,game.config.height/2, 'gameover_background')
        .setOrigin(0.5)
        .setDisplaySize(game.config.width/2,game.config.height/2)
        .setDepth(10)

        //botao de reiniciar
        this.restart = new RestartButton(this.scene, 500, 380, 40, 0.5, 0.5, 'white')
        //titulo da janela
        this.text = this.scene.add.text(game.config.width/2,game.config.height/2 - 100,"Game Over",{fontSize: '40px', color: 'white'})
        .setOrigin(.5)
        .setDepth(11)
        //botao para voltar para o menu principal
        this.menu_text = this.scene.add.text(300, 380, "Menu",{fontSize: '30px', color: 'white'})
        .setOrigin(.5)
        .setInteractive()
        .setDepth(11)

        this.subtext = this.scene.add.text(game.config.width/2,game.config.height/2 - 20,"You failed",{fontSize: '30px', color: 'white'})
        .setOrigin(.5)
        .setDepth(11)
        
    }

    update(){
        this.restart.update()

        this.menu_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.scene.start('LevelMenu')
        })
        this.menu_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.menu_text.setScale(1.2)
        })
        this.menu_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.menu_text.setScale(1)
        })
    }
    
}
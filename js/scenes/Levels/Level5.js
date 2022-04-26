
class Level5 extends Phaser.Scene{
    constructor(){
        super('Level5')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        
        //player config
        this.player = new Player(this, 100, 200)
        this.static_blocks = [
            this.physics.add.staticImage(50,game.config.height - (50*5), 'static_level5_1'),
            this.physics.add.staticImage(8*50,game.config.height-(50*6), 'static_level5_2'),
            this.physics.add.staticImage(10*50,game.config.height-(50*12), 'static_level5_2'),
            this.physics.add.staticImage(12*50,game.config.height-(50*3), 'static_level5_3'),
        ]
        

        this.static_blocks.forEach(s=>{s.setScale(1.56).setOrigin(0).refreshBody()})


        //list of blocks on the level
        this.blocks = [
                        new Block(this, 9*50, game.config.height-(50*6), 'metal'),
                        new Block(this, 6*50, game.config.height-(50*7), 'spike'),
                        new Block(this, 6*50, game.config.height-(50*8), 'spike'),
                        new Block(this, 9*50, game.config.height-50, 'spike'),
                    ]
        

        //adds goal
        this.goal = this.add.sprite(14*50,game.config.height-(50*4),'finish_line')
        .setOrigin(0).setDisplaySize(50,50)
        this.goal.anims.play('glow')
        this.phygoal = this.physics.add.staticImage(14*50,game.config.height-(50*4),'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()
        
        //adds features and configs the scene
        this.base = new SceneBase(this)
        
    }

    update(){
        this.base.update()
        if(!this.rawModeEnabled){
            this.player.update()
        }
        

        this.blocks.forEach(block =>{
            block.update()
        })   
    }

    win(){
        this.cameras.main.fadeOut(300, 255, 255, 255)
        this.base.game_paused = true
        this.base.victory_effect.play()
        this.player.win()
        this.physics.pause()
        this.time.delayedCall(500, () => {
			this.scene.start('LevelMenu', { fadeIn: true })
		})
        //iniciar a nova fase
    }

    

}

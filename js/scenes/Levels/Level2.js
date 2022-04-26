
class Level2 extends Phaser.Scene{
    constructor(){
        super('Level2')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        
        //player config
        this.player = new Player(this, 150, game.config.height-100)
        this.static_blocks = [
            this.physics.add.staticImage(50,game.config.height-200, 'static_level2_1'),
            this.physics.add.staticImage(50,game.config.height-100, 'static_level2_2'),
            this.physics.add.staticImage(14*50,game.config.height-100, 'static_level2_2'),
        ]
        

        this.static_blocks.forEach(s=>{s.setScale(1.56).setOrigin(0).refreshBody()})


        //list of blocks on the level
        this.blocks = [ new Block(this, 100, 550, 'metal'),
                        new Block(this, 150, 550, 'metal'),
                        new Block(this, 200, 550, 'metal'),
                        new Block(this, 250, 550, 'metal'),
                        new Block(this, 300, 550, 'spike'),
                        new Block(this, 350, 550, 'cloud'),
                        new Block(this, 400, 550, 'cloud'),
                        new Block(this, 450, 550, 'spike'),
                        new Block(this, 300, 500,'cloud'),
                        new Block(this, 350, 500,'cloud'),
                        new Block(this, 400, 500,'cloud'),
                        new Block(this, 450, 500,'cloud'),
                        new Block(this, 500, 550, 'metal'),
                        new Block(this, 550, 550, 'metal'),
                        new Block(this, 600, 550, 'metal'),
                        new Block(this, 650, 550, 'metal'),
                    ]

        //adds goal
        this.goal = this.add.sprite(650,game.config.height-100,'finish_line')
        .setOrigin(0).setDisplaySize(50,50)
        this.goal.anims.play('glow')
        this.phygoal = this.physics.add.staticImage(650,game.config.height-100,'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()

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
        buttonLevels[2] = true
        this.physics.pause()
        this.time.delayedCall(500, () => {
			this.scene.start('Level3', { fadeIn: true })
		})
        //iniciar a nova fase
    }

    

}

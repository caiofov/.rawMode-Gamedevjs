
class Level3 extends Phaser.Scene{
    constructor(){
        super('Level3')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        
        //player config
        this.player = new Player(this, 100, game.config.height-350)
        this.static_blocks = [
            this.physics.add.staticImage(0,game.config.height-250, 'static_level3_1'),
            this.physics.add.staticImage(100,game.config.height-200, 'static_level3_2'),
            this.physics.add.staticImage(11*50,game.config.height-450, 'static_level3_1'),
            this.physics.add.staticImage(13*50,game.config.height-400, 'static_level3_2'),
        ]
        

        this.static_blocks.forEach(s=>{s.setScale(1.56).setOrigin(0).refreshBody()})


        //list of blocks on the level
        this.blocks = [
                        new Block(this, 400, 250, 'cloud'),
                        new Block(this, 150, 550, 'spike'),
                        new Block(this, 200, 550, 'spike'),
                        new Block(this, 250, 550, 'spike'),
                        new Block(this, 300, 550, 'spike'),
                        new Block(this, 350, 550, 'spike'),
                        new Block(this, 400, 550, 'spike'),
                        new Block(this, 450, 550, 'spike'),
                        new Block(this, 500, 550, 'spike'),
                        new Block(this, 550, 550, 'spike'),
                        new Block(this, 600, 550, 'spike'),
                        new Block(this, 550, 100, 'spike')
                    ]

        //adds goal
        this.goal = this.add.sprite(650,100,'finish_line')
        .setOrigin(0).setDisplaySize(50,50)
        this.goal.anims.play('glow')
        this.phygoal = this.physics.add.staticImage(650,100,'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()
        
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
        buttonLevels[3] = true
        this.physics.pause()
        this.time.delayedCall(500, () => {
			this.scene.start('Level4', { fadeIn: true })
		})
        //iniciar a nova fase
    }

    

}

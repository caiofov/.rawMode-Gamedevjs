
class Level4 extends Phaser.Scene{
    constructor(){
        super('Level4')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        
        //player config
        this.player = new Player(this, 80, 400)
        this.static_blocks = [
            this.physics.add.staticImage(0,game.config.height-(50*10), 'static_level4_1'),
            this.physics.add.staticImage(13*50,game.config.height-(50*9), 'static_level4_2'),
            this.physics.add.staticImage(10*50,game.config.height-(50*7), 'static_level4_3'),
            this.physics.add.staticImage(10*50,game.config.height-(50*7), 'static_level4_4'),
            this.physics.add.staticImage(0,game.config.height-(50*9), 'static_level4_5'),
        ]
        

        this.static_blocks.forEach(s=>{s.setScale(1.56).setOrigin(0).refreshBody()})


        //list of blocks on the level
        this.blocks = [
                        new Block(this, 50, 500, 'metal'),
                    ]
        
        for(let x =50; x < 500; x+=50){
            this.blocks.push(new Block(this, x, 550, 'spike'))
            if (x>50){this.blocks.push(new Block(this, x, 500, 'cloud'))}
            for(let y = 250; y < 500; y+=50){
                this.blocks.push(new Block(this, x, y, 'cloud'))
            }
            
        }

        //adds goal
        this.goal = this.add.sprite(550,200,'finish_line')
        .setOrigin(0).setDisplaySize(50,50)
        this.goal.anims.play('glow')
        this.phygoal = this.physics.add.staticImage(550,200,'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()
        
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
        buttonLevels[4] = true
        this.physics.pause()
        this.time.delayedCall(500, () => {
			this.scene.start('Level5', { fadeIn: true })
		})
        //iniciar a nova fase
    }

    

}

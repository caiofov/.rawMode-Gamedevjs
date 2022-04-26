
class Level1 extends Phaser.Scene{
    constructor(){
        super('Level1')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        //player config
        this.player = new Player(this, 105, game.config.height - 100)

        this.static_blocks = []

        //list of blocks on the level
        this.blocks = [ ]
        
        for (let x = 50; x < game.config.width-50; x+=50){
            if(x==400){
                for(let y = 550; y > 350; y-=50){
                    this.blocks.push(new Block(this,x,y,'spike'))
                }
            }
            else{
                this.blocks.push(new Block(this,x,550,'metal'))
            }
            
        }

        //adds goal
        this.goal = this.add.sprite(6520,500,'finish_line').setOrigin(0).setDisplaySize(50,50)
        this.goal.anims.play('glow')
        this.phygoal = this.physics.add.staticImage(650,500,'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()
        
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

        buttonLevels[1] = true

        //this.scene.start('Level2')
        this.time.delayedCall(500, () => {
			this.scene.start('Level2', { fadeIn: true })
		})
        //iniciar a nova fase
    }

    

}

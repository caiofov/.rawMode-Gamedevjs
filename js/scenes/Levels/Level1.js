
class Level1 extends Phaser.Scene{
    constructor(){
        super('Level1')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        this.static_blocks = this.physics.add.staticImage(50,game.config.height-100, 'static_level2')
        .setScale(1.56)
        .setOrigin(0,.5)
        .refreshBody()

        //player config
        this.player = new Player(this, 105, game.config.height - 100)

        //list of blocks on the level
        this.blocks = [ new Block(this, 0, 550, 'metal'),
                        new Block(this, 50, 550, 'metal'),
                        new Block(this, 100, 550, 'metal'),
                        new Block(this, 150, 550, 'spike'),
                        new Block(this, 100, 100, 'metal'), 
                        new Block(this,200, 100, 'spike'),  
                        new Block(this, 400, 100, 'cloud')]

        //adds goal
        this.goal = this.add.sprite(700,550,'finish_line').setOrigin(0).setDisplaySize(50,50)
        this.goal.anims.play('glow')
        this.phygoal = this.physics.add.staticImage(700,550,'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()
        
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
        this.base.game_paused = true
        this.player.win()
        this.physics.pause()
        //iniciar a nova fase
    }

    

}

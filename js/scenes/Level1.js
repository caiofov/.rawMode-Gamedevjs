
class Level1 extends Phaser.Scene{
    constructor(){
        super('Level1')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)

        //help menu
        this.help_menu = new HelpMenu(this)
        
        //player config
        this.player = new Player(this, 50, 50)
        this.player.collision()

        //list of blocks on the level
        this.blocks = [new Block(this, 100, 100, 'metal'), 
                        new Block(this,200, 100, 'spike'), 
                        new Block(this, 300, 100, 'water'), 
                        new Block(this, 400, 100, 'cloud')]

        //adds goal
        this.goal = this.physics.add.staticImage(700,550,'finish_line').setOrigin(0).setDisplaySize(50,50).refreshBody()
        
        //adds features and congifs the scene
        this.base = new SceneBase(this)

        
    }

    update(){
        this.help_menu.update()
        this.player.update()

        this.blocks.forEach(block =>{
            block.update()
        })   
    }

    defeat(){
        //placeholder
        this.player.physicsBody.x = 0
        this.player.physicsBody.y = 0
        this.player.physicsBody.setVelocityX(0)
        this.player.physicsBody.setVelocityY(0)
    }

    win(){
        //placeholder
        this.player.physicsBody.x = 0
        this.player.physicsBody.y = 0
        this.player.physicsBody.setVelocityX(0)
        this.player.physicsBody.setVelocityY(0)
    }

}

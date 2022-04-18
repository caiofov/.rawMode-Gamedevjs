
class Scene1 extends Phaser.Scene{
    constructor(){
        super('Scene1')
    }
    create(){
        this.selectedBit = null //bit selected by the player

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)
        this.background.displayWidth = game.config.width 
        this.background.displayHeight = game.config.height

        //help menu
        this.help_menu = new HelpMenu(this)
        
        this.control = this.input.keyboard.createCursorKeys()

        //player config
        this.player = new Player(this, this.control, 50, 50)
        this.player.collision()

        this.blocks = [new Block(this, 100, 100, 'metal'), new Block(this,200, 100, 'spike')]
       
    }

    update(){
        this.help_menu.mouseEventListener()
        this.player.move()

        this.blocks.forEach(block =>{
            block.update()
        })
    }

}

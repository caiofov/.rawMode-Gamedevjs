
class Scene1 extends Phaser.Scene{
    constructor(){
        super('Scene1')
    }
    create(){
        this.selectedBit = null //bit selected by the player
        this.rawModeEnabled = false

        //background config
        this.background = this.add.image(0,0,'background').setOrigin(0)
        this.background.displayWidth = game.config.width 
        this.background.displayHeight = game.config.height

        //help menu
        this.help_menu = new HelpMenu(this)
        
        //player config
        this.player = new Player(this, 50, 50)
        this.player.collision()

        //list of blocks on the level
        this.blocks = [new Block(this, 100, 100, 'metal'), new Block(this,200, 100, 'spike'), new Block(this, 300, 100, 'water'), new Block(this, 400, 100, 'cloud')]

        //enter raw mode on pressing space key
        this.input.keyboard.addKey('space')
            .on('down', ()=>{
                this.rawModeEnabled = !this.rawModeEnabled
            })
    }

    update(){
        this.help_menu.update()
        this.player.update()

        this.blocks.forEach(block =>{
            block.update()
        })
        
    }

}

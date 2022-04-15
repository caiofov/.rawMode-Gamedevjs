
class Scene1 extends Phaser.Scene{
    constructor(){
        super('Scene1') //nome que vamos nos referir a essa cena
    }

    create(){
        this.background = this.add.image(0,0,'background').setOrigin(0)
        this.background.displayWidth = game.config.width 
        this.background.displayHeight = game.config.height
        
        this.cursors = this.input.keyboard.createCursorKeys()

        this.help_menu = new HelpMenu(this)
    }

    update(){
        this.help_menu.mouseEventListener()
    }

}

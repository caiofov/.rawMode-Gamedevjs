class HelpMenu{
    constructor(scene){
        this.scene = scene

        this.help_screen = this.scene.add.image(-200,0,'help_menu')
        .setOrigin(0)
        this.help_screen.x = -1*this.help_screen.displayWidth

        this.help_button = this.scene.add.sprite(0, 0, 'coin')
        .setOrigin(0)
        .setInteractive()
        
        

        this.help_button.anims.play('spin')
        this.isMenuOpen = false

        this.menuSpeed = 6
    }

    mouseEventListener(){
        this.help_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            if(!this.isMenuOpen){
                this.help_button.setScale(1.2);
            }
        })
        this.help_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            if(!this.isMenuOpen){
                this.help_button.setScale(1.0);
            }
        })
        this.help_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.isMenuOpen = !this.isMenuOpen
        })

        if(this.isMenuOpen && this.help_screen.x <= 0){
            console.log(this.help_screen.x)
            this.help_screen.x += this.menuSpeed
        }
        else if(!this.isMenuOpen && this.help_screen.x >= -1* this.help_screen.displayWidth){
            this.help_screen.x -= this.menuSpeed
        }
    }
}
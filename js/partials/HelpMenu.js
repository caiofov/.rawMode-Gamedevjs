class HelpMenu{
    constructor(scene){
        this.scene = scene

        this.confirm_effect = this.scene.sound.add('confirm', {volume:1})

        //help menu background
        this.help_screen = this.scene.add.image(0,0,'gameover_background')
        .setOrigin(0)
        .setScale(1.2)
        .setDepth(10)

        this.help_screen.displayWidth =  200
        this.help_screen.displayHeight = 0.65*game.config.height
        this.help_screen.x = -1*this.help_screen.displayWidth

        //help button
        this.help_button = this.scene.add.sprite(0, 0, 'question')
        .setOrigin(0)
        .setScale(2)
        .setInteractive()
        .setDepth(11)
        
        //load information
        this.blocks_images = []
        this.blocks_binary = []
        this.load_content()
        

        this.help_button.anims.play('spin')
        this.isMenuOpen = false

        this.menuSpeed = 6
    }

    update(){
        this.help_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            if(!this.isMenuOpen){
                this.help_button.setScale(2.5);
            }
        })
        this.help_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            if(!this.isMenuOpen){
                this.help_button.setScale(2.2);
            }
        })
        this.help_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.isMenuOpen = !this.isMenuOpen
            this.confirm_effect.play()
        })

        if(this.isMenuOpen && this.help_screen.x < -5){
            this.move_elements()
        }
        else if(!this.isMenuOpen && this.help_screen.x >= -1* this.help_screen.displayWidth){
            this.move_elements(false)
        }
    }

    move_elements(forward = true){
        let dx = forward ? this.menuSpeed : -1*this.menuSpeed

        this.help_screen.x += dx

        for(let i = 0; i < this.blocks_images.length;i++){
            this.blocks_images[i].x += dx
            this.blocks_binary[i].x += dx
        }
    }

    load_content(){
        let x = this.help_screen.x
        let y = 100
        let vertical_margin = 100
        let horizontal_margin = 150
        for(let type in blockTypeDictionary){
            let block = this.scene.add.image(x+40, y, type)
            .setScale(1.2)
            .setOrigin(.5)
            .setDepth(12)

            let text = this.scene.add.text(x+ horizontal_margin,y, (blockTypeDictionary[type]).split('').join(' '), 
                {fontSize: '20px', color: 'white'})
            .setOrigin(.5)
            .setWordWrapWidth(50)
            .setDepth(12)

            this.blocks_images.push(block)
            this.blocks_binary.push(text)
            
            y += vertical_margin
        }
    }
}
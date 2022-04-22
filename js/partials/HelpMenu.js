class HelpMenu{
    constructor(scene){
        this.scene = scene

        //help menu background
        this.help_screen = this.scene.add.image(0,0,'help_menu')
        .setOrigin(0)
        this.help_screen.displayHeight = game.config.height
        this.help_screen.x = -1*this.help_screen.displayWidth

        //help button
        this.help_button = this.scene.add.sprite(0, 0, 'coin')
        .setOrigin(0)
        .setInteractive()
        
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
            .setOrigin(.5)

            let text = this.scene.add.text(x+ horizontal_margin,y, (blockTypeDictionary[type]).split('').join(' '), 
                {fontSize: '20px', color: 'black'})
            .setOrigin(.5)
            .setWordWrapWidth(50)

            this.blocks_images.push(block)
            this.blocks_binary.push(text)
            
            y += vertical_margin
        }
    }
}
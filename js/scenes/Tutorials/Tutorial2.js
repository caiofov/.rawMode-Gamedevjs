class Tutorial2 extends Phaser.Scene{
    constructor(){
        super("Tutorial2")
    }

    create(){
        this.arrow_left = this.add.text(5, game.config.height, 'ᐊ', 
        {fontSize: '40px'})
        .setOrigin(0,1)
        .setInteractive()

        this.arrow_right = this.add.text(game.config.width-5, game.config.height, 'ᐅ', 
        {fontSize: '40px'})
        .setOrigin(1)
        .setInteractive()

        this.confirm_effect = this.sound.add('confirm', {volume:1})

        this.text = this.add.text(game.config.width/2, 30, 
        "You can change the bit sequence by swaping two bits \n\nPress [SPACE] to enter the raw mode and click on the bit", 
        {fontSize: '24px'})
        .setOrigin(.5,0)
        .setWordWrapWidth(game.config.width - 100)
        .setAlign('center')


        this.subtext = this.add.text(game.config.width/2, 160, 
            "(You can try it out here)", 
            {fontSize: '18px'})
            .setOrigin(.5,0)
            .setAlign('center')


        this.rawModeEnabled = false
        this.selectedBit = null
        this.blocks = []
        this.load_content()

        this.input.keyboard.addKey('space')
            .on('down', ()=>{
                this.rawModeEnabled = !this.rawModeEnabled
                if(!this.rawModeEnabled){
                    this.selectedBit.bitText.setTexture('bit' + this.selectedBit.bitValue)
                    this.selectedBit = null
                }
            })
        
        this.start_button = this.add.text(game.config.width/2, game.config.height-10, 'Start', 
        {fontSize: '40px'})
        .setOrigin(.5)
        .setInteractive()
        .setOrigin(.5,1)
        
    }

    update(){
        this.blocks.forEach(block =>{
            block.update()
        })
        this.update_buttons()
    }

    load_content(){
        let x = game.config.width/2 - 230
        let horizontal_margin = 200
        for(let type in blockTypeDictionary){
            this.blocks.push(new Block(this, x, game.config.height/2, type, 2))
    
            x += horizontal_margin
        }
    }

    update_buttons(){
        this.arrow_left.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.arrow_left.setScale(1.2);
        })
        this.arrow_left.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.arrow_left.setScale(1.0);
        })
        this.arrow_left.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('Tutorial1')
            this.confirm_effect.play()
        })

        this.arrow_right.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.arrow_right.setScale(1.2);
        })
        this.arrow_right.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.arrow_right.setScale(1.0);
        })
        this.arrow_right.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('Tutorial3')
            this.confirm_effect.play()
        })

        this.start_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.start_button.setScale(1.2);
        })
        this.start_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.start_button.setScale(1.0);
        })
        this.start_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('LevelMenu')
            this.confirm_effect.play()
        })
    }
}
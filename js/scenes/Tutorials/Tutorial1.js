class Tutorial1 extends Phaser.Scene{
    constructor(){
        super("Tutorial1")
    }

    create(){
        this.text1 = this.add.text(game.config.width/2, 30, 
        'Each special block has its own bit sequence and characteristic', 
        {fontSize: '24px'})
        .setOrigin(.5,0)
        .setWordWrapWidth(game.config.width - 50)
        .setAlign('center')

        this.confirm_effect = this.sound.add('confirm', {volume:1})

        this.arrow = this.add.text(game.config.width-5, game.config.height, 'ᐅ', 
        {fontSize: '40px'})
        .setOrigin(1)
        .setInteractive()

        this.blocks = []
        this.bits = []
        this.texts_about = []
        this.load_content()

        this.start_button = this.add.text(game.config.width/2, game.config.height-10, 'Start', 
            {fontSize: '40px'})
            .setOrigin(.5)
            .setInteractive()
            .setOrigin(.5,1)

    }

    update(){
        this.arrow.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.arrow.setScale(1.2);
        })
        this.arrow.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.arrow.setScale(1.0);
        })
        this.arrow.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('Tutorial2')
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
    
    load_content(){
        const initial_x = 200
        let x = initial_x
        let y = 200
        let vertical_margin = 100
        let horizontal_margin = 200
        
        for(let type in blockTypeDictionary){
            let block = this.add.image(x, y, type)
            .setOrigin(.5)
            .setScale(2)

            let text = this.add.text(x+5, y+vertical_margin, 
                (blockTypeDictionary[type]).split('').join(' '), 
                {fontSize: '25px'})
            .setOrigin(.5)
            .setWordWrapWidth(80)

            this.blocks.push(block)
            this.bits.push(text)
    
            x += horizontal_margin
        }
        y+=vertical_margin*2
        x-=horizontal_margin
        this.texts_about.push(
            this.add.text(x,y, "Dangerous", {fontSize: '25px'})
            .setOrigin(.5,0))
        x-=horizontal_margin
        
        this.texts_about.push(
            this.add.text(x,y, "Solid", {fontSize: '25px'})
                .setOrigin(.5,0)
                .setAlign('center'))
        x-=horizontal_margin
        
        this.texts_about.push(
            this.add.text(x,y, "Walk-through block", {fontSize: '25px'})
                .setWordWrapWidth(100)
                .setOrigin(.5,0)
                .setAlign('center'))
    }
}
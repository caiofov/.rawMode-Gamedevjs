class Tutorial3 extends Phaser.Scene{
    constructor(){
        super("Tutorial3")
    }

    create(){
        this.arrow_left = this.add.text(5, game.config.height, 'ᐊ', 
        {fontSize: '40px'})
        .setOrigin(0,1)
        .setInteractive()

        this.confirm_effect = this.sound.add('confirm', {volume:1})


        this.text1 = this.add.text(game.config.width/2, 300, 
            "Normal blocks", 
            {fontSize: '24px'})
            .setOrigin(.5,0)
            .setAlign('center')
        this.subtext = this.add.text(game.config.width/2, 330, 
            "(Non-interactive)", 
            {fontSize: '18px'})
            .setOrigin(.5,0)
            .setAlign('center')

        this.text2 = this.add.text(40, 30, 
            "Player controls", 
            {fontSize: '24px'})
            .setOrigin(0,0)
            .setAlign('center')
        this.arrows_img = this.add.image(70, 80, 'arrows')
            .setOrigin(0)
            .setScale(.3)

        this.text3 = this.add.text(game.config.width/2 + 220, 30 , 
            "Goal", 
            {fontSize: '24px'})
            .setOrigin(0)
            .setAlign('center')

        this.goal = this.add.sprite(game.config.width/2 + 200,110,'finish_line')
        .setOrigin(0)
        .setDisplaySize(110,110)
        this.goal.anims.play('glow')
        
        this.text4 = this.add.text(game.config.width/2, 30 , 
            "Help", 
            {fontSize: '24px'})
            .setOrigin(0)
            .setAlign('center')
        this.help = this.add.sprite(game.config.width/2 - 20, 120, 'question')
        .setOrigin(0)
        .setScale(6)
        this.help.anims.play('spin')

        this.start_button = this.add.text(game.config.width/2, game.config.height-10, 'Start', 
            {fontSize: '40px'})
            .setOrigin(.5)
            .setInteractive()
            .setOrigin(.5,1)

        this.blocks = []
        this.load_content()
        
    }

    update(){
        this.update_buttons()
    }
    load_content(){
        let x = 200
        let margin = 130
        for(let i = 1; i < 5; i ++){
            let block = this.add.image(x, 420, 'normal'+i)
            .setScale(2)
            .setOrigin(.5)
            this.blocks.push(block)
            x+=margin
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

    
}
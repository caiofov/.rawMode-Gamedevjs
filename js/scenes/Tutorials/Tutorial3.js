class Tutorial3 extends Phaser.Scene{
    constructor(){
        super("Tutorial3")
    }

    create(){
        this.arrow_left = this.add.text(5, game.config.height, 'ᐊ', 
        {fontSize: '40px'})
        .setOrigin(0,1)
        .setInteractive()


        this.text1 = this.add.text(game.config.width/2, 300, 
        "Normal blocks", 
        {fontSize: '24px'})
        .setOrigin(.5,0)
        .setWordWrapWidth(200)
        .setAlign('center')

        this.text2 = this.add.text(40, 30, 
            "Player controls", 
            {fontSize: '24px'})
            .setOrigin(0,0)
            .setAlign('center')
        this.arrows_img = this.add.image(70, 80, 'arrows')
            .setOrigin(0)
            .setScale(.3)

        this.text3 = this.add.text(game.config.width/2 + 170, 30 , 
            "Goal", 
            {fontSize: '24px'})
            .setOrigin(0)
            .setWordWrapWidth(200)
            .setAlign('center')

        this.goal = this.add.sprite(game.config.width/2 + 150,110,'finish_line')
        .setOrigin(0)
        .setDisplaySize(110,110)
        this.goal.anims.play('glow')
        
        this.start_button = this.add.text(game.config.width/2, game.config.height-10, 'Start', 
            {fontSize: '40px'})
            .setOrigin(.5)
            .setInteractive()
            .setOrigin(.5,1)

        
        
    }

    update(){
        this.update_buttons()
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
        })

        this.start_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.start_button.setScale(1.2);
        })
        this.start_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.start_button.setScale(1.0);
        })
        this.start_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('LevelMenu')
        })
    }

    
}
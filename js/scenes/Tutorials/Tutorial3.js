class Tutorial3 extends Phaser.Scene{
    constructor(){
        super("Tutorial3")
    }

    create(){
        this.arrow_left = this.add.text(5, game.config.height, 'ᐊ', 
        {fontSize: '40px'})
        .setOrigin(0,1)
        .setInteractive()


        this.text1 = this.add.text(50, 30, 
        "Normal blocks", 
        {fontSize: '24px'})
        .setOrigin(.5,0)
        .setWordWrapWidth(200)
        .setAlign('center')

        this.text2 = this.add.text(game.config.width - 50, 30, 
            "Controls", 
            {fontSize: '24px'})
            .setOrigin(.5,0)
            .setWordWrapWidth(200)
            .setAlign('center')
        
    }

    update(){
        this.arrow_left.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.arrow_left.setScale(1.2);
        })
        this.arrow_left.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.arrow_left.setScale(1.0);
        })
        this.arrow_left.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.start('Tutorial1')
        })
    }

    
}
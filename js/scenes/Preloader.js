class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader')
    }
    preload(){
        //scene1 background
        this.load.image('background', '../../assets/img/sky.png')
        //help menu
        this.load.image('help_menu', '../../assets/img/helpmenu.png')
        //metal block
        this.load.image('metal', '../../assets/img/metal.png')
        //spike block
        this.load.image('spike', '../../assets/img/spike.png')

        //help button
        this.load.spritesheet('coin', '../../assets/img/coin.png', {frameWidth:36, frameHeight:40})
        //start background
        this.load.spritesheet('binary', '../../assets/img/binary.png', {frameWidth:800, frameHeight:450})
        // https://www.videvo.net/video/binary-numbers-01-alpha-matte/1343/ -> video
        //player spritesheet
        this.load.spritesheet('player', '../assets/img/player.png', {frameWidth:32, frameHeight:32})
    
    }
    create(){
        //player walking animation
        this.anims.create({
            key:'walk',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 0
            }),
            frameRate: 8,
            repeat: -1 
        })
        //help button
        this.anims.create({
            key:'spin',
            frames: this.anims.generateFrameNumbers('coin', {
                start:0,
                end:5
            }),
            frameRate: 20,
            repeat: -1,
        })

        //start scene background
        this.anims.create({
            key:'binary_background',
            frames: this.anims.generateFrameNumbers('binary',{
                start: 0,
                end: 29
            }),
            frameRate: 12,
            repeat: 0
        })

        this.scene.start('Scene1')
    }
}
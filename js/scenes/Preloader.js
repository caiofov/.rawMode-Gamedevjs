class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader')
    }
    preload(){
        this.load.image('background', '../../assets/img/sky.png')
        // this.load.image('help_button', 'img/coin.png')
        this.load.image('help_menu', '../../assets/img/helpmenu.png')
        this.load.image('bit1', '../../assets/img/1.png')
        this.load.image('bit0', '../../assets/img/0.png')
        this.load.image('water', '../../assets/img/water.png')
        this.load.image('dirt', '../../assets/img/dirt.png')
        this.load.image('grass', '../../assets/img/grass.png')


        this.load.spritesheet('coin', '../../assets/img/coin.png', {frameWidth:36, frameHeight:40})
        this.load.spritesheet('binary', '../../assets/img/binary.png', {frameWidth:800, frameHeight:450})
        // https://www.videvo.net/video/binary-numbers-01-alpha-matte/1343/
        this.load.spritesheet('player', '../assets/img/player.png', {frameWidth:32, frameHeight:32})
    
    }
    create(){
        //player
        this.anims.create({
            key:'walk',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 5
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
        //start background
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
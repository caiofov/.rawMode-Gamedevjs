class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader')
    }
    preload(){
        this.load.image('background', '../../assets/img/sky.png')
        // this.load.image('help_button', 'img/coin.png')
        this.load.image('help_menu', '../../assets/img/helpmenu.png')

        this.load.spritesheet('coin', '../../assets/img/coin.png', {frameWidth:36, frameHeight:40})
        this.load.spritesheet('binary', '../../assets/img/binary.png', {frameWidth:800, frameHeight:450})

    }
    create(){
        this.anims.create({
            key:'spin',
            frames: this.anims.generateFrameNumbers('coin', {
                start:0,
                end:5
            }),
            frameRate: 20,
            repeat: -1,
        })
        this.anims.create({
            key:'binary_background',
            frames: this.anims.generateFrameNumbers('binary',{
                start: 0,
                end: 29
            }),
            frameRate: 12,
            repeat: 0
        })

        this.scene.start('StartScene')
    }
}
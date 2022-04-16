class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader')
    }
    preload(){
        this.load.image('background', '../../assets/img/sky.png')
        // this.load.image('help_button', 'img/coin.png')
        this.load.image('help_menu', '../../assets/img/helpmenu.png')

        this.load.spritesheet('coin', '../../assets/img/coin.png', {frameWidth:36, frameHeight:40})
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

        this.scene.start('Scene1')
    }
}
class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader')
    }
    preload(){
        //scene1 background
        this.load.image('background', 'assets/img/sky.png')
        //help menu
        this.load.image('help_menu', 'assets/img/helpmenu.png')
        //metal block
        this.load.image('metal', 'assets/img/metal.png')
        //spike block
        this.load.image('spike', 'assets/img/spike.png')
        //water block
        this.load.image('water', 'assets/img/water.png')
        // cloud block
        this.load.image('cloud', 'assets/img/cloud.png')
        //bits
        this.load.image('bit0', 'assets/img/bit0.png')
        this.load.image('bit1', 'assets/img/bit1.png')
        this.load.image('gray0', 'assets/img/gray0.png')
        this.load.image('gray1', 'assets/img/gray1.png')

        //restart button
        this.load.image('restart', 'assets/img/restart.png')
        // https://www.onlinewebfonts.com/icon/510461
        this.load.image('restart_raw', 'assets/img/restart_raw.png')

        //help button (question mark)
        this.load.spritesheet('question', 'assets/img/question.png', {frameWidth:16, frameHeight:16})
        //start background
        this.load.spritesheet('binary', 'assets/img/binary.png', {frameWidth:800, frameHeight:450})
        // https://www.videvo.net/video/binary-numbers-01-alpha-matte/1343/ -> video
        
        //player spritesheet
        this.load.spritesheet('player', 'assets/img/player.png', {frameWidth:32, frameHeight:32})
        //raw player spritesheet
        this.load.spritesheet('player_raw', 'assets/img/player_raw.png', {frameWidth:32, frameHeight:32})
        //finish line
        this.load.spritesheet('finish_line', 'assets/img/finishline.png', {frameWidth:32, frameHeight:32})
    
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
            frames: this.anims.generateFrameNumbers('question', {
                start:0,
                end:11
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

        this.scene.start('Tutorial2')
    }
}
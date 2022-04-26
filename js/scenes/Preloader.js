class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader')
    }
    preload(){
        //scene1 background
        this.load.image('background', 'assets/img/background.png')
        this.load.image('gameover_background', 'assets/img/gameover.png')
        //metal block
        this.load.image('metal', 'assets/img/metal.png')
        //spike block
        this.load.image('spike', 'assets/img/spike.png')
        // cloud block
        this.load.image('cloud', 'assets/img/cloud.png')
        //bits
        this.load.image('bit0', 'assets/img/bit0.png')
        this.load.image('bit1', 'assets/img/bit1.png')
        this.load.image('gray0', 'assets/img/gray0.png')
        this.load.image('gray1', 'assets/img/gray1.png')

        //non-interactive blocks
        this.load.image('normal1', 'assets/img/normal1.png')
        this.load.image('normal2', 'assets/img/normal2.png')
        this.load.image('normal3', 'assets/img/normal3.png')
        this.load.image('normal4', 'assets/img/normal4.png')

        //restart button
        this.load.image('restart_white', 'assets/img/restart_white.png')
        this.load.image('restart_black', 'assets/img/restart_black.png')

        //help button (question mark)
        this.load.spritesheet('question', 'assets/img/question.png', {frameWidth:16, frameHeight:16})
        //start background
        this.load.spritesheet('binary', 'assets/img/binary.png', {frameWidth:800, frameHeight:450})
        // https://www.videvo.net/video/binary-numbers-01-alpha-matte/1343/ -> video
        
        //player spritesheet
        this.load.spritesheet('player', 'assets/img/player_spritesheet.png', {frameWidth:32, frameHeight:37})
        //raw player spritesheet
        this.load.spritesheet('player_raw', 'assets/img/player_raw.png', {frameWidth:32, frameHeight:37})
        //player jump
        this.load.spritesheet('player_jump', 'assets/img/player_jump.png', {frameWidth:32, frameHeight:37})
        //finish line
        this.load.spritesheet('finish_line', 'assets/img/finishline.png', {frameWidth:32, frameHeight:32})

        //music
        this.load.audio('music1', 'assets/music1.mp3')
        this.load.audio('music2', 'assets/music2.mp3')

        //sound effects
        this.load.audio('hit', 'assets/hit.mp3')
        this.load.audio('confirm', 'assets/confirm.mp3')
        this.load.audio('victory', 'assets/victory.mp3')
        this.load.audio('rawmode', 'assets/rawmode.mp3')

        this.load.image('arrows','assets/img/arrows.png')
        //https://www.flaticon.com/premium-icon/arrows_1782520?term=arrow%20key&page=1&position=10&page=1&position=10&related_id=1782520&origin=tag
        
        //level (static blocks)
        this.load.image('static_level2_1','assets/img/levels/level2_1.png')
        this.load.image('static_level2_2','assets/img/levels/level2_2.png')
        this.load.image('static_level3_1','assets/img/levels/level3_1.png')
        this.load.image('static_level3_2','assets/img/levels/level3_2.png')
        this.load.image('static_level4_1','assets/img/levels/level4_1.png')
        this.load.image('static_level4_2','assets/img/levels/level4_2.png')
        this.load.image('static_level4_3','assets/img/levels/level4_3.png')
        this.load.image('static_level4_4','assets/img/levels/level4_4.png')
        this.load.image('static_level4_5','assets/img/levels/level4_5.png')
        this.load.image('static_level5_1','assets/img/levels/level5_1.png')
        this.load.image('static_level5_2','assets/img/levels/level5_2.png')
        this.load.image('static_level5_3','assets/img/levels/level5_3.png')
    }
    create(){
        //player walking animation
        this.anims.create({
            key:'walk',
            frames: this.anims.generateFrameNumbers('player', {
                start: 18,
                end: 23
            }),
            frameRate: 8,
            repeat: -1 
        })
        this.anims.create({
            key:'like',
            frames: this.anims.generateFrameNumbers('player', {
                start: 6,
                end: 6
            }),
            frameRate: 1,
            repeat: -1 
        })
        this.anims.create({
            key:'stop',
            frames: this.anims.generateFrameNumbers('player', {
                start: 12,
                end: 15
            }),
            frameRate: 4,
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
        this.anims.create({
            key:'glow',
            frames: this.anims.generateFrameNumbers('finish_line',{
                start: 0,
                end: 7
            }),
            frameRate: 16,
            repeat: -1
        })

        this.scene.start('StartScene')
    }

}
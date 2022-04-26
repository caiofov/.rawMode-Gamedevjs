class LevelMenu extends Phaser.Scene{
    constructor(){
        super('LevelMenu')
    }

    create(){
        this.margin = 70
        this.x = 250
        this.y = game.config.height / 2

        this.confirm_effect = this.sound.add('confirm', {volume:1})


        this.title = this.add.text(game.config.width/2, this.margin, ".raw mode", {fontSize: '32px'})
        .setOrigin(.5)
        .setAlign('center')
        // .setInteractive()
        

        this.levelButtons = [new LevelButton(this, 1, this.x, this.y, false)]
        

        for(let i = 2; i <= numberOfLevels; i++ ){
            this.x += this.margin
            this.levelButtons.push(new LevelButton(this, i, this.x, this.y))
        }

    }

    update(){
        this.levelButtons.forEach(level =>{
            level.update()
        })

        for (let i = 0; i < 9; i++) {
            if(buttonLevels[i] && this.levelButtons[i].isLocked){
                this.levelButtons[i].setUnlocked()
            }
        }

        this.title.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            // this.transformTitleToBinary()
        })
    }

    transformTitleToBinary(){
        this.title.setFontSize('18px')
        .setText("00101110 01110010 01100001 01110111 00100000 01101101 01101111 01100100 01100101")
        .setWordWrapWidth(200)
        .setAlign('center')
    }
}
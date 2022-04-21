class LevelMenu extends Phaser.Scene{
    constructor(){
        super('LevelMenu')
    }

    create(){
        this.margin = 70
        this.x = 250
        this.y = game.config.height / 2
        this.levels = [new LevelButton(this, 1, this.x, this.y, false)]

        for(let i = 2; i <= numberOfLevels; i++ ){
            this.x += this.margin
            this.levels.push( new LevelButton(this, i, this.x, this.y))
        }
    }

    update(){
        this.levels.forEach(level =>{
            level.update()
        })
    }
}
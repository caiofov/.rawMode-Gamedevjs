class LevelButton{
    constructor(scene, levelNumber, x, y, isLocked = true){
        this.levelNumber = levelNumber
        this.binaryText = this.findBinaryText()
        this.scene = scene
        this.levelNumber = levelNumber
        this.isLocked = isLocked

        this.confirm_effect = this.scene.sound.add('confirm', {volume:1})

        this.button = this.scene.add.text(x,y, levelNumber, 
            {fontSize: '32px', color: 'gray'})
        .setOrigin(.5)
        .setInteractive()
        // .setAlign('center')

        this.binaryText = this.findBinaryText()
        
        
        if(!isLocked){
            this.setUnlocked()
        }
    }

    setUnlocked(){
        this.isLocked = false
        this.button.setColor('white')
    }

    update(){
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.transformToBinary()
        })

        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
           this.transformToDecimal()
        })
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.confirm_effect.play()
            if(!this.isLocked){
                this.scene.scene.start('Level' + this.levelNumber)
            }
        })
    }

    transformToBinary(){
        this.button.setFontSize('18px')
        .setText(this.binaryText)
        .setWordWrapWidth(50)
    }
    transformToDecimal(){
        this.button.setText(this.levelNumber)
        .setFontSize('32px')
    }

    findBinaryText(){
        let bin = (this.levelNumber >>> 0).toString(2);
        let zeros = ''
        if (bin.length < 4){
            
            for(let i = 0; i < 4 - bin.length; i ++){
                zeros +='0'
            }
        }
        let stringWithSpace = (zeros+bin).split('').join(' ')
        return stringWithSpace
    }
}
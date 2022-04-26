class Bit{
    constructor(scene,block, x,y, bit, scale = 1){
        this.scene = scene
        this.scale = scale
        this.block = block //class Block
        this.bitValue = bit //'1' or '0' -> string
        this.bitText = this.scene.add.image(x,y,'bit'+this.bitValue)
        .setDisplaySize(25*this.scale,25*this.scale)
        .setInteractive()
        //this.bitText = this.scene.add.text(x,y, bit, {fontSize: '15px'})
        //.setOrigin(.5)
        //.setInteractive()
        this.cursorIsDown = false
    }

    update(){
        this.bitText.visible = this.scene.rawModeEnabled //changes the text visbility

        if(this.scene.rawModeEnabled) //if the game is in raw mode, the player can interact with the bits
        {
            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
                if(!this.cursorIsDown){
                    if(this.scene.selectedBit && this.scene.selectedBit != this){
                        this.switchBits()
                    }
                    else{
                        this.scene.selectedBit = this
                        this.bitText.setTexture('gray'+this.bitValue)
                    }
                    this.cursorIsDown = true
            }})
            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () =>{
                this.cursorIsDown = false
            })

            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
                this.bitText.setDisplaySize(30*this.scale,30*this.scale);
            })
            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                this.bitText.setDisplaySize(25*this.scale,25*this.scale);
            })
        }
    }

    updateText(){
        this.bitText.setTexture('bit'+this.bitValue)
    }

    switchBits(){
        this.scene.selectedBit.bitText.setTexture('gray'+this.bitValue)
        //switch bits
        let selectedText = this.scene.selectedBit.bitValue
        this.scene.selectedBit.bitValue = this.bitValue
        this.bitValue = selectedText

        //change displayed text
        this.updateText()
        this.scene.selectedBit.updateText()

        //update block data
        this.block.updateBlockType()
        this.scene.selectedBit.block.updateBlockType()
        
        //reset scene's selected bit
        this.scene.selectedBit = null
    }


}
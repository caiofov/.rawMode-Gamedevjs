class Bit{
    constructor(scene,block, x,y, bit){
        this.scene = scene
        this.block = block
        this.bit = bit
        this.bitText = this.scene.add.text(x,y, bit, {fontSize: '32px'})
        .setOrigin(.5)
        .setInteractive()
        this.cursorIsDown = false
    }

    update(){
        this.bitText.visible = this.scene.rawModeEnabled
        if(this.scene.rawModeEnabled)
        {
            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
                if(!this.cursorIsDown){
                    if(this.scene.selectedBit && this.scene.selectedBit != this){
                        this.switchBits()
                    }
                    else{
                        this.scene.selectedBit = this
                    }
                    this.cursorIsDown = true
            }})
            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () =>{
                this.cursorIsDown = false
            })

            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
                this.bitText.setScale(1.2);
            })
            this.bitText.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                this.bitText.setScale(1.0);
            })
        }
    }

    updateText(){
        this.bitText.setText(this.bit)
    }

    switchBits(){
        //switch bits
        let selectedText = this.scene.selectedBit.bit
        this.scene.selectedBit.bit = this.bit
        this.bit = selectedText

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
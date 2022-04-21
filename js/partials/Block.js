class Block{
    constructor(scene, x, y, type){
        this.scene = scene
        this.type = type
        this.img = this.scene.add.image(x,y,this.type)
        .setOrigin(0)
        .setScale(1.5)
        this.bits = this.createBits(x,y)
    }

    update(){
        this.bits.forEach(bit =>{
            bit.update()
        })
     
        this.img.setVisible(!this.scene.rawModeEnabled) //changes image visbility
    }

    createBits(x,y){ //loads the initial bits of the block
        for(let type in blockTypeDictionary){
            if(type == this.type){
                let bits = blockTypeDictionary[type]
                return[
                    new Bit(this.scene, this, x+5,y+5, bits[0]),
                    new Bit(this.scene, this, x+20, y+5, bits[1]),
                    new Bit(this.scene, this, x+5, y+20, bits[2]),
                    new Bit(this.scene, this, x+20, y+20, bits[3])
                ]
                
            }
        }
    }

    updateBlockType(){
        let bitSequence = ''

        this.bits.forEach(bit =>{
            bitSequence += bit.bitValue
        })


        for(let type in blockTypeDictionary){
            if(blockTypeDictionary[type] == bitSequence){
                this.type = type
                this.img.setTexture(this.type)
                return
            }
        }

        //if it doesn't match to an existent bit sequence -> turn into cloud
        this.type = 'cloud'
        this.img.setTexture(this.type)
        
    }
}
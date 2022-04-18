class Block{
    constructor(scene, x, y, type){
        this.scene = scene
        this.type = type
        this.img = this.scene.add.image(x,y,this.type)
        .setOrigin(0)
        .setScale(2)
        this.bits = this.createBits(x,y)
    }

    update(){
        this.bits.forEach(bit =>{
            bit.mouseEvents()
        })
    }

    createBits(x,y){ //loads the initial bits
        switch (this.type){
            case 'metal':
                return [new Bit(this.scene, this, x+30,y+30, '1')]

            case 'spike':
                return [new Bit(this.scene, this, x+30,y+30, '0')]
        }
    }

    updateBlockType(){
        let bitSequence = ''

        this.bits.forEach(bit =>{
            bitSequence += bit.bit
        })


        switch(bitSequence){
            case '1':
                this.type = 'metal'
                break
                
            case '0':
                this.type = 'spike'
                break
        }
        this.img.setTexture(this.type)
    }
}
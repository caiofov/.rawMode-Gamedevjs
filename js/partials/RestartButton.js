class RestartButton{
    constructor(scene, x, y, size, originx = 1, originy = 0){
        this.scene = scene
        this.size = size
        this.button = this.scene.add.image(x,y,'restart')
        .setOrigin(originx,originy)
        .setInteractive()
        .setDisplaySize(this.size,this.size)
        this.texture_israw = false
        
    }

    update(){
        if(this.scene.rawModeEnabled && !this.texture_israw){
            console.log("entrou")
            this.button.setTexture('restart_raw')
            this.texture_israw = true
        }
        else if (!this.scene.rawModeEnabled && this.texture_israw){
            this.button.setTexture('restart')
            this.texture_israw = false
        }

        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, (event) =>{
            this.scene.scene.restart()
        }, game)
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.button.setDisplaySize(this.size*1.5,this.size*1.5)
        })
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.button.setDisplaySize(this.size,this.size)
        })
    }
}
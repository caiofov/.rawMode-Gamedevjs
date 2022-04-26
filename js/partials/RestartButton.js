class RestartButton{
    constructor(scene, x, y, size, originx = 1, originy = 0, color = 'white'){
        this.scene = scene
        this.size = size
        this.button = this.scene.add.image(x,y,'restart_'+color)
        .setOrigin(originx,originy)
        .setInteractive()
        .setDisplaySize(this.size,this.size)
        .setDepth(11)
        this.texture_israw = false

        this.confirm_effect = this.scene.sound.add('confirm')
        
    }

    update(){
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.scene.restart()
            this.confirm_effect.play()
        })
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.button.setDisplaySize(this.size*1.5,this.size*1.5)
        })
        this.button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.button.setDisplaySize(this.size,this.size)
        })
    }
}
class Player{
    constructor(scene, x, y){
        this.scene = scene
        this.control = this.scene.input.keyboard.createCursorKeys()

        this.physicsBody = this.scene.physics.add.sprite(x, y, 'player')
        .setCollideWorldBounds(true)
        .setBounce(.2)

        this.canJump = true
    }

    collision(){

    }

    update(){
        if(this.control.left.isDown){
            this.physicsBody.flipX = true //reverte horizontalmente a imagem
            // this.physicsBody.anims.play('walk', true) //true -> animaçao deve ser executada mesmo se outro evento estiver acontecendo com esse objeto
            this.physicsBody.setVelocityX(-450)
        }
        else if(this.control.right.isDown){
            this.physicsBody.flipX = false
            // this.physicsBody.anims.play('walk',true)
            this.physicsBody.setVelocityX(450)
        }
        else{
            this.physicsBody.setVelocityX(0)
            // this.physicsBody.setFrame(0)
        }

        if(this.control.up.isDown && this.canJump ){ //&& this.physicsBody.body.touching.down
            this.physicsBody.setVelocityY(-500)
            this.canJump = false
        }
        else if(!this.control.up.isDown && !this.canJump ){ //&& this.physicsBody.body.touching.down
            this.canJump = true
        }

        if(!this.physicsBody.body.touching.down){//ou está pulando ou está caindo
            // this.physicsBody.setFrame(
            //     this.physicsBody.body.velocity.y < 0 ? 1 : 3
            // )
        }
    }
}
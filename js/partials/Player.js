class Player{
    constructor(scene, x, y){
        this.scene = scene
        this.control = this.scene.input.keyboard.createCursorKeys()

        this.physicsBody = this.scene.physics.add.sprite(x, y, 'player')
        .setCollideWorldBounds(true)
        .setDisplaySize(50,50)
        .refreshBody()
        .setDepth(1)
        //.setBounce(.2)

        this.canJump = true

        this.speed = 300
        this.dead = false
        
    }

    kill(){
        this.physicsBody.setTint(0xff0000) //coloração vermelha por cima da imagem da player
        this.physicsBody.anims.stop() //para a animação do player
        this.dead = true
    }
    win(){
        this.physicsBody.anims.play('like', true)
    }

    update(){
        if(!this.dead){
            if(this.control.left.isDown){
                this.physicsBody.flipX = true //reverte horizontalmente a imagem
                this.physicsBody.anims.play('walk', true) //true -> animaçao deve ser executada mesmo se outro evento estiver acontecendo com esse objeto
                this.physicsBody.setVelocityX(-this.speed)
            }
            else if(this.control.right.isDown){
                this.physicsBody.flipX = false
                this.physicsBody.anims.play('walk',true)
                this.physicsBody.setVelocityX(this.speed)
            }
            else if (!this.dead){
                this.physicsBody.anims.play('stop', true)
                this.physicsBody.setVelocityX(0)
                // this.physicsBody.setFrame(0)
            }
            
            if(this.control.up.isDown && this.physicsBody.body.touching.down){//this.canJump ){ //&& this.physicsBody.body.touching.down
                this.physicsBody.setVelocityY(-500)
                this.canJump = false
            }
            else if(!this.physicsBody.body.touching.down){
                this.physicsBody.setTexture('player_jump')
            }
        
        }
        
    }
}
class SceneBase{
    constructor(scene){
        this.scene = scene

        this.scene.background.displayWidth = game.config.width 
        this.scene.background.displayHeight = game.config.height

        //add collisions
        this.scene.physics.add.overlap(this.scene.player.physicsBody, this.scene.goal, this.scene.win, null, this.scene)
        this.blockColliders = []
        this.add_collisions()

        this.scene.input.keyboard.addKey('space')
            .on('down', ()=>{
                this.scene.rawModeEnabled = !this.scene.rawModeEnabled
                //switch background
                this.scene.background.setVisible(!this.scene.rawModeEnabled)
                //switch player skin
                if(this.scene.rawModeEnabled){
                    this.scene.player.physicsBody.setTexture('player_raw')
                    this.scene.physics.pause()   
                }
                else{
                    this.scene.player.physicsBody.setTexture('player')
                    this.add_collisions()
                    this.scene.physics.resume()
                    if(this.scene.selectedBit){
                        this.scene.selectedBit.bitText.setTexture('bit' + this.scene.selectedBit.bitValue)
                        this.scene.selectedBit = null
                    }
                }

                
            })
        
        this.help_menu = new HelpMenu(this.scene)
        this.restartButton = new RestartButton(this.scene, game.config.width, 0, 32)
        
        this.gameOver = undefined

    }

    update(){
        if(this.gameOver){
            this.gameOver.update()
        }
        else{
            this.help_menu.update()
            this.restartButton.update()
        }
    }

    add_collisions(){
        this.blockColliders.forEach((blockCollider)=>{
            this.scene.physics.world.removeCollider(blockCollider)
        })

        this.scene.blocks.forEach((block)=>{
            block.img.setDepth(2)
            if(block.type == 'cloud'){
                block.img.setDepth(0)
            }
            if(block.type == 'spike'){
                this.blockColliders.push(
                    this.scene.physics.add.collider(this.scene.player.physicsBody, block.img, this.spike_collision, null, this.scene))
            }
            else if(!nonCollisionBlocks.includes(block.type))
                this.blockColliders.push(this.scene.physics.add.collider(this.scene.player.physicsBody, block.img))
            
            
        })
    }

    //spike collision function
    spike_collision(_player, _spike){
        //checks if lower part of the player is touching the upper part of the spike
        if(_player.body.touching.down && _spike.body.touching.up){
            this.base.game_over()
        }
    }

    game_over(){
        this.scene.physics.pause() //congela os eventos físicos
        this.scene.player.kill()
        this.help_menu.help_button.anims.stop()
        this.gameOver = new GameOver(this.scene)
    }
}
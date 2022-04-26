class SceneBase{
    constructor(scene){
        this.scene = scene

        this.scene.background.displayWidth = game.config.width 
        this.scene.background.displayHeight = game.config.height

        //add collisions
        this.scene.physics.add.overlap(this.scene.player.physicsBody, this.scene.phygoal, this.scene.win, null, this.scene)
        this.scene.physics.add.collider(this.scene.player.physicsBody, this.scene.static_blocks)


        this.blockColliders = []
        this.add_collisions()

        this.game_paused = false


        //music
        this.music = this.scene.sound.add('music1', {volume: 0.005})
        this.music.play()

        this.hit_effect = this.scene.sound.add('hit', {volume:1})
        this.victory_effect = this.scene.sound.add('victory')
        this.raw_mode_effect = this.scene.sound.add('rawmode')

        this.scene.input.keyboard.addKey('space')
            .on('down', ()=>{
                this.raw_mode_effect.play()
                if(this.game_paused){
                    return
                }
                this.scene.rawModeEnabled = !this.scene.rawModeEnabled
                //switch background
                this.scene.background.setVisible(!this.scene.rawModeEnabled)
                //switch player skin
                if(this.scene.rawModeEnabled){
                    this.scene.static_blocks.forEach((static_block)=>{
                        static_block.setVisible(false)
                    })
                    this.scene.anims.pauseAll()
                    this.scene.player.physicsBody.setTexture('player_raw')
                    this.scene.physics.pause()   
                }
                else{
                    this.scene.static_blocks.forEach((static_block)=>{
                        static_block.setVisible(true)
                    })
                    this.scene.anims.resumeAll()
                    // this.scene.player.physicsBody.setTexture('player')
                    this.scene.player.physicsBody.anims.play('walk')
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
        if(this.scene.player.physicsBody.y >=575){
            this.game_over()
        }
    }

    add_collisions(){
        this.blockColliders.forEach((blockCollider)=>{
            this.scene.physics.world.removeCollider(blockCollider)
        })
        //this.scene.static_blocks.forEach((static_block) =>{
        //    this.scene.physics.add.collider(this.scene.player.physicsBody, static_block)
        //})
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
        this.base.game_over()
    }

    game_over(){
        this.scene.sound.stopAll()
        if(this.scene.player.physicsBody.y <575)
            this.hit_effect.play()
        this.game_paused = true
        this.scene.physics.pause() //congela os eventos físicos
        this.scene.player.kill()
        this.help_menu.help_button.anims.stop()
        this.scene.goal.anims.stop()
        this.gameOver = new GameOver(this.scene)
    }
}
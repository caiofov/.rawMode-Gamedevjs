class GameOver{
    constructor(scene){
        this.scene = scene
        this._create_window()  
    }

    _create_window(){
        //background da janela de game over
        this.background = this.scene.add.image(game.config.width/2,game.config.height/2, 'gameover_background')
        .setOrigin(0.5)
        .setDisplaySize(game.config.width/2,game.config.height/2)
        .setDepth(10)

        //botao de reiniciar
        this.restart = new RestartButton(this.scene, 500, 380, 40, 0.5, 0.5, 'white')
        //titulo da janela
        this.text = this.scene.add.text(game.config.width/2,game.config.height/2 - 100,"",{fontSize: '40px', color: 'white'})
        .setOrigin(.5)
        .setDepth(11)
        //botao para voltar para o menu principal
        this.menu_text = this.scene.add.text(300, 380, "Menu",{fontSize: '30px', color: 'white'})
        .setOrigin(.5)
        .setInteractive()
        .setDepth(11)

        this.subtext = this.scene.add.text(game.config.width/2,game.config.height/2 - 20,"",{fontSize: '30px', color: 'white'})
        .setOrigin(.5)
        .setDepth(11)

        this.temporary_title = ""
        this.title_characters = ("Game Over").split('')
        this.count = 0

        this.temporary_title2 = ""
        this.title_characters2 = ("You failed").split('')
        this.count2 = 0
        
    }

    update(){
        if(this.count < this.title_characters.length *2){
            this.animateTitle()
        }
        else if(this.count2 < this.title_characters2.length *2){
            this.animateTitle2()
        }
        this.restart.update()

        this.menu_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
            this.scene.scene.start('LevelMenu')
        })
        this.menu_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () =>{
            this.menu_text.setScale(1.2)
        })
        this.menu_text.on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
            this.menu_text.setScale(1)
        })

    }
    
    animateTitle(){

        if(this.temporary_title.length < 9){
            this.temporary_title += Math.random() > 0.5 ? 1 : 0
        }
        else if(this.count < 9){
            let replace = this.temporary_title.charAt(this.count) == 0 ? 1 : 0
            this.temporary_title = this.temporary_title.substring(0,this.count) + replace + this.temporary_title.substring(this.count+1)
            this.count++
        }
        else{
            let idx = this.count - 9
            this.temporary_title = this.temporary_title.substring(0,idx) + this.title_characters[idx]+ this.temporary_title.substring(idx+1)
            this.count++
        }
        this.text.setText(this.temporary_title)
        
    }

    animateTitle2(){
        if(this.temporary_title2.length < 10){
            this.temporary_title2 += Math.random() > 0.5 ? 1 : 0
        }
        else if(this.count2 < 10){
            let replace = this.temporary_title2.charAt(this.count2) == 0 ? 1 : 0
            this.temporary_title2 = this.temporary_title2.substring(0,this.count2) + replace + this.temporary_title2.substring(this.count2+1)
            this.count2++
        }
        else{
            let idx = this.count2 - 10
            this.temporary_title2 = this.temporary_title2.substring(0,idx) + this.title_characters2[idx]+ this.temporary_title2.substring(idx+1)
            this.count2++
        }
        this.subtext.setText(this.temporary_title2)
    }
}
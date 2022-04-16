var game
window.onload = function(){
    const config = {
        type: Phaser.Canvas, //tipo de tecnologia para renderizar a imagem na tela do navegador
        //AUTO -> proprio sistema escolhe a tecnologia
        //Canvas / WebGL
        width: 800,
        height: 600,
        scene: [Preloader, StartScene, Scene1], //pode passar várias cenas e carregá-las dinamicamente durante o jogo
        physics: { //configuração de físicas
            default: 'arcade', //nome do motor
            arcade: {
                gravity: {y: 1000},
                // debug: true
            }
        },
        pixelArt: true //diz que está utilizando pixel arte para não dar o blur nas imagens aumentadas 
    }
    game = new Phaser.Game(config)
}

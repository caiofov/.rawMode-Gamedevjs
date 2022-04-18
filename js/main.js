var game
window.onload = function(){
    const config = {
        type: Phaser.Canvas, 
        width: 800,
        height: 600,
        scene: [Preloader, StartScene, Scene1], 
        physics: {
            default: 'arcade', 
            arcade: {
                gravity: {y: 1000},
                // debug: true
            }
        },
        pixelArt: true 
    }
    game = new Phaser.Game(config)
}

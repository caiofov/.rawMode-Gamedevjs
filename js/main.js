var game
var blockTypeDictionary = 
{
    'cloud': '0000',
    'water': '0001',
    'metal': '0010',
    'spike': '1000',
}

var nonCollisionBlocks = [
    'cloud',
    'water'
]

var numberOfLevels = 5

window.onload = function(){
    const config = {
        type: Phaser.Canvas, 
        width: 800,
        height: 600,
        scene: [Preloader, StartScene, LevelMenu, Level1], 
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

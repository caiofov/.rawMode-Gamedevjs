var game
var blockTypeDictionary = 
{
    'cloud': '0000',
    'metal': '0010',
    'spike': '1000',
}

var nonCollisionBlocks = [
    'cloud',
]

var buttonLevels = [true, false, false, false, false]

var numberOfLevels = 5

window.onload = function(){
    const config = {
        type: Phaser.Canvas, 
        width: 800,
        height: 600,
        scene: [Preloader, StartScene, LevelMenu, Level1, Level2,Level3,Level4, Level5, Tutorial1, Tutorial2, Tutorial3], 
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

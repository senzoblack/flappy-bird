
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};
//Load assets, such as images, music, animations...
function preload () {
  //contains functions and properties we can use
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird','assets/bird.png');
}

function create () {
  //x
  //y
  //key of the image
  this.add.image(config.width/2, config.height/2, 'sky');
  this.add.sprite(config.width/2, config.height/2,'bird').setOrigin(0);
}
new Phaser.Game(config);

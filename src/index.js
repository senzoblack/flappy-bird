
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
    create: create,
    update: update
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
  //middle of the height, 1/10 width
  bird = this.physics.add.sprite(config.width * 0.1, config.height/2,'bird').setOrigin(0);
  //200px per second pull down
  //gravity vs velocity(velocity you changing distance over time).
  bird.body.gravity.y = 200;
  console.log(bird.body);
  debugger
}
function update() {
  
}
new Phaser.Game(config);

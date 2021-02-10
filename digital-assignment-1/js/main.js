import "./phaser.js";

class MyScene extends Phaser.Scene {
    
   constructor() {
        super();
    }
    
    preload() {
        this.load.image('farm', 'assets/farm.png');
        this.load.spritesheet('chicken', 'assets/chicken_run.png', { frameWidth: 45, frameHeight: 41 });
        this.load.image('hi', 'assets/platform.png');
        this.load.image('ground', 'assets/invisible_ground.png');
        this.load.image('mid_ground', 'assets/mid_ground.png');
        this.load.image('roof', 'assets/right_roof.png');
        this.load.image('tower_roof', 'assets/tower_roof.png');
        this.load.image('duck', 'assets/duck.png');
        // this.load.image('star', 'assets/star.png');
        // this.load.image('bomb', 'assets/bomb.png');
        // this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
    
    create() {
        this.add.image(400, 300, 'farm');

        platforms = this.physics.add.staticGroup();
        
        platforms.create(300, 568, 'ground');
        platforms.create(775, 568, 'ground');
        platforms.create(400, 490, 'mid_ground');
        platforms.create(580, 370, 'roof');
        platforms.create(520, 285, 'roof');
        platforms.create(506, 208, 'duck');
        platforms.create(200, 265, 'tower_roof');

        player = this.physics.add.sprite(100, 450, 'chicken');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('chicken', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'chicken', frame: 3 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('chicken', { start: 4, end: 6 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(player, platforms);
        cursors = this.input.keyboard.createCursorKeys();
    }
    
    update() {
        if (cursors.left.isDown)
    {
        player.setVelocityX(-100);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(100);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-300);
    }
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: MyScene,
});

var platforms;
var player;
var cursors;
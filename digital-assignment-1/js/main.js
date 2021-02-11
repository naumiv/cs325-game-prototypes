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
        this.load.image('egg', 'assets/egg.png');
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

        chicken = this.physics.add.sprite(150, 450, 'chicken');
        chicken.setBounce(0.2);
        chicken.setCollideWorldBounds(true);

        scoreText = this.add.text(16, 16, 'score: 0', {fontFamily: 'Georgia', fontSize: '28px', fill: '#fff' });

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

        this.physics.add.collider(chicken, platforms);      
        cursors = this.input.keyboard.createCursorKeys();

        chicken.on('animationrepeat', function () {

            const eggs = this.physics.add.image(chicken.x - 25, chicken.y - 5, 'egg').setScale(0.5);
           
            this.physics.add.collider(eggs, platforms);
            eggs.setCollideWorldBounds(true);

            this.tweens.add({
                targets: eggs,
                props: {
                    x: {
                        value: '-=64', ease: 'Power1'
                    },
                    y: {
                        value: '+=10', ease: 'Bounce.easeOut'
                    }
                },
                duration: 750
            });

            score += 10;
            scoreText.setText('score: ' + score);

        }, this);
    }
    
    update() {
        if (cursors.left.isDown)
    {
        chicken.setVelocityX(-100);

        chicken.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        chicken.setVelocityX(100);

        chicken.anims.play('right', true);
    }
    else
    {
        chicken.setVelocityX(0);

        chicken.anims.play('turn');
    }

    if (cursors.up.isDown && chicken.body.touching.down)
    {
        chicken.setVelocityY(-300);
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
var chicken;
var cursors;
var score = 0;
var scoreText;
import "./phaser.js";

class MyScene extends Phaser.Scene {
    
    constructor() {
        super();
        
    }
    
    preload() {
        this.load.image('house', 'assets/house.png');
        this.load.image('ghost', 'assets/ghost.png');
        this.load.image('pac', 'assets/pac.png');
        this.load.audio('spooky', 'assets/spooky.mp3');
    }
    
    create() {
        var bg_music = this.sound.add('spooky').setLoop(true).setVolume(0.1);
        bg_music.play();

        this.add.image(0, 0, 'house').setOrigin(0).setScrollFactor(1);

        scoreText = this.add.text(10, 10, 'score: 0', {fontFamily: 'Georgia', fontSize: '24px', fill: '#fff' });


        var pac = this.physics.add.staticGroup();
        var p1 = pac.create(200, 600, 'pac');
        var p2 = pac.create(300, 700, 'pac');
        var p3 = pac.create(400, 350, 'pac');
        var p4 = pac.create(450, 200, 'pac');
        var p5 = pac.create(150, 400, 'pac');

        this.cameras.main.setBounds(0, 0, 800, 608);
    
        this.cursors = this.input.keyboard.createCursorKeys();

        this.ghost = this.physics.add.image(400, 200, 'ghost');

        this.cameras.main.startFollow(this.ghost, true, 0.09, 0.09);
    
        this.cameras.main.setZoom(4);

        // this.physics.add.overlap(ghost, pac, haunt, null, this);
        // function haunt (player, pacg)
        // {
        //    // pac_ghost.disableBody(true, true);
        // }

    }

    update() {
        this.ghost.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.ghost.resetFlip();
            this.ghost.setVelocityX(-200);
            score += 10;
            scoreText.setText('score: ' + score);
        }
        else if (this.cursors.right.isDown)
        {
            this.ghost.flipX = true;
            this.ghost.setVelocityX(200);
            score += 10;
            scoreText.setText('score: ' + score);
        }
    
        if (this.cursors.up.isDown)
        {
            this.ghost.setAngle(0).setVelocityY(-200);
            score += 10;
            scoreText.setText('score: ' + score);

        }
        else if (this.cursors.down.isDown)
        {
            this.ghost.setVelocityY(200);
            score += 10;
            scoreText.setText('score: ' + score);
        }
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 608,
    scene: MyScene,
    physics: { default: 'arcade' },
    });

var score = 0;
var scoreText;

import "./phaser.js";

class MyScene extends Phaser.Scene {
    
    constructor() {
        super();
    }
    
    preload() {
        this.load.audio('disco', 'assets/humble_match.mp3');
        this.load.image('bg', 'assets/kitchen.jpg');
        this.load.image('bar', 'assets/progress.png');
        this.load.image('start', 'assets/start.png');
        this.load.image('chicken', 'assets/chicken.png');
        this.load.image('steak', 'assets/steak.png');
        this.load.image('fish', 'assets/fish.png');
        this.load.image('cheese', 'assets/cheese.png');
        this.load.image('corn', 'assets/corn.png');
        this.load.image('apple', 'assets/apple.png');
        this.load.image('eggplant', 'assets/eggplant.png');
        this.load.image('mushroom', 'assets/mushroom.png');
        this.load.image('watermelon', 'assets/watermelon.png');
        this.load.image('instructions', 'assets/instructions.png');
        this.load.image('next', 'assets/next.png');
        this.load.image('triangle', 'assets/triangle.png');
        this.load.image('cook', 'assets/cook.png');
        this.load.image('stop', 'assets/stop.png');
        
        // this.load.image('up', 'assets/up-bubble.png');
        // this.load.image('down', 'assets/down-bubble.png');
        // this.load.spritesheet('fish', 'assets/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }
    
    create() {
        this.add.image(400, 300, 'bg').setScale(1.3);
        // var text = this.add.text(10, 10, 'Tap the Sprite', { font: '16px Courier', fill: '#00ff00' });

        var bg_music = this.sound.add('disco').setLoop(true).setVolume(0.25);
        bg_music.play();

        var start = this.add.image(400, 300, 'start').setInteractive();
        start.once('pointerup', setStage, this);

        function setStage ()
        {   
            this.add.image(400, 300, 'bg').setScale(1.3);
            var next = this.add.image(400, 550, 'next').setScale(.4).setInteractive();
            // var text = this.add.text(10, 10, 'Chosen: ', { font: '24px Courier', fill: '#ffffff' });
            var bubble = this.add.image(400, 100, 'instructions', 0).setScale(0.75);
            var f1 = this.add.image(200, 250, 'chicken', 0).setInteractive();
            var f2 = this.add.image(200, 350, 'steak', 0).setInteractive();
            var f3 = this.add.image(200, 450, 'fish', 0).setInteractive();
            var f4 = this.add.image(400, 250, 'corn', 0).setInteractive();
            var f5 = this.add.image(400, 350, 'cheese', 0).setInteractive();
            var f6 = this.add.image(400, 450, 'apple', 0).setInteractive();
            var f7 = this.add.image(600, 250, 'mushroom', 0).setInteractive();
            var f8 = this.add.image(600, 350, 'watermelon', 0).setInteractive();
            var f9 = this.add.image(600, 450, 'eggplant', 0).setInteractive();
            // counter = 0
                    
            f1.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f2.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f3.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f4.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f5.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f6.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f7.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f8.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});
            f9.on('pointerdown', function () {this.setTint(Math.random() * 16000000);});

            next.once('pointerup', setNext, this);

            function setNext()
            {
                this.add.image(400, 300, 'bg').setScale(1.3);
                var pb = this.add.image(400, 300, 'bar', 0).setScale(0.1);
                var triangle = this.add.image(220, 345, 'triangle', 0).setScale(0.1);
                var cook_bubble = this.add.image(400, 100, 'cook', 0).setScale(0.75);
                var stop = this.add.image(400, 500, 'stop', 0).setScale(0.70).setInteractive();
            
                this.tweens.add({
                    targets: triangle,
                    props: {
                        x: { value: 585, duration: 4000},
                    },
                    ease: 'Cubic',
                    yoyo: true,
                    repeat: -1
                });

                var tweens = this.tweens;

                this.input.on('gameobjectup', function (pointer, gameobject) {
                    if (gameobject === stop && tweens.timeScale > 0)
                    {
                        tweens.pauseAll();
                
                        text.setText('Pause All');
                    }

                });



            }

        }



        // var pb = this.add.image(400, 100, 'bar', 0).setScale(0.1);
        // var pb = this.add.image(400, 100, 'bar', 0).setScale(0.1);

        // var image1 = this.add.image(0, 80, 'fish', 0);

        // this.tweens.add({
        //     targets: image1,
        //     props: {
        //         x: { value: 700, duration: 4000, flipX: true },
        //         y: { value: 500, duration: 8000,  },
        //     },
        //     ease: 'Sine.easeInOut',
        //     yoyo: true,
        //     repeat: -1
        // });

        // var image2 = this.add.image(400, 80, 'fish', 1);

        // this.tweens.add({
        //     targets: image2,
        //     props: {
        //         x: { value: 500, duration: 2000, flipX: true },
        //         y: { value: 500, duration: 10000,  },
        //     },
        //     ease: 'Sine.easeInOut',
        //     yoyo: true,
        //     repeat: -1
        // });

        // var image3 = this.add.image(800, 200, 'fish', 2).setFlipX(true);

        // this.tweens.add({
        //     targets: image3,
        //     props: {
        //         x: { value: 70, flipX: true },
        //         y: { value: 250 },
        //     },
        //     duration: 3000,
        //     ease: 'Power1',
        //     yoyo: true,
        //     repeat: -1
        // });

        // var image4 = this.add.image(100, 550, 'fish', 2).setScale(0.75);

        // this.tweens.add({
        //     targets: image4,
        //     props: {
        //         x: { value: 700, duration: 2000, flipX: true },
        //         y: { value: 50, duration: 15000,  },
        //     },
        //     ease: 'Sine.easeInOut',
        //     yoyo: true,
        //     repeat: -1
        // });

        //  Buttons to control the Tween timescale

        // var text = this.add.text(180, 0, 'Click to Pause / Resume').setFont('32px Arial Black').setFill('#ffffff').setShadow(2, 2, "#333333", 2);

        // var downButton = this.add.image(70, 530, 'down').setInteractive();
        // var upButton = this.add.image(730, 530, 'up').setInteractive();

        // var tweens = this.tweens;

        // this.input.on('gameobjectup', function (pointer, gameobject) {
        //     if (gameobject === downButton && tweens.timeScale > 0)
        //     {
        //         tweens.pauseAll();
        
        //         text.setText('Pause All');
        //     }
        //     else if (gameobject === upButton && tweens.timeScale < 9.9)
        //     {
        //         tweens.resumeAll();
        
        //         text.setText('Resume All');
        //     }

        // });
        }
    
    update() {
    }
}

const game = new Phaser.Game({
    type: Phaser.WEBGL,
    parent: 'game',
    width: 800,
    height: 600,
    scene: MyScene,
    physics: { default: 'arcade' },
    });
import "./phaser.js";

class MyScene extends Phaser.Scene {
    
    constructor() {
        super();
    }
    
    preload() {
        this.load.audio('disco', 'assets/humble_match.mp3');
        this.load.image('bg', 'assets/kitchen.jpg');
        this.load.image('bar', 'assets/progress.PNG');
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
    }
    
    create() {
        this.add.image(400, 300, 'bg').setScale(1.3);

        var bg_music = this.sound.add('disco').setLoop(true).setVolume(0.25);
        bg_music.play();

        var start = this.add.image(400, 300, 'start').setInteractive();
        start.once('pointerup', setStage, this);

        function setStage ()
        {   
            this.add.image(400, 300, 'bg').setScale(1.3);
            var next = this.add.image(400, 550, 'next').setScale(.4).setInteractive();
            var num = this.add.text(10, 10, 'Chosen: ', { font: '24px Courier', fill: '#ffffff' });
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

            f1.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[0] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[0] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f2.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[1] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[1] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f3.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[2] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[2] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f4.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[3] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[3] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f5.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[4] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[4] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f6.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[5] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[5] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f7.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[6] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[6] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f8.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[7] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[7] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            f9.on('pointerdown', function () {
                if(ingred_counter < 3 && chosen[8] != 1){
                   this.setTint(Math.random() * 16000000);
                   ingred_counter += 1;
                   chosen[8] = 1;
                   num.setText('Chosen: \n' + ingred_counter);
                }
            });

            // next.once('pointerup', setNext, this);

            next.once('pointerup', mix, this);

            function mix(){
                this.add.image(400, 300, 'bg').setScale(1.3);
                var c1, c2, c3;
                var display = 0;

                for(i = 0; i < chosen.length; i++){
                    if(chosen[0] == 1){
                        if(display == 0){c1 = this.add.image(100, 250, 'chicken', 0).setInteractive();display += 1;}
                        else if(display == 1){c2 = this.add.image(100, 250, 'chicken', 0).setInteractive();display += 1;}
                        else{c3 = this.add.image(100, 250, 'chicken', 0).setInteractive();}
                    }
                    // if(chosen[1] == 1){
                    //     if(display == 0){c1 = this.add.image(100, 350, 'steak', 0).setInteractive();display += 1;}
                    //     else if(display == 1){c2 = this.add.image((100, 350, 'steak', 0).setInteractive();display += 1;}
                    //     else{c3 = this.add.image(100, 350, 'steak', 0).setInteractive();}
                    //     // this.add.image(100, 350, 'steak', 0).setInteractive();
                    // }
                }
                // if(chosen[2] == 1){
                //     if(display == 0){c1 = this.add.image(100, 450, 'fish', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(100, 450, 'fish', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(100, 450, 'fish', 0).setInteractive();}
                //     // this.add.image(100, 450, 'fish', 0).setInteractive();
                // }
                // if(chosen[3] == 1){
                //     if(display == 0){c1 = this.add.image(300, 250, 'corn', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(300, 250, 'corn', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(300, 250, 'corn', 0).setInteractive();}
                //     // this.add.image(300, 250, 'corn', 0).setInteractive();
                // }
                // if(chosen[4] == 1){
                //     if(display == 0){c1 = this.add.image(300, 350, 'cheese', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(300, 350, 'cheese', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(300, 350, 'cheese', 0).setInteractive();}
                //     // this.add.image(300, 350, 'cheese', 0).setInteractive();
                // }
                // if(chosen[5] == 1){
                //     if(display == 0){c1 = this.add.image(300, 450, 'apple', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(300, 450, 'apple', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(300, 450, 'apple', 0).setInteractive();}
                //     // this.add.image(300, 450, 'apple', 0).setInteractive();
                // }
                // if(chosen[6] == 1){
                //     if(display == 0){c1 = this.add.image(500, 250, 'mushroom', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(500, 250, 'mushroom', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(500, 250, 'mushroom', 0).setInteractive();}
                //     // this.add.image(500, 250, 'mushroom', 0).setInteractive();
                // }
                // if(chosen[7] == 1){
                //     if(display == 0){c1 = this.add.image(500, 350, 'watermelon', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(500, 350, 'watermelon', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(500, 350, 'watermelon', 0).setInteractive();}
                //     // this.add.image(500, 350, 'watermelon', 0).setInteractive();
                // }
                // if(chosen[8] == 1){
                //     if(display == 0){c1 = this.add.image(500, 450, 'eggplant', 0).setInteractive();display += 1;}
                //     else if(display == 1){c2 = this.add.image(500, 450, 'eggplant', 0).setInteractive();display += 1;}
                //     else{c3 = this.add.image(500, 450, 'eggplant', 0).setInteractive();}
                //     // this.add.image(500, 450, 'eggplant', 0).setInteractive();
                // }

            }

            // function setNext()
            // {
            //     this.add.image(400, 300, 'bg').setScale(1.3);
            //     var pb = this.add.image(400, 300, 'bar', 0).setScale(0.1);
            //     var triangle = this.add.image(220, 345, 'triangle', 0).setScale(0.1);
            //     var cook_bubble = this.add.image(400, 100, 'cook', 0).setScale(0.75);
            //     var stop = this.add.image(400, 500, 'stop', 0).setScale(0.70).setInteractive();
            
            //     this.tweens.add({
            //         targets: triangle,
            //         props: {
            //             x: { value: 585, duration: 4000},
            //         },
            //         ease: 'Cubic',
            //         yoyo: true,
            //         repeat: -1
            //     });

            //     var tweens = this.tweens;

            //     this.input.on('gameobjectup', function (pointer, gameobject) {
            //         if (gameobject === stop && tweens.timeScale > 0)
            //         {
            //             tweens.pauseAll();
                
            //         }

            //     });

            // }

        }

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

var ingred_counter = 0;
var chosen = [0, 0, 0,
              0, 0, 0,
              0, 0, 0]
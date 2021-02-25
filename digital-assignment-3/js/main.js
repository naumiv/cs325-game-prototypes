import "./phaser.js";

class MyScene extends Phaser.Scene {
    
    constructor() {
        super();
    }
    
    preload() {
        this.load.image( 'morning', 'assets/morning.png' );
        this.load.image( 'noon', 'assets/noon.png' );
        this.load.image( 'afternoon', 'assets/afternoon.png' );
        this.load.image( 'sunset', 'assets/sunset.png' );
        this.load.image( 'evening', 'assets/evening.png' );
        this.load.image( 'pal', 'assets/pal.png' );
        this.load.image( 'dino', 'assets/dino1.png' );
        this.load.image( 'textbox', 'assets/textbox.png' );
        this.load.audio('adventure', 'assets/adventure.mp3');
        this.load.audio('excavate', 'assets/short_dig.mp3');
    }
    
    create() {
        this.anims.create({
            key: 'day',
            frames: [
                { key: 'morning', duration: 20000 },
                { key: 'noon', duration: 21500 },
                { key: 'afternoon', duration: 21500 },
                { key: 'sunset', duration: 21500 },
                { key: 'evening', duration: 21500 }
            ],
            timeScale: 1,
            showOnStart: true,
        });

        this.add.sprite(400, 250, 'morning').play('day');

        const textbox = this.add.image(600, 350, 'textbox');
        const dino = this.add.image(50, 50, 'dino');
        var gameover = this.add.text(225, 150, '', {fontFamily: 'Georgia', fontSize: '40px', fill: '#fff', align: 'center' });
        const info = this.add.text(100, 17, '', {fontFamily: 'Georgia', fontSize: '20px', fill: '#fff' });
        var dig = this.add.text(515, 330, '', {fontFamily: 'Georgia', fontSize: '20px', fill: '#000', align: 'center' });
        dig.setWordWrapWidth(200, true);

        var bg_music = this.sound.add('adventure').setLoop(true).setVolume(0.1);
        bg_music.play();
        var excavate = this.sound.add('excavate');


        var posEvents = ["You found a T-Rex tooth!", "You found a Diplodocus femur!", "You found a Stegosaurus spike!",
                         "You found a Pterodactyl wing!", "You found a Brontosaurus spine!", "You found a Trilobite shell",
                         "You found a Plesiosaur fin bone!", "You found a Velociraptor claw!", "You found a Brachiosaurus leg bone!"];

        // var negEvents = ["Oh no you lost a grant!", "just dirt ... and more dirt", "Yikes! You got stung by a scorpion!",
        //                  "just dirt ... and more dirt", "Uh oh the excavation collapsed!", "just dirt ... and more dirt"];
        var negEvents = ["Oh no you lost a grant!", "just dirt ... and more dirt", "just dirt ... and more dirt",
                         "just dirt ... and more dirt","Yikes! You got stung by a scorpion!","just dirt ... and more dirt",
                         "just dirt ... and more dirt", "just dirt ... and more dirt", "Uh oh the excavation collapsed!"];

        var startMon = Math.floor((Math.random() * 20000) + 1);

        dino.setDataEnabled();
        dino.setData('money', startMon);
        dino.setData('fossils', 0);
        dino.setData('rank', 'dinosaur enthusiast');

        textbox.setDataEnabled();
        textbox.setData('event', 'nothing so far');

        info.setText([
            'Money: $' + dino.getData('money'),
            'Fossils: ' + dino.getData('fossils'),
            'Rank: ' + dino.getData('rank')
        ]);

        dig.setText([
            'Event: ' + textbox.getData('event')
        ]);

        dino.on('changedata-fossils', function (gameObject, value) {
            if (value > 10 && value <= 20)
            {
                gameObject.data.values.rank = "dig site assistant";
            }
            else if (value > 20 && value <= 30){
                gameObject.data.values.rank = "dig site manager";
            }
            else if (value > 30 && value <= 40){
                gameObject.data.values.rank = "amateur paleontologist";
            }
            else if (value > 40 && value <= 50){
                gameObject.data.values.rank = "junior paleontologist";
            }
            else if (value > 50 && value <= 60){
                gameObject.data.values.rank = "senior paleontologist";
            }
            else{
                if (value > 60){
                    gameObject.data.values.rank = "legendary paleontologist";  
                } 
            }

            info.setText([
                'Money: $' + dino.getData('money'),
                'Fossils: ' + dino.getData('fossils'),
                'Rank: ' + dino.getData('rank')
            ]);
        });

        //  Change the 'value' property when the mouse is clicked
        this.input.on('pointerdown', function () {
            var fossilChance = Math.floor((Math.random() * 10) + 1)
            var posChance = Math.floor((Math.random() * 9));
            var negChance = Math.floor((Math.random() * 9));
            // excavate.play();

            if (dino.data.values.money >= 100){
                excavate.play();
                dino.data.values.money -= 100;
                if (fossilChance > 5){
                    dino.data.values.fossils += 1;
                    textbox.data.values.event = posEvents[posChance];
                }
                else{
                    textbox.data.values.event = negEvents[negChance];
                    if (negChance == 0){
                        dino.data.values.money -= 1000;
                    }
                    if (negChance == 4){
                        dino.data.values.money -= 500;
                    }
                    if (negChance == 8){
                        dino.data.values.money -= 750;
                    }
                }
            }
            else{
                gameover.setText("GAME OVER\nReload to try again!");
            }

            info.setText([
                'Money: $' + dino.getData('money'),
                'Fossils: ' + dino.getData('fossils'),
                'Rank: ' + dino.getData('rank')
            ]);

            dig.setText([
                        textbox.getData('event')
            ]);
        });

        this.add.image(300, 475, 'pal').setScale(.5);

    }
    
    update() {
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: MyScene,
    physics: { default: 'arcade' },
    });

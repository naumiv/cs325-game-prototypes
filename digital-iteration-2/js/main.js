import "./phaser.js";

class MyScene extends Phaser.Scene {
    
    constructor() {
        super();
        
    }
    
    preload() {
        // Load the tiles (images) for the map.
        this.load.image( 'tiles', 'assets/roguelikeSheet_transparent.png');
        // Load from Tiled's JSON format:
        this.load.tilemapTiledJSON( 'map', 'assets/house.json' );
        this.load.image('ghost', 'assets/ghost.png');
        this.load.image('pac', 'assets/pac.png');
        this.load.audio('spooky', 'assets/spooky.mp3');
    }
    
    create() {

        // create
        let map = this.make.tilemap({ key: 'map' });
        
        // Add the tiles (images) to the map.
        let tileset = map.addTilesetImage('rogue', 'tiles'); // 'rogue',
        
        // Create a layer from the map using the name given in the JSON file:
        let foundation = map.createLayer( 'Foundation', tileset );
        let foliage = map.createLayer( 'Foliage', tileset );
        let carpet = map.createLayer( 'Carpet', tileset );
        let furniture = map.createLayer( 'Furniture', tileset );

        var ghost = this.physics.add.image(100+16, 270+16, 'ghost');

        this.input.keyboard.on('keydown-A', function (event) {
            var tile = foundation.getTileAtWorldXY(ghost.x - 32, ghost.y, true);
            ghost.x -= 32;
            ghost.resetFlip();
        });

        this.input.keyboard.on('keydown-D', function (event) {
            var tile = foundation.getTileAtWorldXY(ghost.x + 32, ghost.y, true);
            ghost.x += 32;
            ghost.flipX = true;
         });

        this.input.keyboard.on('keydown-W', function (event) {
            var tile = foundation.getTileAtWorldXY(ghost.x, ghost.y - 32, true);
            ghost.y -= 32;
        });

        this.input.keyboard.on('keydown-S', function (event) {
            var tile = foundation.getTileAtWorldXY(ghost.x, ghost.y + 32, true);
            ghost.y += 32;
         });

        this.physics.world.setBounds(foundation.x, foundation.y, foundation.width, foundation.height );
        this.cameras.main.setBounds(foundation.x, foundation.y, foundation.width, foundation.height );

        var bg_music = this.sound.add('spooky').setLoop(true).setVolume(0.1);
        bg_music.play();

        scoreText = this.add.text(10, 10, 'score: 0', {fontFamily: 'Georgia', fontSize: '24px', fill: '#fff' });

        var pac = this.physics.add.group();
        var p1 = pac.create(200, 600, 'pac');
        var p2 = pac.create(300, 700, 'pac');
        var p3 = pac.create(400, 350, 'pac');
        var p4 = pac.create(450, 200, 'pac');
        var p5 = pac.create(150, 400, 'pac');

        pac.children.iterate(function (child) {

          child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });  

        this.physics.add.collider(ghost, pac);
        this.physics.add.overlap(ghost, pac, haunt, null, this);

        function haunt (player, enemy)
        {
            enemy.destroy();
            // enemy.setVisible(false);
            score += 50;
            scoreText.setText('score: ' + score);
        }

    }

    update() {
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

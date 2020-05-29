/* globals __DEV__ */
import { Scene } from 'phaser';
import ChristmasTree from '../sprites/ChristmasTree';

class GameScene extends Scene {
    constructor() {
        super('GameScene');
    }

    init() {
        // TODO
    }

    preload() {
        // TODO
    }

    create() {
        this.christmastree = new ChristmasTree({
            scene: this,
            x: 400,
            y: 300,
            asset: 'christmas_tree',
            frame: 1,
        }).setScale(3);

        this.add.existing(this.christmastree);
        this.add.text(100, 100, 'Phaser 3 + Webpack 4 + ES6 + Cordova 8', {
            font: '45px Bangers',
            fill: '#7744ff',
        });
    }
}

export default GameScene;

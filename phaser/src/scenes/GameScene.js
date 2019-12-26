/* globals __DEV__ */
import Phaser from 'phaser';
import ChristmasTree from '../sprites/ChristmasTree';

export default class extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
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
        }).setScale(3);

        this.add.existing(this.christmastree);
        this.add.text(100, 100, 'Phaser 3 + Webpack 4 + ES6 + Cordova 8', {
            font: '45px Bangers',
            fill: '#7744ff',
        });
    }
}

/* globals __DEV__ */
import { Scene } from 'phaser';
import ChristmasTree from '../sprites/ChristmasTree';
import Background from '../sprites/Background';
import DraggableChristmasTree from '../sprites/DraggableChristmasTree';

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
        this.background = new Background({
            scene: this,
            x: 0,
            y: 0,
            asset: 'background',
        }).setOrigin(0, 0);

        this.christmastree = new ChristmasTree({
            scene: this,
            x: 200,
            y: 200,
            asset: 'christmas_tree',
        }).setScale(3);

        this.draggablechristmastree = new DraggableChristmasTree({
            scene: this,
            x: 400,
            y: 300,
            asset: 'christmas_tree',
        }).setScale(4);

        // this.add.existing(this.background);
        this.add.existing(this.christmastree);
        this.add.existing(this.draggablechristmastree);

        this.add.text(100, 100, 'Phaser 3 + Webpack 4 + ES6 + Cordova 8', {
            font: '45px Bangers',
            fill: '#7744ff',
        });
    }
}

export default GameScene;

/* globals __DEV__ */
import { Scene } from 'phaser';
import ChristmasTree from '../sprites/ChristmasTree';
import Background from '../sprites/Background';
import DraggableChristmasTree from '../sprites/DraggableChristmasTree';
import MovableChristmasTree from '../sprites/MovableChristmasTree';

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
            x: 400,
            y: 200,
            asset: 'christmas_tree',
        }).setScale(3);

        this.movablechristmastree = new MovableChristmasTree({
            scene: this,
            x: 650,
            y: 300,
            asset: 'christmas_tree',
        }).setScale(3);

        this.draggablechristmastree = new DraggableChristmasTree({
            scene: this,
            x: 500,
            y: 300,
            asset: 'christmas_tree',
        }).setScale(3);

        this.add.existing(this.background);
        this.add.existing(this.christmastree);
        this.add.existing(this.draggablechristmastree);
        this.add.existing(this.movablechristmastree);

        this.cameras.main.startFollow(this.movablechristmastree);

        this.add.text(400, 100, 'Phaser 3 + Webpack 4 + ES6 + Cordova 8', {
            font: '30px Roboto',
            fill: '#7744ff',
        });
    }

    update(time, delta) {
        this.movablechristmastree.update(time, delta);
    }
}

export default GameScene;

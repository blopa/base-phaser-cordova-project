import Phaser from 'phaser';

export default class extends Phaser.Scene {
    constructor() {
        super({ key: 'SplashScene' });
    }

    preload() {
    /*
     *
     * load your assets
     *
     */
        this.load.image('christmas_tree', 'assets/images/christmas_tree.png');
    }

    create() {
        this.scene.start('GameScene');
    }

    update() {
        // TODO
    }
}

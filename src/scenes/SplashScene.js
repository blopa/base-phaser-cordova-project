import { Scene } from 'phaser';

class SplashScene extends Scene {
    constructor() {
        super('SplashScene');
    }

    preload() {
        // load your assets
        this.load.image('christmas_tree', 'assets/images/christmas_tree.png');
    }

    create() {
        this.scene.start('GameScene');
    }

    update() {
        // TODO
    }
}

export default SplashScene;

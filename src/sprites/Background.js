import { GameObjects } from 'phaser';

class Background extends GameObjects.Image {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
        this.setDepth(0);
    }
}

export default Background;

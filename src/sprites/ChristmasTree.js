import { GameObjects } from 'phaser';

export default class extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
    }
}

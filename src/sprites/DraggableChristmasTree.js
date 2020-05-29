import { GameObjects } from 'phaser';
import { setDraggable } from '../utils';

class DraggableChristmasTree extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
        this.setDepth(1);
        this.setOrigin(1, 1);

        Object.assign(this, { setDraggable });
        this.setDraggable();
    }
}

export default DraggableChristmasTree;

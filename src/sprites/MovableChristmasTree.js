import { GameObjects } from 'phaser';
import { handleSpriteMovement } from '../utils';

class DraggableChristmasTree extends GameObjects.Sprite {
    constructor({ scene, x, y, asset, frame }) {
        super(scene, x, y, asset, frame);
        this.setDepth(1);
        this.setOrigin(1, 1);

        Object.assign(this, {
            handleSpriteMovement,
        });
    }

    update(time, delta) {
        this.handleSpriteMovement();
    }
}

export default DraggableChristmasTree;

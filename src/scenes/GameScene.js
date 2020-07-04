/* globals __DEV__ */
import Phaser, { Scene } from 'phaser';
import registerTiledJSONExternalLoader from 'phaser-tiled-json-external-loader';
import ChristmasTree from '../sprites/ChristmasTree';
import Background from '../sprites/Background';
import DraggableChristmasTree from '../sprites/DraggableChristmasTree';
import MovableChristmasTree from '../sprites/MovableChristmasTree';

registerTiledJSONExternalLoader(Phaser);

class GameScene extends Scene {
    constructor() {
        super('GameScene');
    }

    init() {
        // TODO
    }

    preload() {
        this.load.image('tilesetImage', 'assets/italo/tileset.png');
        this.load.tilemapTiledJSONExternal('tilemap', 'assets/italo/main_map.json');
    }

    create() {
        const tilemap = this.make.tilemap({ key: 'tilemap' });
        const tileset = tilemap.addTilesetImage('tileset', 'tilesetImage');
        tilemap.createStaticLayer('layer1', tileset, 0, 0);
    }

    update(time, delta) {
        // this.movablechristmastree.update(time, delta);
    }
}

export default GameScene;

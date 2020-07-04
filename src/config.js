import Phaser from 'phaser';

export default {
    type: Phaser.AUTO,
    parent: 'content',
    width: 768,
    height: 432,
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    autoRound: false,
    localStorageName: 'base-phaser-cordova-project',
    pixelArt: true,
};

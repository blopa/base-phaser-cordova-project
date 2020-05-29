function onDragEvent(pointer, x, y) {
    this.setX(x);
    this.setY(y);
}

function onDragStartEvent() {
    this.setScale(this.scale + 1);
}

function onDragEndEvent() {
    this.setScale(this.scale - 1);
}

export function setDraggable() {
    this.setInteractive();

    this.scene.input.dragDistanceThreshold = 5;
    this.scene.input.setDraggable(this);
    this.on('dragstart', this::onDragStartEvent);
    this.on('drag', this::onDragEvent);
    this.on('dragend', this::onDragEndEvent);
}

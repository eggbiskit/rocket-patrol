class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu"); // shows Rocket Patrol Menu
        this.scene.start("playScene"); // shows Rocket Patrol Play
    }
}
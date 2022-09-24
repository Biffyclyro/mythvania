import { Physics } from "phaser";
import { Command } from "./command";

const velocity = 180;

const moveUp: Command = (sprite: Physics.Arcade.Sprite) => {
	sprite.setAccelerationY(-velocity);
}

const moveDown: Command = (sprite: Physics.Arcade.Sprite) => {
	sprite.setAccelerationY(velocity);
}

const moveLeft: Command = (sprite: Physics.Arcade.Sprite) => {
	sprite.setAccelerationX(-velocity);
}

const  moveRight: Command = (sprite: Physics.Arcade.Sprite) => {
	sprite.setAccelerationX(velocity);
}

const stop: Command = (sprite: Physics.Arcade.Sprite) => {
	sprite.setVelocity(0,0);
}

export const commands = new Map<string, Command>();
commands.set('left', moveLeft);
commands.set('right', moveRight);
commands.set('up', moveUp);
commands.set('down', moveDown);
commands.set('stop', stop);
import { Direction, Player, SpriteEntity } from "../entities"

export interface Command {
	//comportamento diferente do previsto
	(sprite: SpriteEntity & Player): void
}

const jump = (sprite: SpriteEntity) => {
	sprite.jump()
}

const moveDown = (sprite: SpriteEntity) => {
	console.log('down')
}

const moveLeft = (sprite: SpriteEntity) => {
	sprite.move(Direction.Left)
}

const  moveRight = (sprite: SpriteEntity) => {
	sprite.move(Direction.Right)
}

const stop = (sprite: SpriteEntity) => {
	sprite.idle()
}

const normalSkill = (sprite: SpriteEntity) => {
	sprite.useNormalSkill()
}

const baseAttack = (sprite: Player) => {
	sprite.attack()
}

export const commands = new Map<string, Command>();
commands.set('ArrowLeft', moveLeft)
commands.set('ArrowRight', moveRight)
commands.set('ArrowUp', jump)
commands.set('ArrowDown', moveDown)
commands.set('stop', stop)
commands.set('normalSkill', normalSkill)
commands.set('baseAttack', baseAttack)
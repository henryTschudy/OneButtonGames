title = "Graveyard Shift";

description = `
Avoid the Ghosts

[hold] to shoot
[mouse] to aim 
and move
`;

characters = [

];

const S = {
	WIDTH: 100,
	HEIGHT: 100
};

options = {
  theme: 'dark',
  isPlayingBgm: true
};

/**
* @typedef {{
  * pos: Vector
  * spd: Vector
  * target: 0
  * }} Ghost
  */
  
  /**
  * @type  { Ghost [] }
  */
let ghost;
let player;

function update() {
  if (!ticks) {
    player = {
      pos:vec(S.WIDTH/2,S.HEIGHT/2),
      Shooting: false,
      ammo: 100,
    }
  }


}

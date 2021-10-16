title = "ARC DODGE";

description = `[Mouse] Move
`;

characters = [
  `
 r  r   
 llll 
llllll
 l  l    
  `,
];

const G = {
  WIDTH: 100,
  HEIGHT: 100,
  TIME_MAX: 130
}

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT},
  seed: 3,
  isPlayingBgm: true,
  isReplayEnabled: true
};

/**
 * @typedef {{
 * pos: Vector,
 * }} Player
 */

/**
 * @type { Player }
 */
let player;

/**
 * @typedef {{
 * angle: number,
 * }} Rings
 */

/**
 * @type { Rings [] }
 */
let rings;

let ringticks;
let nextAngleTo;
let nextAngleFrom;
let timer;
let randnum;

function update() {
  if (!ticks) {
  ringticks = 0;
  nextAngleTo = 5;
  nextAngleFrom = 0;
  randnum = 0;
  timer = 0;

  player = {
    pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5) };

}

//spawn random rings ///////////////
ringticks += (difficulty * 0.8);

timer++; 


if (timer < (G.TIME_MAX * 0.8)) {
  color("light_red");
}
else {
  color("red");
}

if(timer == G.TIME_MAX) {
  nextAngleTo = rndi(0, 10);
  nextAngleFrom = nextAngleTo - 5; 
  randnum = rndi(1, 3);
  timer = 0;
};

arc(50, 50, wrap(70 - ((ringticks / 2) % 70), 0, 70), 5, nextAngleFrom, nextAngleTo);
arc(50, 50, wrap(100 - ((ringticks / 2) % 70), 0, 70), 5, nextAngleFrom + randnum, nextAngleTo + randnum);
/////////////////////////////////////

//Update and draw Player
  player.pos = vec(input.pos.x, input.pos.y);
  player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);

  color ("black");
  char("a", player.pos);

//Collisions
  if(char("a",player.pos).isColliding.rect.red){
    end();
    play("explosion");
  } 
  else if(char("a",player.pos).isColliding.rect.light_red){
    end(); 
    play("explosion");
  }
}

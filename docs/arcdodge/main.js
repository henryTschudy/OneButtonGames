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
  HEIGHT: 100
}

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT},
  seed: 1,
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
let go;

function update() {
  if (!ticks) {
  ringticks = 0;
  nextAngleTo = 10;
  nextAngleFrom = 0;
  go = true;

  player = {
    pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5) };

}

//spawn random rings
color("red");
ringticks += difficulty;



if(nextAngleTo == 10) {
  nextAngleTo = rndi(0, 10);
  nextAngleFrom = nextAngleTo - 5; };
  
arc(50, 50, wrap(70 - ((ringticks / 3) % 70), 0, 70), 5, nextAngleFrom, nextAngleTo);
arc(50, 50, wrap(100 - ((ringticks / 3) % 70), 0, 70), 5, 0, 5);
//arc(centerX: num, centerY: num, radius: num, thickness?: num, angleFrom?: num, angleTo?: num)

  //Update and draw Player
  player.pos = vec(input.pos.x, input.pos.y);
  player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);

  color ("black");
  char("a", player.pos);

}

/*
function randomize() {

}
*/

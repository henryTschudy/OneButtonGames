title = "IN THE ZONE";

description = `
       [TAP]

  change direction 
`;

characters = [
  `
 l
lll
l l
`,
  `
llllll
ll l l
ll l l
llllll
 l  l
 l  l
  `,
  `
llllll
ll l l
ll l l
llllll
ll  ll
  `,
];

const G = {
	WIDTH: 150,
	HEIGHT: 100
};

options = {
  theme: 'dark',
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
  isPlayingBgm: true,
  seed: 9
};

/**
 * @type {{
 * from: Vector, to: Vector, vel: Vector,
 * ticks: number, prevLine: any, isActive: boolean
 * }[]}
 */

/** @type {{x: number, vx: number}} */
let player;
let multiplier;
let position;
let meter;

function update() {
  if (!ticks) {
    player = { x: 40, vx: 0.5 };
    multiplier = 1;
    position = 40;
    meter = 100;
  }
  position += rnd(-2,2);
  if(position < 0){
    position = 0
  }
  if(position > (G.WIDTH-15)){
    position = (G.WIDTH-15)
  }

  color("light_blue");
  rect(0, 90, (G.WIDTH), 10);
  color("yellow");
  rect(position, 80, 20, 10);
  color("green");
  rect((position + 9), 80, 2, 10);
  
  color("light_black");
  rect((G.WIDTH-15), 0, 20, 100);
  color("light_purple");
  rect((G.WIDTH-10), 0, 20, 100);
  color("red");
  rect((G.WIDTH-10),(meter), 20, 100)
  
  if (
    input.isJustPressed ||
    (player.x < 0 && player.vx < 0) ||
    (player.x > (G.WIDTH-20) && player.vx > 0)
  ) {
    //play("laser");
    player.vx *= -1;
  }
  player.x += player.vx * sqrt(difficulty);
  color("black");

  ////YELLOW
  if (
    char(addWithCharCode("b", floor(ticks / 10) % 2), player.x, 87, {
      mirror: { x: player.vx > 0 ? 1 : -1 },
    }).isColliding.rect.yellow
  ) {
    addScore(0.5);
    meter += 0.1;
  ////GREEN 
  }
  if (
    char(addWithCharCode("b", floor(ticks / 10) % 2), player.x, 87, {
      mirror: { x: player.vx > 0 ? 1 : -1 },
    }).isColliding.rect.green
  ) {
    addScore(0.5);
    
  }
  ///NOT YELLOW
  if (
    !char(addWithCharCode("b", floor(ticks / 10) % 2), player.x, 87, {
      mirror: { x: player.vx > 0 ? 1 : -1 },
    }).isColliding.rect.yellow
  ) {
    meter -= 0.25;
    
  }

  if(meter < 0){
    end("GAME OVER");
  }
  if(meter > 100){
    meter = 100;
  }


}

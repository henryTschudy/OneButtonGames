title = "HI-FLY";

description = ` [TAP] Flap
[MOUSE] Direction
 [Hold] TBA
`;

characters = [
  `
llll
lblbb
lllbb
llll
b b
`,
];

const G = {
  WIDTH: 100,
  HEIGHT: 150,
  ROCK_SPEED_MIN: 0.3,
  ROCK_SPEED_MAX: 1.0
}

options = {
  isPlayingBgm: true,
  isReplayEnabled: true,
  seed: 4,
};

/**
 * @type {{
 * pos:Vector, vel:Vector, up: number, down: number
 * nextUp: number, nextDown: number
 * }}
 */
let ship;

/**
 * @typedef {{
 * pos: Vector,
 * speed: number
 * }} Rock
 */

/**
 * @type { Rock [] }
 */
let rocks;

/** @type {{pos:Vector, width: number}[]} */
let decks;


function update() {
  if (!ticks) {
    ship = {
      pos: vec(50, 50),
      vel: vec(0.2),
      up: -2,
      down: 2,
      nextUp: -3,
      nextDown: 3,
    };
  
    rocks = times(10, () => {
      const posX = rnd(0, G.WIDTH);
      const posY = rnd(0, G.HEIGHT);
      return {
          pos: vec(posX, posY),
          speed: rnd(G.ROCK_SPEED_MIN, G.ROCK_SPEED_MAX)}
  });
}

  //Rocks updates
  rocks.forEach((r) => {
    r.pos.y += r.speed;
    if (r.pos.y > G.HEIGHT) r.pos.y = 0;
    color("light_black");
    box(r.pos, 5);
});

  //horizontal movement
  ship.pos.x = (input.pos.x);
  //keep player within bounds
	ship.pos.clamp(0, 100, 0, 150);

  //vertical movement
  ship.vel.y += input.isJustPressed ? ship.up * 2.3 : ship.down * 0.04;
  if (input.isJustPressed) {
    play("jump");
    if (ship.down > 0.5)
      ship.down = ship.down - 0.4;
  }
  if (input.isJustReleased) {
    //play("laser");
  }
  ship.pos.y += ship.vel.y;
  ship.down = ship.down + 0.006;
  
  let scrY = 0;
  if (ship.pos.y > 19) {
    scrY = (19 - ship.pos.y) * 0.2;
  } else if (ship.pos.y < 9) {
    scrY = (9 - ship.pos.y) * 0.2;
  }
  ship.pos.y += scrY;

//Update Score
addScore(0.01);

//Draw + Collisions
  color("black");
  if (char("a", ship.pos).isColliding.rect.light_black) {
    play("explosion");
    end();
  }

  if (ship.pos.y < 0 || ship.pos.y > 100) {
    play("explosion");
    end();
  }
  
}

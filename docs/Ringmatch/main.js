title = "RINGMATCH";

description = `
[Hold] to expand
Leave to retract
[Mouse] to move
`;

const GAME = {
  WIDTH: 150,
  HEIGHT: 150,
  BGRING_MAXSPEED: 1,
  BGRING_MINSPEED: 0.8,
  RING_MAX: 20,
  RING_MIN: 2,
  RING_SPEED: 0.8
};

characters = [];

options = {
  viewSize: {x: GAME.WIDTH, y: GAME.HEIGHT},
  isPlayingBgm: true,
  seed: 1000,
  theme: 'shapeDark'
};

let bgRings;
let ring;
let ringsize;

function update() {
  if (!ticks) {
    bgRings = times(20, () => {
			const posX = rnd(0, GAME.WIDTH);
			const posY = rnd(0, GAME.HEIGHT);
			return {
				pos: vec(posX, posY),
				speed: rnd(GAME.BGRING_MINSPEED, GAME.BGRING_MAXSPEED),
        size: rnd(3, 8)
			};
		});
    ring = {
      pos: vec(GAME.WIDTH * 0.5, GAME.HEIGHT * 0.5)
    };
    ringsize = GAME.RING_MAX/2;
  };
  if(input.isJustReleased || input.isJustPressed){
    play("select");
  }
  if (!input.isPressed && ringsize > GAME.RING_MIN){
    ringsize -= GAME.RING_SPEED;
  }
  if(input.isPressed && ringsize <= GAME.RING_MAX){
    ringsize += GAME.RING_SPEED;
  }

  bgRings.forEach((s) => {
		s.pos.y += s.speed;
		s.pos.wrap(0, GAME.WIDTH, 0, GAME.HEIGHT);
		color("light_black");
		arc(s.pos, s.size);
	});
  ring.pos = vec(input.pos.x, input.pos.y);
  ring.pos.clamp(0+(ringsize), GAME.WIDTH-(ringsize), 0+(ringsize), GAME.HEIGHT-(ringsize));
  color("yellow");
  arc(ring.pos, ringsize);
}

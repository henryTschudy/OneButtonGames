title = "Graveyard Shift";

description = `
Avoid the Ghosts

[hold] to shoot
[mouse] to aim 
and move
`;

characters = [
  `
 oooo
oooooo
o oo o
o oo o
 oooo
o    o
`,//a player
`
 cccc
c cc c
cc  cc
cc  cc
cccccc
c c c
`,//b ghost
`

g gg g
 g  g
 g  g
g gg g

`,//c beamHorz
`
 g  g
  gg
 g  g
 g  g
  gg
 g  g
`,//d beamVert
`
  g
  gg
gg  g
 g  gg
  gg
   g
`,//e beamDiagTL
`
   g
  gg
 g  gg
gg  g
  gg
  g
`,//f beamDiagTR
`
 LLLL
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLLL
`,//g gravestone
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

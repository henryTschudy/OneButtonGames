title = "Bubble Bubble";

description = `
pick up x to
avoid bubbles

[tap] to change
directions
[hold] to slow
`;

characters = [

  `
  pppp
   ppp
    pp
     p
    pp
    pp
`,//a Cat a1
`
pppp
pppppp
pppppp
pppppp
pppppp
  pppp
`,//b Cat a2
`


p
pp
pp
   L
`,//c Cat a3
`

  LL p
 LLL p
LLLL p
LLLL p
LLL pp
`,//d Cat b1
`
pp
pp LL
ppp  p
pppppp
pppppp
  pppp
`,//e Cat b2
`
pp LL
ppp LL
ppp LL
ppp LL
ppp LL
  pp L
`,//f Cat b3
`
LLL pp
 LL pp
    pp
     p
    p
     p
`,//g Cat c1
`
  pppp
pppppp
p pp p
pp
pppppp
  pppp
`,//h Cat c2
`
  pp L
pppp L
 ppp
ppp
pp p
  p
`,//i Cat c3
`

    LL
  LLLL
 LLLgg
LLgggg
Lggggg
`,//j Cauldron a1
`
 LLLLL
LLLLLL
Lggggg
gggggg
gggggg
gggggg
`,//k Cauldron a2
`
LLLLL
LLLLLL
gggggL
gggggg
gggggg
gggggg
`,//l Cauldron a3
`

LLL
LLLL
ggLLL
ggggLL
gggggL
`,//m Cauldron a4
`
 LLggg
  LLLL
 L  LL
LLLL
LLLLLL
LLLLLL
`,//n Cauldron b1
`
gggggg
Lggggg
LLLLLL
  LLLL
LL
LLLLLL
`,//o Cauldron b2
`
gggggg
gggggL
LLLLLL
LLLL
    LL
LLLLLL
`,//p Cauldron b3
`
gggLL
LLLL
L   L
 LLLLL
LLLLLL
LLLLLL
`,//q Cauldron b4
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL
 LLLLL
 LLLLL
`,//r Cauldron c1
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLLL
`,//s Cauldron c2+3
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLL
LLLLL
`,//t Cauldron c4
`
  LLLL
  LLLL
    LL
 LL
LLL
LL
`,//u Cauldron d1
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL

     L
`,//v Cauldron d2
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL

L
`,//w Cauldron d3
`
LLLL
LLLL
LL
   LL
   LLL
    LL
`,//x Cauldron d4
`
     o
    oo
   oo
  oo
 oo
oo
`,//y Spoon
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
  * pos: 0
  * ring: 0
  * vel: 0
  * jump: 100
  * }} Bubble
  */
  
  /**
  * @type  { Bubble [] }
  */

    /**
* @typedef {{
  * pos: 0
  * ring: 0
  * vel: 0
  * }} Pickup
  */
  
  /**
  * @type  { Pickup [] }
  */

  let bubbles;
  let pickups;
  let player;

function update() {
  if (!ticks) {
    player = {
      pos:0,
      ring: 0,
      vel: 0,
      jump: 0,
    }
  }

  color("black");
  //cat
  char("a", S.WIDTH/2-7, S.HEIGHT/2-19);
  char("b", S.WIDTH/2-1, S.HEIGHT/2-19);
  char("c", S.WIDTH/2+4, S.HEIGHT/2-19);
  char("d", S.WIDTH/2-7, S.HEIGHT/2-13);
  char("e", S.WIDTH/2-1, S.HEIGHT/2-13);
  char("f", S.WIDTH/2+5, S.HEIGHT/2-13);
  char("g", S.WIDTH/2-7, S.HEIGHT/2-7);
  char("h", S.WIDTH/2-1, S.HEIGHT/2-7);
  char("i", S.WIDTH/2+5, S.HEIGHT/2-7);
  //cauldron
  char("j", S.WIDTH/2-9, S.HEIGHT/2);
  char("k", S.WIDTH/2-3, S.HEIGHT/2);
  char("l", S.WIDTH/2+3, S.HEIGHT/2);
  char("m", S.WIDTH/2+9, S.HEIGHT/2);
  char("n", S.WIDTH/2-9, S.HEIGHT/2+6);
  char("o", S.WIDTH/2-3, S.HEIGHT/2+6);
  char("p", S.WIDTH/2+3, S.HEIGHT/2+6);
  char("q", S.WIDTH/2+9, S.HEIGHT/2+6);
  char("r", S.WIDTH/2-9, S.HEIGHT/2+12);
  char("s", S.WIDTH/2-3, S.HEIGHT/2+12);
  char("s", S.WIDTH/2+3, S.HEIGHT/2+12);
  char("t", S.WIDTH/2+9, S.HEIGHT/2+12);
  char("u", S.WIDTH/2-9, S.HEIGHT/2+18);
  char("v", S.WIDTH/2-3, S.HEIGHT/2+18);
  char("w", S.WIDTH/2+3, S.HEIGHT/2+18);
  char("x", S.WIDTH/2+9, S.HEIGHT/2+18);



}

title = "Bubble Bubble";

description = `
pick up fire &
avoid bubbles

get to the cauldron

You have 3 lives

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
 LLLGG
LLGGGG
LGGGGG
`,//j Cauldron a1
`
 LLLLL
LLLLLL
LGGGGG
GGGGGG
GGGGGG
GGGGGG
`,//k Cauldron a2
`
LLLLL
LLLLLL
GGGGGL
GGGGGG
GGGGGG
GGGGGG
`,//l Cauldron a3
`

LLL
LLLL
GGLLL
GGGGLL
GGGGGL
`,//m Cauldron a4
`
 LLGGG
  LLLL
 L  LL
LLLL
LLLLLL
LLLLLL
`,//n Cauldron b1
`
GGGGGG
LGGGGG
LLLLLL
  LLLL
LL
LLLLLL
`,//o Cauldron b2
`
GGGGGG
GGGGGL
LLLLLL
LLLL
    LL
LLLLLL
`,//p Cauldron b3
`
GGGLL
LLLL
L   L
 LLLLL
LLLLLL
LLLLLL
`,//q Cauldron b4
`
  Y
  Yr
Y  r Y
rYryrr
rryyrY
 Yrrr
`,//r player fire
`
 GGGG
GggggG
G g gG
Gggg G
Gg g G
 GGGG
`,//s Bubble obstacle
`
 ryr
  rry
  yrrr
  yyry
 yy  r
yy
`,//t ingredients (mushroom)
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
`
 LLLL
LggggL
 LLLL
LLLLLL
LLLLLL
 LLLL
`,//z +1 life
`
 LLLrr
LLLrr
LLrrL
LrrL L
rrL  L
rLL L
`,//unused -1 life
`
 R RR
RR RRR
RRyy
  yyRR
RRR RR
 RR R
`,//unused ingredients (flower)
`
   YY
  yrYY
 yyyrY
 yry
ry
y
`,//unused ingredients (pizza)

];

const S = {
	WIDTH: 225,
	HEIGHT: 225,
  RING_RADIUS_1: 40,
  RING_RADIUS_2: 60,
  RING_RADIUS_3: 80,
  RING_RADIUS_4: 100
};

options = {
  theme: 'dark',
  isPlayingBgm: true,
  viewSize: {x: S.WIDTH, y: S.HEIGHT}
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
  let counter;
  let bob;
  let slow;

function update() {
  if (!ticks) {
    player = {
      pos:3.14,
      ring: 4,
      vel: 0.02,
      clkwise: 1,
    }
    counter = 0;
    bob = 0;
    slow = 1;
  }

  color("light_yellow");
  arc(S.WIDTH/2,S.HEIGHT/2,S.RING_RADIUS_1);
  arc(S.WIDTH/2,S.HEIGHT/2,S.RING_RADIUS_2);
  arc(S.WIDTH/2,S.HEIGHT/2,S.RING_RADIUS_3);
  arc(S.WIDTH/2,S.HEIGHT/2,S.RING_RADIUS_4);

  //cat + animation
  counter++;

  /*
  if (combo>0){combo--;}
  if(combo==0&&multiplier>1){
    multiplier--;
    combo = 32-2*multiplier;
  }

  const points = 10*multiplier;
        scoreShoot +=points;
        multiplier++;
        combo +=32-2*multiplier;
  */

  if(counter%30 == 0){
    if (bob==1){bob=0;}
    else{bob=1}
  }

  color("black");
  //cat
  char("a", S.WIDTH/2-7, S.HEIGHT/2-19-bob);
  char("b", S.WIDTH/2-1, S.HEIGHT/2-19-bob);
  char("c", S.WIDTH/2+4, S.HEIGHT/2-19-bob);
  char("d", S.WIDTH/2-7, S.HEIGHT/2-13-bob);
  char("e", S.WIDTH/2-1, S.HEIGHT/2-13-bob);
  char("f", S.WIDTH/2+5, S.HEIGHT/2-13-bob);
  char("g", S.WIDTH/2-7, S.HEIGHT/2-7-bob);
  char("h", S.WIDTH/2-1, S.HEIGHT/2-7-bob);
  char("i", S.WIDTH/2+5, S.HEIGHT/2-7-bob);
  //cauldron
  char("j", S.WIDTH/2-9, S.HEIGHT/2);
  char("k", S.WIDTH/2-3, S.HEIGHT/2);
  char("l", S.WIDTH/2+3, S.HEIGHT/2);
  char("m", S.WIDTH/2+9, S.HEIGHT/2);
  char("n", S.WIDTH/2-9, S.HEIGHT/2+6);
  char("o", S.WIDTH/2-3, S.HEIGHT/2+6);
  char("p", S.WIDTH/2+3, S.HEIGHT/2+6);
  char("q", S.WIDTH/2+9, S.HEIGHT/2+6);
  //char("r", S.WIDTH/2-9, S.HEIGHT/2+12);
  //char("s", S.WIDTH/2-3, S.HEIGHT/2+12);
  //char("s", S.WIDTH/2+3, S.HEIGHT/2+12);
  //char("t", S.WIDTH/2+9, S.HEIGHT/2+12);
  color("light_black")
  rect(S.WIDTH/2-12, S.HEIGHT/2+9, 24,6)
  color("black")
  char("u", S.WIDTH/2-9, S.HEIGHT/2+18);
  char("v", S.WIDTH/2-3, S.HEIGHT/2+18);
  char("w", S.WIDTH/2+3, S.HEIGHT/2+18);
  char("x", S.WIDTH/2+9, S.HEIGHT/2+18);
  //test

  /*char("r",50,50);
  char("s",56,50);
  char("t",62,50);
  char("y",50,56);
  char("z",56,56);*/

  if(counter%120==0){
    if(player.ring==-1){player.ring = 4}
    else if(player.ring<=1){
      player.ring=-1;
      play("coin")
    }
    else{player.ring--}
  }//test

  if(input.isPressed){slow=0.5}
  if(input.isJustReleased){
    slow=1;
    player.clkwise*=(-1)
  }

  let r = 20*(player.ring+1);
  let x = r*sin(player.pos%6.28);
  let y = r*cos(player.pos%6.28);
  if(player.ring<1){
    x = 0;
    y = 0;
    player.pos=3.14;
  }
    char("r",x+S.WIDTH/2,y+S.HEIGHT/2);
  player.vel = 0.05*player.clkwise*slow/player.ring;
  player.pos+=player.vel;

}

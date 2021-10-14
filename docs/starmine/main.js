// The title of the game to be displayed on the title screen
title = "STARMINE";

// The description, which is also displayed on the title screen
description = `
[Tap]  Shoot for mining
[Hold] defend
`;

// The array of custom sprites
characters = [
    `
    r
   r
   ll
  llll
  llll
   ll
`,
`
 llll
ll lll
ll lll
ll lll
ll lll
 llll
`
];

// Game design variable container
const G = {
	WIDTH: 200,
	HEIGHT: 200,
};

let x = 0;
// Game runtime options
// Refer to the official documentation for all available options
options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT},
    isCapturing: true,
    isCapturingGameCanvasOnly: true,
    captureCanvasScale: 2,
    isPlayingBgm: true,
    isReplayEnabled: true,
    seed: 3,
    theme: "pixel"
};
let player;
let coins;
let grabber;
let nextObjDist;
let bomb;
let bombs;
let hook;
let hooks;
let stars;
let defence;
let endgame;
let endpos;
let endticks;
// The game loop function
function update() {
    if (!ticks) {
        endgame = false;
        grabber = { angle: 0, length: 10, pos:vec(100, 100)};
        endticks = 0;
        x = 0;
        bombs = [];
        coins = [];
        hooks = [];
        defence = {r: 0, ticks: 0 };
        stars = times(40, () => {
            const posX = rnd(0, G.WIDTH);
            const posY = rnd(0, G.HEIGHT);
            return {
                pos: vec(posX, posY),
            };
        });
    }
    stars.forEach((e) => {
        e.pos = vec(e.pos).addWithAngle(vec(e.pos).angleTo(grabber.pos) + 3.14/2, 0.2);
        color("light_black");
        box(e.pos, 1);
    })
    color("black");
    grabber.angle += 0.1;
    if (bombs.length === 0) {
        for (let i = 0; i < difficulty * 4 + difficulty % 4; i++) {
            let posX;
            let posY
            if(rnd(0, 1) > 0.5){
                posX = rnd(0, 1) > 0.5 ? rnd(0, 10) : rnd(G.WIDTH, G.WIDTH - 10);
                posY = rnd(0, G.HEIGHT);
            }else{
                posX = rnd(0, G.WIDTH);
                posY = rnd(0, 1) > 0.5 ? rnd(0, 10) : rnd(G.HEIGHT, G.HEIGHT - 10);
            }
            bombs.push({
                pos: vec(posX, posY),
                attracted: false,
                exploded : false
            });
        }
    }
        if (input.isJustPressed) {
            hooks.push({
                pos: vec(grabber.pos).addWithAngle(grabber.angle, grabber.length),
                angle: grabber.angle
            });
        
        play("select");
      }
      if (input.isPressed && !input.isJustPressed) {
        defence.ticks++;
        if(defence.r >= 0){
            defence.r = sin(defence.ticks * 0.10) * 20;
        }
        arc(grabber.pos, defence.r);
      }else{
        defence.ticks = 0;
        defence.r = 0;
      }
    if (coins.length < 15) {
            let posX;
            let posY
            posX = rnd(0, G.WIDTH);
            posY = rnd(0, G.HEIGHT);
            coins.push({
                pos: vec(posX, posY),
                attracted: false
            });
    }
    
    line(grabber.pos, vec(grabber.pos).addWithAngle(grabber.angle, grabber.length), 2);
    hooks.forEach((e) => {
        e.pos = vec(e.pos).addWithAngle(e.angle, 3);
        color("black");
        box(e.pos, 6);
    });
    bombs.forEach((e) => {
        if(e.attracted){
            e.pos = vec(e.pos).addWithAngle(vec(e.pos).angleTo(grabber.pos) + 3.14, 0.5);
        }else{
            e.pos = vec(e.pos).addWithAngle(vec(e.pos).angleTo(grabber.pos) - 3.14/2, 0.5 * difficulty);
            e.pos = vec(e.pos).addWithAngle(vec(e.pos).angleTo(grabber.pos), 0.2);
        }
        
        if(e.exploded){
            color("transparent");
        }else{
            color("black");
        }
        if(char("a", e.pos).isColliding.rect.black){
            color("black");
            particle(e.pos, 3);
            e.attracted = true;
        }
        if(e.pos.isInRect(90, 90, 20, 20)){
            color("light_red");
            particle(e.pos, 3);
            endpos = e.pos;
            e.exploded = true;
            endgame = true;
        }
    });
    if(endgame){
        play("explosion");
        endticks++;
        let r = sin(endticks * 0.1) * 10;
        color("light_red");
        arc(endpos, r, 2);
        if(r < 0){
            end();
        }
    }
    remove(bombs, (e) => (!e.pos.isInRect(-10, -10, G.WIDTH + 20, G.HEIGHT + 20)));
    remove(coins, (e) => {
        let col = false;
        if(e.attracted){
            e.pos = vec(e.pos).addWithAngle(vec(e.pos).angleTo(grabber.pos), 0.5);  
        }else{
            e.pos = vec(e.pos).addWithAngle(vec(e.pos).angleTo(grabber.pos) + 3.14/2, 0.5 * difficulty);
        }
        color("yellow");
        if(char("b", e.pos).isColliding.rect.black){
            e.attracted = true;
            color("black");
            particle(e.pos, 20);
            play("powerUp");
        }
        if(e.pos.isInRect(95, 95, 10, 10)){
            addScore(10 * difficulty, e.pos);
            color("yellow");
            particle(e.pos, 9);
            play("coin");
            col = true;
        }
        return col;
    });
    remove(hooks, (e) => {
        color("black");
        const isColliding =  box(e.pos, 6).isColliding.char.a || box(e.pos, 6).isColliding.char.b;
        return (isColliding || !e.pos.isInRect(0, 0, G.WIDTH, G.HEIGHT));
    });

}
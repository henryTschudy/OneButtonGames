title = "Graveyard Shift";

description = `
Avoid the Ghosts

[hold] to shoot
[mouse] to aim 
and move
[release] to 
teleport
`;

characters = [
  `
 gggg
gggggg
g gg g
g gg g
 gggg
g    g
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
`
  gg
  gg
  gg
 gggg
g gg g
 gggg
`,//h Teleport
];

const G = {
	WIDTH: 100,
	HEIGHT: 100,
  PLAYER_FIRE_RATE: 10,
  PLAYER_GUN_OFFSET: 3,
  FBULLET_SPEED: 1.2,
  ENEMY_MIN_BASE_SPEED: 0.5,
  ENEMY_MAX_BASE_SPEED: 1.0,
  PLAYER_START_BULLET: 0,
  PLAYER_BULLET_GAIN: 3
};

options = {
  theme: 'pixel',
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
let fBullets;
let enemies;
let currentEnemySpeed = 0;
let waveCount = 0;
let teleport;

function update() {
  if (!ticks) {
    player = {
      pos:vec(G.WIDTH/2,G.HEIGHT/2),
      Shooting: false,
      Ammo: G.PLAYER_START_BULLET,
      firingCooldown: G.PLAYER_FIRE_RATE,
    }

    teleport = {
      pos:vec(G.WIDTH/2,G.HEIGHT/2),
    }

    fBullets = [];
    enemies = [];
  }

  // Initializing enemies
  if (enemies.length === 0) {
    currentEnemySpeed =
        rnd(G.ENEMY_MIN_BASE_SPEED, G.ENEMY_MAX_BASE_SPEED) * difficulty;
    let off = rndi(0, 17)
    player.Ammo += G.PLAYER_BULLET_GAIN;
    for (let i = 0; i < 17; i++) {
        // Kind of useless if statement
        if (i != off){
            // Spawn Logic
            // vector that contains two points
            //  randomly select two points
            var rand = rndi(0, 2)
            var randx = rndi(0, 2)
            var randy = rndi(0, 2)
            const posX1 = rndi(-10, G.WIDTH + 10)
            const posY1 = [rndi(-10, -5), rndi(G.HEIGHT + 5, G.HEIGHT + 10)]
            const posX2 = [rndi(-10, -5), rndi(G.WIDTH + 5, G.WIDTH + 10)]
            const posY2 = rndi(-10, G.HEIGHT + 10)
            const spawn = [vec(posX1, posY1[randy]), vec(posX2[randx], posY2)]
            const real_spawn = spawn[rand]
            const start = vec(real_spawn.x, real_spawn.y)
            enemies.push({ 
                pos: real_spawn,
                angle: real_spawn.angleTo(player.pos),
                start: start
             })
        }
    }
  }

    if (!input.isPressed){
      player.pos = vec(input.pos.x, input.pos.y);
      player.Shooting = false;
    }
    player.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);

    teleport.pos = vec(input.pos.x, input.pos.y);
    teleport.pos.clamp(0, G.WIDTH, 0, G.HEIGHT);

    if(input.isPressed){color("green")}
    else{color("transparent")}
    char("h",teleport.pos);

    // Cooling down for the next shot
    player.firingCooldown--;
    // Time to fire the next shot
    if (input.isPressed && player.Ammo > 0 && player.firingCooldown <= 0) {
        // Create the bullet
        fBullets.push({
            pos: vec(player.pos.x + 0.75, player.pos.y),
            angle: player.pos.angleTo(input.pos)
        });
        // Reset the firing cooldown
        player.firingCooldown = G.PLAYER_FIRE_RATE;
        player.Ammo -= 1;
        play("laser");
        player.Shooting = true;

        color("yellow");
        // Generate particles
        particle(
            player.pos.x + 0.75, // x coordinate
            player.pos.y, // y coordinate
            4, // The number of particles
            1, // The speed of the particles
            player.pos.angleTo(input.pos), // The emitting angle
            PI/4  // The emitting width
        );
    }

    //Draw player

    // Updating and drawing bullets
    fBullets.forEach((fb) => {
        // Move the bullets upwards
        fb.pos.x += G.FBULLET_SPEED * Math.cos(fb.angle);
        fb.pos.y += G.FBULLET_SPEED * Math.sin(fb.angle);
        
        // Drawing
        color("yellow");
        box(fb.pos, 2);
    });
    remove(enemies, (e) => {
        e.pos.x += currentEnemySpeed * Math.cos(e.angle);
        e.pos.y += currentEnemySpeed * Math.sin(e.angle);
        color("black");
        // Shorthand to check for collision against another specific type
        // Also draw the sprite
        const isCollidingWithFBullets = char("b", e.pos).isColliding.rect.yellow;

        // Check whether to make a small particle explosin at the position
        if (isCollidingWithFBullets) {
            color("yellow");
            particle(e.pos);
        }

        // Also another condition to remove the object
        var distX = Math.abs(e.start.x - e.pos.x)
        var distY = Math.abs(e.start.y - e.pos.y)
        console.log(e.pos.x)
        console.log(e.start.x)
        if (isCollidingWithFBullets || distX >= G.WIDTH + 90 || distY >= G.HEIGHT + 90){
            var rand = rndi(0, 2)
            var randx = rndi(0, 2)
            var randy = rndi(0, 2)
            const posX1 = rndi(-10, G.WIDTH + 10)
            const posY1 = [rndi(-10, -5), rndi(G.HEIGHT + 5, G.HEIGHT + 10)]
            const posX2 = [rndi(-10, -5), rndi(G.WIDTH + 5, G.WIDTH + 10)]
            const posY2 = rndi(-10, G.HEIGHT + 10)
            const spawn = [vec(posX1, posY1[randy]), vec(posX2[randx], posY2)]
            const real_spawn = spawn[rand]
            const start = vec(real_spawn.x, real_spawn.y)
            player.Ammo += G.PLAYER_BULLET_GAIN;
            score += 10;
            e.pos = real_spawn
            e.start = start
            e.angle = real_spawn.angleTo(player.pos)
        }
        return (isCollidingWithFBullets || distX > G.HEIGHT + 30 || distY > G.WIDTH + 30);
    });

  remove(fBullets, (fb) => {
    // Interaction from fBullets to enemies, after enemies have been drawn
    color("yellow");
    const isCollidingWithEnemies = box(fb.pos, 2).isColliding.char.b;
    return (isCollidingWithEnemies || fb.pos.y < 0);
  });

  text(player.Ammo.toString(), 3, 10);

 
  if(player.Shooting){color("yellow")}
  else {color("blue")}
  char("a", player.pos);

  color("transparent");

  const playerEnemyCollision = box(player.pos, 4).isColliding.char.b;
  if (playerEnemyCollision){
    play("jump");
      end();
  }

}
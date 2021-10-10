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
`,//a1(a)
`
pppp
pppppp
pppppp
pppppp
pppppp
  pppp
`,//a2(b)
`


p
pp
pp
   L
`,//a3(c)
`

  LL p
 LLL p
LLLL p
LLLL p
LLL pp
`,//b1(d)
`
pp
pp LL
ppp  p
pppppp
pppppp
  pppp
`,//b2(e)
`
pp LL
ppp LL
ppp LL
ppp LL
ppp LL
  pp L
`,//b3(f)
`
LLL pp
 LL pp
    pp
     p
    p
     p
`,//c1(g)
`
  pppp
pppppp
p pp p
pp
pppppp
  pppp
`,//c2(h)
`
  pp L
pppp L
 ppp
ppp
pp p
  p
`,//c3(i)
`

    LL
  LLLL
 LLLgg
LLgggg
Lggggg
`,//a1(j)
`
 LLLLL
LLLLLL
Lggggg
gggggg
gggggg
gggggg
`,//a2(k)
`
LLLLL
LLLLLL
gggggL
gggggg
gggggg
gggggg
`,//a3(l)
`

LLL
LLLL
ggLLL
ggggLL
gggggL
`,//a4(m)
`
 LLggg
  LLLL
 L  LL
LLLL
LLLLLL
LLLLLL
`,//b1(n)
`
gggggg
Lggggg
LLLLLL
  LLLL
LL
LLLLLL
`,//b2(o)
`
gggggg
gggggL
LLLLLL
LLLL
    LL
LLLLLL
`,//b3(p)
`
gggLL
LLLL
L   L
 LLLLL
LLLLLL
LLLLLL
`,//b4(q)
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL
 LLLLL
 LLLLL
`,//c1(r)
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLLL
`,//c2+3(s)
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL
LLLLL
LLLLL
`,//c4(t)
`
  LLLL
  LLLL
    LL
 LL
LLL
LL
`,//d1(u)
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL

     L
`,//d2(v)
`
LLLLLL
LLLLLL
LLLLLL
LLLLLL

L
`,//d3(w)
`
LLLL
LLLL
LL
   LL
   LLL
    LL
`,//d4(x)
`
     o
    oo
   oo
  oo
 oo
oo
`,//spat(y)


];

options = {
  theme: 'dark',
  isPlayingBgm: true
  };

function update() {
  if (!ticks) {
  }
}

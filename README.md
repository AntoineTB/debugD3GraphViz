# Debug project for D3 + D3-Graphviz + TypeScript + React

## Why
I had trouble using d3-graphviz (https://github.com/magjac/d3-graphviz) and this project served as a debug tool to figure out what's wrong.

## Specific problems

### d3.graphviz is not a function
Trigger : `d3.select(...).graphviz().renderDot(...)`

Error : `TypeError : d3.graphviz is not a function`

Solution : For me, this meant that d3-graphviz wasn't actually bundled. 
For it to be bundled, atleast with this project's webpack&friend settings, it must explicitly used in code, an import won't suffice.
Solution to this is demonstrated in `src/index.tsx`

### Cannot call a class as a function
Trigger : `d3Graphviz.graphviz(...).renderDot(...)`

Error : `Uncaught Cannot call a class as a function (worker.onmessage @ d3-graphviz.js:1178)`

Solution : I had this error because my `viz.js` wasn't of the correct version.
I was at `2.0.0` while d3-graphviz was, at time of writing, using `viz.js 1.8.2`.

## Building this project
1. `git clone https://github.com/antoinetb/debugD3GraphViz && cd debugD3GraphViz`
2. `npm install`
3. `npm run dev`
4. navigate to dev server (normally `http://localhost:8080` )
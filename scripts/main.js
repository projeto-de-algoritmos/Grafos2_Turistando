import { createAdjacencyList } from "./matriz.js";
import { Dijkstras } from "./djikistra.js";
import {
  addDradSToMainNodes,
  getCoords,
  addHeuristic,
  clearGrid,
  clearWalls,
  clearPath,
  createGrid,
  colorInPink,
} from './grid.js'

const section = document.querySelector('.visualizador');
const constructorBtn = document.querySelector('button.construir');

let startNode = document.querySelector('.node.start');
let finishNode = document.querySelector('.node.finish');

let algo = '';

function addStarAndEndNodes() {
    const start = document.querySelector(`.node[row="8"][column="12"]`).classList.add('start');
    const finish = document.querySelector(`.node[row="9"][column="34"]`).classList.add('finish');
    const blocked1 = document.querySelector(`.node[row="10"][column="16"]`).classList.add('blocked');
    const blocked2 = document.querySelector(`.node[row="9"][column="15"]`).classList.add('blocked');
    const blocked3 = document.querySelector(`.node[row="8"][column="14"]`).classList.add('blocked');
    const blocked4 = document.querySelector(`.node[row="10"][column="17"]`).classList.add('blocked');
    const blocked5 = document.querySelector(`.node[row="10"][column="18"]`).classList.add('blocked');
    const blocked6 = document.querySelector(`.node[row="9"][column="19"]`).classList.add('blocked');
    const blocked7 = document.querySelector(`.node[row="8"][column="20"]`).classList.add('blocked');
    const blocked8 = document.querySelector(`.node[row="9"][column="17"]`).classList.add('blocked');
    const blocked9 = document.querySelector(`.node[row="8"][column="17"]`).classList.add('blocked');
    const blocked10 = document.querySelector(`.node[row="10"][column="21"]`).classList.add('blocked');
    const blocked11 = document.querySelector(`.node[row="9"][column="22"]`).classList.add('blocked');
    const blocked12 = document.querySelector(`.node[row="8"][column="23"]`).classList.add('blocked');
    const blocked13 = document.querySelector(`.node[row="9"][column="24"]`).classList.add('blocked');
    const blocked14 = document.querySelector(`.node[row="10"][column="25"]`).classList.add('blocked');
    const blocked15 = document.querySelector(`.node[row="8"][column="26"]`).classList.add('blocked');
    const blocked16 = document.querySelector(`.node[row="9"][column="27"]`).classList.add('blocked');
    const blocked17 = document.querySelector(`.node[row="10"][column="28"]`).classList.add('blocked');
    const blocked18 = document.querySelector(`.node[row="9"][column="29"]`).classList.add('blocked');
    const blocked19 = document.querySelector(`.node[row="8"][column="30"]`).classList.add('blocked');
    const blocked20 = document.querySelector(`.node[row="8"][column="32"]`).classList.add('blocked');
    const blocked21 = document.querySelector(`.node[row="9"][column="32"]`).classList.add('blocked');
    const blocked22 = document.querySelector(`.node[row="10"][column="32"]`).classList.add('blocked');
    const blocked23 = document.querySelector(`.node[row="10"][column="33"]`).classList.add('blocked');
    const blocked24 = document.querySelector(`.node[row="10"][column="34"]`).classList.add('blocked');
    const blocked25 = document.querySelector(`.node[row="8"][column="33"]`).classList.add('blocked');
    const blocked26 = document.querySelector(`.node[row="8"][column="34"]`).classList.add('blocked');
    const blocked27 = document.querySelector(`.node[row="9"][column="33"]`).classList.add('blocked');
  }

createGrid(section, startNode, finishNode);
addStarAndEndNodes();
addDradSToMainNodes(startNode, finishNode);

let graph = createAdjacencyList(document.querySelectorAll('.node'));
startNode = document.querySelector('.node.start');
finishNode = document.querySelector('.node.finish');

(function main() {
  const restartBtn = document.querySelector('button.reiniciar');
  const clearWallsBtn = document.querySelector('button.clear-walls');
  const clearPathBtn = document.querySelector('button.clear-path');
  const nodeList = document.querySelectorAll('.node');

  constructorBtn.addEventListener('click', (e) => {
    addHeuristic(nodeList, finishNode);
    algo = 'djikistra';
  });

  clearWallsBtn.addEventListener('click', () => {
    clearWalls(section);
  })

  clearPathBtn.addEventListener('click', () => {
    clearPath(section);
  })

  constructorBtn.addEventListener('click', async () => {
    startNode = document.querySelector('.node.start');
    finishNode = document.querySelector('.node.finish');
    let startCoords = getCoords(startNode);
    let result = false;
    result = await Dijkstras(graph, startCoords, startCoords);
    if (!result) colorInPink(section);
  })

  restartBtn.addEventListener('click', () => {
    clearGrid(section);
  })
})()
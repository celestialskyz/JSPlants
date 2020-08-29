// import "./styles/index.scss";
// import Plant from "./plant";
import "./styles/index.scss";
import Game from "./game"
import gameCanvas from "./gameCanvas";
window.addEventListener("DOMContentLoaded", () => {
    const canvaselt = document.getElementById('game-canvas');
    canvaselt.width = 500;
    canvaselt.height = 500;
    
    const ctx = canvaselt.getContext("2d");

    const game = new Game();
    new gameCanvas(game, ctx).start();
//500* Math.random()
// const plant1 = new Plant({ pos:[Math.random()* (400 - 5) + 5, 500],
//     color:'#008000',
//     game: "hi",
//     width: 50,
//     height:-20,
//     sun:1,
//     water:1,
//     bloomColor: "#f5428d", 
//     ctx :ctx
// }
// )

debugger


})
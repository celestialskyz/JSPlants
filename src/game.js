const Plant = require("./plant")
// const Rain = require("./rain")
function Game(){
    debugger
    this.plants = [];
    this.canvas_width = 500;
    this.canvas_height = 500;
    // this.rain=[];

    // this.makeItRain();
}

Game.prototype.add = function add(object){
    if (object instanceof Plant){
        this.plants.push(object)
    }
    // if (object instanceof Rain){
    //     this.rain.push(object)
    // }
    else {
        throw new Error("unknown type of object");
      }
}

Game.prototype.addPlant = function addPlant(ctx){
    debugger;
    newcolor = this.randCol();    
    const planty = new Plant({pos:[Math.random()* (400 - 5) + 5, 500],
        color:'#008000',
        game: this,
        width: 50,
        height:-20,
        bloomed:false,
        sun:1,
        water:1,
        bloomColor: newcolor, 
        ctx:ctx
    })
    debugger;
    this.add(planty)
    planty.plantit()
    return planty
}
Game.prototype.randCol = function randCol() {
    const hexDigits = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 3; i++) {
      color += hexDigits[Math.floor((Math.random() * 16))];
    }
  
    return color;
  }


// Game.prototype.makeItRain = function makeItRain(){
//     for (let i =0; i<1000; i++){
//         this.add(new Rain({pos:[Math.random(), Math.random()] game:this}));
//     }
// }

// Game.prototype.allObjects = function allObjects(){
//     return [].concat(this.rain)
// }

// this.canvas.width = 500;
//     this.canvas.height = 500;

Game.prototype.sunny = function sunny(){
    debugger
    this.plants.forEach(function(object){
        debugger
        object.sunit();
        if (object.sun/4 > 5 && object.water/4 > 3){
            object.grow()
        }
    })
}

Game.prototype.watery = function watery(){
    this.plants.forEach(function(object){
        object.waterit();
    })
}


Game.prototype.draw = function draw(){
    this.context.clearRect(0, 0,this.canvas_width , this.canvas.height);
    this.context.fillStyle = "#33EFFF";
    this.context.fillRect(0, 0, this.canvas_width , this.canvas.height);
    
    this.allObjects().forEach(function(object) {
        object.draw(ctx);
      });
}


// Game.stopRain = function stopRain(){
//     this.rain.forEach(object)(function (object){
//         object.remove()
//     })
// }

module.exports=Game
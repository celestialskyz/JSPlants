const Plant = require("./plant")
const Weeds = require("./weeds")
// const Rain = require("./rain")
function Game(ctx){
    // debugger
    this.plants = [];
    this.canvas_width = 500;
    this.canvas_height = 500;
    this.weeds = [];
    this.ctx = ctx
    // this.rain=[];
    // this.makeItRain();
}

Game.prototype.add = function add(object){
    debugger
    if (object instanceof Plant){
        this.plants.push(object)
    }
    else if (object instanceof Weeds){
        this.weeds.push(object)
    }
    // if (object instanceof Rain){
    //     this.rain.push(object)
    // }
    else {
        throw new Error("unknown type of object");
    }
}

Game.prototype.addWeeds = function addWeeds(){
    debugger
    
    const weedy = new Weeds({
        pos: [Math.random() *(400 - 5) + 5, 500],
        ctx: this.ctx
    });
    this.add(weedy);
    this.updatePls();
    return weedy;
}

Game.prototype.checkWeeds = function checkWeeds(){
    debugger
    if (this.weeds.length > 3){
        this.checkTime()
    }
}

Game.prototype.checkTime = function checkTime(){
    debugger
    setInterval(this.addWeeds(this.ctx), 10000);
}

Game.prototype.checkPlants = function checkPlants(){
    debugger
    if (this.plants.length > 3){
        this.addWeeds(this.ctx)
    }
}

Game.prototype.addPlant = function addPlant(ctx){
    // debugger;
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
    this.add(planty)
    planty.plantit()
    this.checkPlants()
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

Game.prototype.allObjects = function allObjects(){
    return [].concat(this.plants, this.weeds)
}

// this.canvas.width = 500;
//     this.canvas.height = 500;

Game.prototype.sunny = function sunny(){
    
    this.plants.forEach(function(object){
        // debugger
        object.sunit(1);
        // if (object.sun/4 > 5 && object.water/4 > 3){
        //     object.grow()
        //     object.updatePls()
        // }
    })
}

Game.prototype.watery = function watery(){
    this.plants.forEach(function(object){
        object.waterit(2);
    })
}
// Game.prototype.withering = function withering(){
//     this.plants.forEach(function(object){
//         object.wither(2);
//     })
// }

Game.prototype.updatePls = function updatePls(){
    debugger
    // this.ctx.clearRect(0, 0,this.canvas_width , this.canvas_height);
    // this.ctx.fillStyle = "#33EFFF";
    // this.ctx.fillRect(0, 0, this.canvas_width , this.canvas_height);
    that = this
    this.allObjects().forEach(function(object) {
        debugger
        object.updatePls(that.ctx);
      });
}


// Game.stopRain = function stopRain(){
//     this.rain.forEach(object)(function (object){
//         object.remove()
//     })
// }

module.exports=Game
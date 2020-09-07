function GameCanvas(game, ctx){
    this.ctx = ctx
    this.game = game
}

GameCanvas.prototype.start = function start(){
    debugger
    this.bindbuttons();
    debugger
    this.game.addPlant(this.ctx)
    // this.plantnew = this.plantnew.bind(this)
    // this.lastTime = 0;
    // requestAnimationFrame(this.animate.bind(this));
}

GameCanvas.prototype.bindbuttons = function bindbuttons(){
    // debugger
    document.getElementById("plant").addEventListener("click", this.plantnew.bind(this));
    document.getElementById("water").addEventListener("click",  this.rained.bind(this));
    document.getElementById("sunshine").addEventListener("click",  this.sunned.bind(this));
}

GameCanvas.prototype.plantnew = function plantnew(){
    // debugger
    this.game.addPlant(this.ctx)
}

GameCanvas.prototype.sunned= function sunned(){
    // debugger
    this.game.sunny()
}
GameCanvas.prototype.rained= function rained(){
    
    this.game.watery()   
}

// GameCanvas.prototype.addWeeds = function addWeeds(){
//     debugger
//     this.game.addWeeds(this.ctx)
// }

// GameCanvas.prototype.animate = function animate(time){
//     const timechange = time- this.lastTime;
//     this.game.moveObjects(timechange)
//     this.game.draw(this.ctx)
//     this.lastTime = time;
//     requestAnimationFrame(this.animate.bind(this));
// }



// document.getElementById("plant").addEventListener("click", displayDate);

module.exports=GameCanvas;
// document.addEventListener("DOMContentLoaded", function(){

// var canvas = document.getElementById('game-canvas');
// });

function Plant(options){
     this.pos = options.pos
     this.color = options.color
     this.game = options.game
     this.width = options.width
     this.height = options.height
     this.sun = options.sun
     this.water = options.water
     this.bloomed = options.bloomed
     this.bloomColor = options.bloomColor
     this.radius = Math.abs(options.height/.8)
    this.ctx = options.ctx
}

Plant.prototype.plantit = function plantit(){
    debugger
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)
}

Plant.prototype.grow = function grow(){
    if (this.sun <= 15 && this.water >= 2){
    this.color = '#008000'
    this.height -=7
        if (this.height < -75){
            this.bloom()
        }
    }
        if (this.sun > 15 && this.water < 2){
            debugger
            this.wither()
        }
    this.updatePls()

}

Plant.prototype.wither = function wither(){
    this.height +=7
    this.color = "#CD853F"
    this.updatePls()
}

Plant.prototype.updatePls = function updatePls(){
    this.ctx.clearRect(0, 0, 500, 500);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)
   
    if (this.bloomed){
        this.createflower()
    }
   
}

Plant.prototype.remove = function remove(){
    this.game.remove(this);
}

Plant.prototype.sunit = function sunit(amount){
    debugger
    this.sun +=amount;
    this.water -= 2;
    if (this.sun > 3 && this.water/2 > 3){
        this.grow()
    }

}
Plant.prototype.waterit = function waterit(amount){
    debugger
    this.water +=amount;
    debugger
    if (this.sun > 3 && this.water/2 > 3){
        this.grow()
    }
}
Plant.prototype.bloom = function bloom(){
    debugger
    this.bloomed = true;
}

Plant.prototype.createflower = function createflower(){
    this.ctx.fillStyle = this.bloomColor;
    this.ctx.beginPath();
    let x = 10
    while (x < 60){
        this.ctx.arc(
        this.pos[0] + x, this.pos[1]+this.height+(10), this.radius, 0, 2 * Math.PI, true
        );
        this.ctx.fill(); 
        x+=10
    }

}

module.exports = Plant;
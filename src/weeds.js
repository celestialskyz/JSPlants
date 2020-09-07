function Weeds(options){
    this.height = -16
    this.width = 13
    this.pos = options.pos
    this.color = "#FF0000"
    this.ctx = options.ctx
}

Weeds.prototype.updatePls = function updatePls(ctx){
    debugger
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)
}

module.exports = Weeds;
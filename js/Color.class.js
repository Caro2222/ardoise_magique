"use strict";
function Color() {



    this.canvas=document.getElementById("ColorPicker");
    this.context = this.canvas.getContext("2d");


    this.draw();


}

// Color.prototype.setColor = function (color) {
//     this.color = color;
//     return this;
// }

// Color.prototype.setPosition =function (positionX,positionY) {
//     this.positionX  =positionX;
//     this.positionY =positionY;
// }



Color.prototype.draw = function() {

    var gradient = this.context.createLinearGradient(0,250,250,250);
    gradient.addColorStop(0,"pink")
   gradient.addColorStop(0.2,"blue");
    gradient.addColorStop(0.3,"purple");
    gradient.addColorStop(0.4,"green");
     gradient.addColorStop(0.6,"red");
    gradient.addColorStop(1,"yellow");

    this.context.fillStyle =gradient;


    this.context.fillRect(this.positionX,this.positionY,50,50);
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

     gradient= this.context.createLinearGradient(250,0,250,250);
    gradient.addColorStop(0,"rgba(255,255,255,1");
    gradient.addColorStop(0.5,"rgba(255,255,255,0");

    gradient.addColorStop(0.5,"rgba(0,0,0,0");
    gradient.addColorStop(1,"rgba(0,0,0,1");

    this.context.fillStyle =gradient;
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height);


    Color.prototype.applytoContext=function(ctx){
       ctx.strokeStyle=this.color;
    };

    Color.prototype.onColorChange =function(e){
        e.event.trigger('magic-slate:colorChange')
    }


    // //this.context.fillRect(this.positionX,this.positionY,50,50);
    // this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

    //this.context.stroke();





};

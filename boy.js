class Boy {
    constructor(x,y,width,height){
        var options = {
            restitution:0.08,
            friction:1.0,
            density:1.0
           }
      this.body=bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
       this.image=loadImage("boy.png")
      World.add(world,this.body)


    }

display (){
    rectMode(CENTER);



}


}
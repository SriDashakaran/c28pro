class Catapult{
  constructor(bodyA,pointB){
      var options ={
          body: bodyA,
          pointB: pointB,
          stiffness:0.05,
          lenght:10

      }
      this.pointB=pointB 
      this.catapult = constraint.create(options)
      World.add(world,this.catapult)
    }
display(){

    strokeWeight(7);
    line(pointA.x, pointA.y, pointB.x, pointB.y);



}
}
class slingShot{
    constructor(bodyA,pointB){
var options ={
    stiffness: 0.04,
    length: 10,
    bodyA:bodyA,
    pointB:pointB,
}
this.pointB = pointB;
this.sling = Matter.Constraint.create(options)
World.add(world,this.sling)

    }

display(){

    //if condistion is here for cheaking true and false 
if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
var pointB = this.pointB;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y)
};

}
//to make the bord fly mouse is released 
fly(){
   this.sling.bodyA = null//for making the body nothing when mouse is released
}

}
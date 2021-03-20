class Rope{
    constructor(bodyA, bodyB, xoffset ){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           
            
             pointB:{x:xoffset,y:0
            }
            
        }
        this.xoffset=xoffset
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        
            var pointA=this.rope.bodyA.position
            var pointB=this.rope.bodyB.position
        stroke("purple")
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x+this.xoffset, pointB.y);
        
       
        
    }
}
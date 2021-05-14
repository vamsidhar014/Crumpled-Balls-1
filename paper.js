class Paper {
    constructor(x, y, radius){
        var paper_options = {
            friction : 0.5,
            density : 1.2,
            restitution: 0.8
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,this.radius/2, paper_options);
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        fill("turquoise");
        ellipseMode(RADIUS);
        ellipse(position.x, position.y, this.radius, this.radius);
    }
}

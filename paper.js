class Paper
{
    constructor (x, y,r)
    {
        var options={
        //isStatic: true,
        restitution: 0.3,
        friction: 0,
        density: 0.5,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x, y, r,options);

        World.add(world,this.body)
    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}
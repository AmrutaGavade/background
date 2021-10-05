var box;

function setup (){
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}
function draw()
{



  if(keyIsdown(RIGHT_ARROW))
  {
    background("red");
  }

  if(keyIsdown(LEFT_ARROW))
  {
    background("blue");

  }

  if(keyIsdown(UP_ARROW))
{
background("yellow");

}

if(keyIsdown(DOWN_ARROW))
{
background("green");
}

drawSprites();
}










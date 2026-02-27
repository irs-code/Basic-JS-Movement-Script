var sprite = createSprite(200,200);
sprite.setAnimation("sprite");
sprite.scale = 0.5;

function draw() {
  background("navy");
  if (keyDown("up")) {
    sprite.y = sprite.y - 3;
  }
  if (keyDown("down")) {
    sprite.y = sprite.y + 3;
  }
  if (keyDown("left")) {
    sprite.x = sprite.x - 3;
  }
  if (keyDown("right")) {
    sprite.x = sprite.x + 3;
  }
  drawSprites();
}

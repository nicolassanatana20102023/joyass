var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1, laser2, edges;
var treasure, thief;
var diamante = createSprite(390, 10, 30, 30);
diamante.shapeColor="blue";
var thief = createSprite(10, 390,30,30);
var laser1 = createSprite(80, 100, 150, 8);
laser1.shapeColor = "red";
laser1.velocityY = 11;
laser1.velocityX = 11;
var laser2 = createSprite(320, 250, 150, 8);
laser2.shapeColor = "red";
laser2.velocityX = 30;
function draw() {
  background(220);
  fill("white");
  if (keyDown("left_ARROW")) {
    thief.velocityX = -8;
    thief.velocityY = 0;
  }
  if (keyDown("right_ARROW")) {
    thief.velocityX = 8;
    thief.velocityY = 0;
  }
  if (keyDown("up_ARROW")) {
    thief.velocityX = 0;
    thief.velocityY = -8;
  }
  if (keyDown("down_ARROW")) {
    thief.velocityX = 0;
    thief.velocityY = 8;
  }
  edges=createEdgeSprites();
  thief.collide(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  if (laser1.isTouching(thief) || laser2.isTouching(thief)) {
  stroke(rgb(177, 200, 50));
  fill("red");
  textSize(30);
  text("ladron atrapado",100,200);
  laser1.velocityY = 0;
  laser1.velocityX = 0;
  laser2.velocityX = 0;
  thief.velocityX = 0;
  thief.velocityY = 0;
  
  }
  if (diamante.isTouching(thief)) {
    stroke(rgb(170, 200, 50));
    fill(rgb(0, 0, 0));
    textSize(24);
    text("el ladron consiguio el diamante", 40, 150);
    laser1.velocityY = 0;
    laser1.velocityX = 0;
    laser2.velocityY = 0;
    thief.velocityX = 0;
    thief.velocityY = 0;
  }
  drawSprites();
  


}

 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

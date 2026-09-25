$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    
    //toggleGrid();

    // TODO 2 - Create Platforms
    
    createPlatform(0, 250, 100, 10,"red");
    createPlatform(300, 400, 20, 90, "orange");
    createPlatform(565, 300, 100, 100, "yellow");
    createPlatform(900, 200, 100, 9, "green");
    createPlatform(1200, 300, 10, 9, "blue");
    createPlatform(1350, 200, 50, 9, "purple");
    createPlatform(100, 500, 100, 9, "pink");
    createPlatform(250, 625, 100, 9, "cyan");

    // TODO 3 - Create Collectables
    
    createCollectable("database", 250, 150, 0, 0);
    createCollectable("database", 700, 100, 0, 0);
    createCollectable("database", 1350, 150, 0, 0);

    // TODO 4 - Create Cannons

    createCannon("bottom", 400, 1000);
    createCannon("right", 450, 2000);
    createCannon("bottom", 1050, 1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

// Your code will go here
    // open up your console - if everything loaded properly you should see the latest ml5 version
    console.clear()

    let video = null
    let poses = []
    let noseX = null
    let noseY = null

    // Create a new image element
    var redDotImg = new Image();
    redDotImg.src = 'images/reddot.png';

     // Create a new image element
    var clownHatImg = new Image();
    clownHatImg.src = 'images/clown-hat.png';


    // On set up 
    function setup() {
        createCanvas(1200,700);
        video = createCapture(VIDEO)
        video.size(1200, 700)

        let poseFinder = ml5.poseNet(video); 
        // Listen to new 'pose' events
        poseFinder.on('pose', (results) => {
            poses = results;
          });
                    
        video.hide()
    }

    // On camera 
    function draw() {
        background(220);
        image(video,0,0,1200,700)
        redDotAnimation() //Red dot animation
        
    }



    //===================Animations ====================

    //This animation is a red dot on the nose
    function redDotAnimation(){
        if(poses.length > 0) {
            noseX = poses[0].pose.nose.x
            noseY = poses[0].pose.nose.y
            redDotImg.style.position = 'absolute';
            redDotImg.style.left = noseX-17 + 'px';
            redDotImg.style.top = noseY + 50 + 'px';
            redDotImg.style.width = 50 + 'px';
            redDotImg.style.height = 50 + 'px';

            // Add the red dot to the dom 
            document.body.appendChild(redDotImg);
             
        }

    }

    //This animation is for the clown hat
    function clownHatAnimation(){
        if(poses.length > 0) {
            noseX = poses[0].pose.nose.x
            noseY = poses[0].pose.nose.y
            clownHatImg.style.position = 'absolute';
            clownHatImg.style.left = noseX-200 + 'px';
            clownHatImg.style.top = noseY - 350 + 'px';
            clownHatImg.style.width = 400 + 'px';
            clownHatImg.style.height = 400 + 'px';

            // Add the red dot to the dom 
            document.body.appendChild(clownHatImg);
             
        }

    }
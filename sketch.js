// Your code will go here
    // open up your console - if everything loaded properly you should see the latest ml5 version
    console.clear()

    let video = null
    let predictions = [];
    let videoOpacity = 200; 

    // On set up 
    function setup() {
        createCanvas(600,500);
        video = createCapture(VIDEO)
        video.size(600, 500)

       // Create a new instance of Handpose
        let handpose = ml5.handpose(video, modelLoaded);

        
       // Set up a callback function to handle the results
        handpose.on("predict", gotPredictions);
                    
        video.hide()

        // Load the cursor image 
        cursorImg = loadImage('images/cursor.png');
    }


    // Callback function to handle hand detection results
function gotPredictions(results) {
    predictions = results;
}


// Callback function when Handpose model is loaded
function modelLoaded() {
    console.log('Model loaded!');
}



    // On camera 
    function draw() {
        background(220);
        translate(width,  0);
        scale(-1, 1);
        // image(video,0,0,600,500)
      
        cursorAnimation() //Cursor animation
        
    }


    //===================Animations ====================

    //This animation is a red dot on the nose
    function cursorAnimation(){

        // Check if hand predictions have been made
        if (predictions.length > 0) {
            // Locate the index finger
            let hand = predictions[0];
            let indexFinger = hand.annotations.indexFinger[3];

            let indexFingerX = indexFinger[0];
            let indexFingerY = indexFinger[1];

            // Display the index finger position

            push()
            image(cursorImg, indexFingerX, indexFingerY, 20, 20);
           
            pop()


            
            // fill(255, 0, 0);
            // ellipse(indexFingerX, indexFingerY, 10, 10);
        }
             
    }
var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() { //event listener 
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready"); //event handler
        //when the app loads say the device is ready
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
        //when called display the amound of times the app has been launched paused
        //and resumed 
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready"); //when the app loads
        
		document.addEventListener("resume", onResume, false); //event listener 
		document.addEventListener("pause", onPause, false); //event listener 
		
		launched_count++; //add one onto the count for opening the app
		updateDisplay(); //update the count display
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause"); //signal an alert
		paused_count++;//add one onto this count
		updateDisplay();//updated the count display
    }
	
	function onResume() {
		alert("resume"); //signal an alert
		resumed_count++;//add one onto this count
		updateDisplay(); //updated the count display
    }

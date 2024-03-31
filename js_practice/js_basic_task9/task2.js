function callbackFunction(text) {

    console.log("Callback function was called with text:", text);
  }
  function executeWithDelayAndCallback(text, seconds, callback) {
    setTimeout(function() {
      callback(text);
    }, seconds * 1000);
  } 
  executeWithDelayAndCallback("My text", 5, callbackFunction);
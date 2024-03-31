function printTextWithDelay(text, seconds) {
    setTimeout(function() {
      console.log(text);
    }, seconds * 1000);
  }
  printTextWithDelay("My text", 5);
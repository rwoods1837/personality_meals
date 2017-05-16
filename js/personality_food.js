function checkIt() {
  // Initialize scores
  var childish = 0;
  var classy = 0;
  var athletic = 0;
  var lazy = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'childish') {
        childish++;
      }
      else if (e.value == 'classy') {
        classy++;
      }
      else if (e.value == 'athletic') {
        athletic++;
      }
      else if (e.value == 'lazy') {
        lazy++
      }
    }

  }

  // Determine result
  var counts = "Childish: " + childish + ", " +
               "Classy: " + classy  + ", " +
               "Athletic: " + athletic + ", " +
               "Lazy: " + lazy;

  // What is the highest value?
  var max = Math.max(childish, classy, athletic, lazy);

  // Form a message
  var message;

  if (max == childish) {
    message = "You got childish bud.";
  }
  else if (max == classy) {
    message = "You got classy govna.";
  }
  else if (max == athletic) {
    message = "You got athletic brah.";
  }
  else if (max == lazy) {
    message = "You got lazy, you dang couch potato.";
  }

  var imgresult;

  if (max == childish) {
    imgresult = ;
  }
  // Display result
  //document.getElementById('result-text').innerHTML = counts;
   document.getElementById('result-text').innerHTML = message;
   document.getElementById('result-img').innerHTML = imgresult;
}

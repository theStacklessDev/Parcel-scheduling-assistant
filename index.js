function searchAndReturnPositions() {
    const searchInput = document.getElementById('search-input');
    const searchArray = searchInput.value.split(',').map(item => item.trim());
  
    const outputMap = { // all your inputs have to be hardcoded in all caps. Dont hate the player, hate the game (Or write your own code mate)
        "DURBAN": "Same day",
        "JOHANNESBURG": "NA",
        "CAPE TOWN": "Next Day",
        "EAST LONDON": "Next Day",  
      
    };
  
    const errorMessage = document.getElementById("errorMessage");
    const resultContainer = document.getElementById("resultContainer");
    errorMessage.style.display = "none"; // This is so that the error message does not just chill on the screen for no reason
  
    let result = null;
    searchArray.forEach((searchItem) => {
      if (searchItem.toUpperCase() in outputMap) {
        result = outputMap[searchItem.toUpperCase()]; // this is so that the input typed is not case sensitive
      }
    });
  
    if (result !== null) {
      resultContainer.textContent = result;
    } else {
      errorMessage.style.display = "block"; // Display the error message
      errorMessage.textContent = "Enter a valid hub code or hub name";
      resultContainer.textContent = ""; // Clear the previous error message
    }
  }
   
// This makes it so that I can press "enter"to search instead of manually clicking the search button
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchAndReturnPositions(event);
  } else if (event.key === 'Backspace') {
    searchInput.value = ''; // Clear the input field
    resultContainer.textContent = ''; // Clear the result container
    errorMessage.style.display = 'none'; // Hide the error message
  }
});

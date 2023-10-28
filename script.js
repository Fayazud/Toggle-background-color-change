// Function to toggle the background color
function toggleBackgroundColor() {
    const body = document.body;
    const currentColor = body.style.backgroundColor;

    // Check the current background color
    if (currentColor === "" || currentColor === "white") {
        // Change the background color to a different color
        body.style.backgroundColor = "lightblue";
    } else {
        // Reset to the default background color (white)
        body.style.backgroundColor = "white";
    }
}

// Add a click event listener to the toggle button
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleBackgroundColor);

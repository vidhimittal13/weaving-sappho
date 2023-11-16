
// Existing drag-and-drop functionality
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    // Only append to poem container if the dragged element is a fragment
    if (draggedElement.classList.contains('fragment')) {
        event.target.appendChild(draggedElement);
        event.target.appendChild(document.createElement("br")); // Ensure each fragment is on a new line
    }
}
var audio = document.getElementById('yourAudioElementId'); // Replace with your audio element ID
var musicToggleImg = document.getElementById('musicToggle');

musicToggleImg.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        musicToggleImg.src = 'pause-lyre.png'; // Change the image to 'pause' icon
    } else {
        audio.pause();
        musicToggleImg.src = 'final-play-button.png'; // Change the image to 'play' icon
    }
});

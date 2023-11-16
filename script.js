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
        event.target.querySelector('p').style.display = 'none';
    }
}


document.querySelectorAll('.editable-blank').forEach(element => {
    element.addEventListener('click', (event) => {
        // Focus on the editable element when clicked
        event.target.focus();
    });

    element.addEventListener('input', (event) => {
        // Handle the input. For example, you can check the length of input here.
    });
});
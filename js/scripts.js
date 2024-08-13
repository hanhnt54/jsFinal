function upDate(previewPic) {
    // Log to check that the event is triggering
    console.log("Hover event triggered!");

    // Log information about the previewPic variable
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    // Update the text of the element with the id of 'image'
    document.getElementById('image').innerText = previewPic.alt;

    // Update the background image of the element with the id of 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}
function undo() {
    // Log to check that the undo function is triggered
    console.log("Mouse out event triggered!");

    // Revert the background image to the original
    document.getElementById('image').style.backgroundImage = "url('original-image.jpg')";

    // Revert the text to the original
    document.getElementById('image').innerText = "Hover over an image below to display here.";
}
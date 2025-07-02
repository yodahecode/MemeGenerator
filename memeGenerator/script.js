document.addEventListener("DOMContentLoaded", function(){
    // Selecting the form and meme container
    const memeForm = document.getElementById("meme-form");
    const memeContainer = document.getElementById("meme-container");

    function addNewMeme() {
        // Getting the form data
        const imageUrl = document.getElementById("image-url").value;
        const topText = document.getElementById("top-text").value;
        const bottomText = document.getElementById("bottom-text").value;

        // creating the meme generator div
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        // creating the image element 
        const memeImage = document.createElement("img");
        memeImage.src = imageUrl;
        memeImage.alt = "Meme Image";

        // creating top text element
        const memeTopText = document.createElement("div");
        memeTopText.classList.add("top-text");
        memeTopText.textContent = topText;

        // creating bottom text element
        const memeBottomText = document.createElement("div");
        memeBottomText.classList.add("bottom-text");
        memeBottomText.textContent = bottomText;

        //creating meme button element
        const memeDeleteButton = document.createElement("button");
        memeDeleteButton.textContent = "Delete";
        memeDeleteButton.addEventListener("click", function (event) {
        // `e.target` refers to the delete button
        // We use `closest` to find the parent meme div
        const memeToDelete = event.target.closest(".meme");
        memeToDelete.remove(); // Remove the meme div from the DOM
        });


        // Appending the image and text to the meme div
        memeDiv.appendChild(memeImage);
        memeDiv.appendChild(memeTopText);
        memeDiv.appendChild(memeBottomText);
        memeDiv.appendChild(memeDeleteButton);
       // memeDiv.appendChild(memeButton);

        // Appending the meme div to the meme container
        memeContainer.appendChild(memeDiv);

        // Clearing the form fields
        memeForm.reset();
    }

    // Event handling form submission
    memeForm.addEventListener("submit", function (event) {
        event.preventDefault(); //prevent the form from reloading the page
        addNewMeme();   
        
    }); 
});
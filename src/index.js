console.log('%c HI', 'color: firebrick')

const httpUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogDropDown = document.querySelector("#breed-dropdown")
const firstDogBreed = document.querySelector("#dog-image-container")


//dog-image-container.appendChild(imgUrl)
function setDogImage(imgUrl){
    const imgOfDog = document.createElement("img");

    firstDogBreed.innerHTML = "";
    imgOfDog.style.width = "200px";
    imgOfDog.setAttribute("src", imgUrl);
    firstDogBreed.appendChild(imgOfDog);
}

async function getDogImages() {
    const response = await fetch(httpUrl);
    const data = await response.json();
    return data.message;
}

getDogImages().then(function(dogImages) {
    setDogImage(dogImages[0])

    dogDropDown.addEventListener("change", function(e){  
        const index = parseInt(e.target.value);
        const dogImage = dogImages[index];
        setDogImage(dogImage)
    })   
});
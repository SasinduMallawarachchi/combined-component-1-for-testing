const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        popup.classList.toggle('active');
        console.log(item.src);
        updateImage(item.src);
    })
})
{/* <large img path> */}
const updateImage = (path) => {
    largeImage.src = path;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

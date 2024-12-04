// javascript untuk profile picture saya
const hoverImage = document.querySelector(".hover-image");

if (hoverImage) {
    hoverImage.addEventListener("mouseenter", () => {
        console.log("Mouse entered hover image area.");
    });

    hoverImage.addEventListener("mouseleave", () => {
        console.log("Mouse left hover image area.");
    });
} else {
    console.error("Element .hover-image not found");
}
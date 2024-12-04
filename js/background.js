// Fungsi untuk membuat elemen daun/bunga secara acak
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');


    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.animationDuration = Math.random() * 5 + 5 + 's';
    leaf.style.animationDelay = Math.random() * 3 + 's';

    document.body.appendChild(leaf);


    setTimeout(() => {
        leaf.remove();
    }, 20000);
}


setInterval(createLeaf, 2000);
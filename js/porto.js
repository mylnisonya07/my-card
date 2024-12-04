// javascript (main/utama)
document.querySelector('a[href="https://mayla-porto.vercel.app/"]').addEventListener('click', function (event) {

    event.preventDefault();

    console.log('Link clicked!');
    console.log('Link properties:');
    console.log('- Href:', this.href);
    console.log('- Target:', this.target);
    console.log('- Rel:', this.rel);
    console.log('- Class:', this.className);

    //check new tab link sosmded
    if (this.target === '_blank') {
        console.log('Link akan dibuka di tab baru');
    }


    this.addEventListener('mouseenter', function () {
        console.log('Mouse hover - text color changing to pink');
    });

    this.addEventListener('mouseleave', function () {
        console.log('Mouse leave - text color back to default');
    });


    window.open(this.href, this.target);
});

//check link valid
function checkLinkValidity(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('Link is valid and accessible');
            } else {
                console.log('Link returns error:', response.status);
            }
        })
        .catch(error => {
            console.log('Error checking link:', error);
        });
}


checkLinkValidity('https://mayla-porto.vercel.app/');
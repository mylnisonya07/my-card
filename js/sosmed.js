// javascript untuk inteaksi get in touch by my sosmed
document.addEventListener('DOMContentLoaded', function () {

    const socialLinks = {
        instagram: document.querySelector('a[href*="instagram.com"]'),
        linkedin: document.querySelector('a[href*="linkedin.com"]'),
        github: document.querySelector('a[href*="github.com"]'),
        tiktok: document.querySelector('a[href*="tiktok.com"]'),
        email: document.querySelector('a[href*="mailto"]')
    };

    // untuk handle hover
    function handleHoverEffect(element, platform) {
        element.addEventListener('mouseenter', function () {
            console.log(`Hovering over ${platform} icon`);
            this.style.filter = 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))';
        });

        element.addEventListener('mouseleave', function () {
            console.log(`Mouse left ${platform} icon`);
            this.style.filter = 'none';
        });
    }

    // untuk handle click
    function handleClick(element, platform) {
        element.addEventListener('click', function (event) {
            console.log(`${platform} link clicked`);

            if (typeof gtag !== 'undefined') {
                gtag('event', 'social_click', {
                    'social_platform': platform
                });
            }
        });
    }

    // event handlers
    for (let [platform, element] of Object.entries(socialLinks)) {
        if (element) {
            handleHoverEffect(element, platform);
            handleClick(element, platform);
        }
    }

    // untuk "Work with Me"
    const workWithMeBtn = document.querySelector('a[href*="mailto"]');
    if (workWithMeBtn) {
        workWithMeBtn.addEventListener('mouseenter', function () {
            console.log('Hovering over Work with Me button');
            this.style.transform = 'scale(1.05)';
        });

        workWithMeBtn.addEventListener('mouseleave', function () {
            console.log('Mouse left Work with Me button');
            this.style.transform = 'scale(1)';
        });

        workWithMeBtn.addEventListener('click', function (event) {
            event.preventDefault();
            console.log('Work with Me button clicked');

            const email = 'mylnisonya07@gmail.com';
            const subject = 'Work Inquiry';
            const body = 'Hi Mayla,\n\nI would like to work with you on...';


            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


            if (!email.includes('@')) {
                console.error('Invalid email address');
                alert('Invalid email address');
                return;
            }


            window.location.href = mailtoLink;
        });
    }

    // untuk check status link
    async function checkLinksStatus() {
        const links = {
            instagram: 'https://instagram.com/mylnisonya_',
            linkedin: 'https://www.linkedin.com/in/mayla-ayyuni-sonya-110487327',
            github: 'https://github.com/mylnisonya07',
            tiktok: 'https://tiktok.com/@thebluesofmeee_'
        };

        for (let [platform, url] of Object.entries(links)) {
            try {
                const response = await fetch(url, {
                    mode: 'no-cors'
                });
                console.log(`${platform} link is accessible`);
            } catch (error) {
                console.error(`Error checking ${platform} link:`, error);
            }
        }
    }


    checkLinksStatus();
});

// animasi icon
function initializeSocialIconsAnimation() {
    const socialIcons = document.querySelectorAll('.fab');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function () {
            this.style.animation = 'bounce 0.5s ease infinite';
        });

        icon.addEventListener('mouseout', function () {
            this.style.animation = 'none';
        });
    });
}

// css untuk animasi
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Initialize animations
initializeSocialIconsAnimation();
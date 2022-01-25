// This code was inspired from: https://www.youtube.com/watch?v=aUjBvuUdkhg

// In order to make this running correctly:
//  1) Make sure to reference this JS-File correctly at the very bottom of your HTML-File
//  2) Make sure to add the 'data-lazy' on each <img>-Element INSTEAD of the 'src'-attribute, otherwise you will not see any animation (because wa added also css that hides all images at the beginning.)
//  3) Add the CSS from the video in order to make the CSS-animation work.

const targets = document.querySelectorAll('img.lazy'); // Select all the <img>-Elements

const lazyLoad = target => {
    // We use the IntersectionObserver()-API in order to get the lazy-loading job done:
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('😍')

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('lazy-fade');

                observer.disconnect(); // This will disconnect the observer, after the image gets visible, in order to not overload the main thread in the browser.
            }
        })
    }); 

    io.observe(target);
}

targets.forEach(lazyLoad); //Call the function 'lazyLoad' on each image.
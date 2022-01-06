// ---- Beginn js für den Showcase-Background-Slider ----
const dottedBtns = document.querySelectorAll('.dotted-btns span'); // ACHTUNG (Key hier): Selektiert alle <span>-Elemente, welche innerhalb des Parent-Elements mit der der Klasse '.dotted-btns' enthalten sind! Es selektiert jedoch NICHT das <div>-Element mit der Klasse '.dotted-btns'!!!
let slideCount = 0;



// -- Navigation via the Dotted-Buttons
//
// >> Description: What it does?
// 1) Loop through all the <span>-Elements within the '.dotted-btns' CSS-Klasse (= 3 Elemente im Total) and add an "onClick"-Eventlistener to each <span>-Element, which will call the custom-function with the name 'slideShowcase()';
// 2) The custom-function 'slideShowcase()' will:
//      a) First get the screen-size of the device that is currently being used --> this number is saved within the variable with the name 'displayedWidth'
//      b) Use the width of the device you got form step "a)" in order to move to the next . This is achieved by moving the current flex-item to the right by the amount of the 
dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        slideShowcase();
    });
});

function slideShowcase(){
    const displayWidth = document.querySelector('.showcase').clientWidth; // This will select the big flex-items (= full-screen widths). For a nice visualization, see also: https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
    document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`; //
    // - ACHTUNG (Key to note): Man verwendet die ``-Zeichen hier (NICHT ''-Zeichen, genau hinsehen!), wenn man den CSS-Style IM HTML-Dokument direkt verändern will!
    // - Very Important for understanding (Key to note): Die <div>-Elemente mit der Klasse haben DIESSELBE 'width', wie der Viewport. Oben, definieren wir eine Variable in JS, welche 'displayWidth' heisst, welche IMMER dieselbe Grösse verfügt, wie der Viewport. Dh, wenn wir jeweils die Variable 'displayWidth' mit der jeweiligen 'data-id' (siehe HTML-File, bei den <span>-Elementen)
}

window.addEventListener('resize', slideShowcase); // Cool (Key to note): In order to not have errors in the Slideshow, we must re-calculate the width of the currently used decive IF it gets resized during the process!


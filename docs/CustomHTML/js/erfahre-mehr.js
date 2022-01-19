// "Accordion", dh Text, der beim Klicken erscheint. Achtung: Script muss unten stehen, sonst geht es nicht!
var acc = document.getElementsByClassName("accordion-utopia");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var picture = document.getElementById('picture');

var text = document.getElementById('text');
var information = document.getElementById('information');
var textBox = document.getElementById('box');
var addBtn = document.getElementById('add');
var containerCenter = window.innerHeight / 2;
// var maxZoomFactor = 20; // Set the maximum zoom factor here

window.addEventListener('scroll', function() {
    let scrollVal = window.scrollY;
    var scrollPosition = window.pageYOffset;
    var scrollCenter = scrollPosition + containerCenter;

    var containerTop = picture.offsetTop;
    var containerHeight = picture.offsetHeight;
    var containerBottom = containerTop + containerHeight;

    var scrollDistance = scrollCenter - containerTop - containerHeight / 2;
    var zoomFactor = 1 + scrollDistance * 0.004; // Adjust the zoom speed

    // Limit the zoom factor to the maximum zoom level
    // zoomFactor = Math.min(zoomFactor, maxZoomFactor);

    if (scrollCenter > containerTop && scrollCenter < containerBottom) {
        picture.style.transform = 'scale(' + zoomFactor + ')';

        text.style.top = 286 - scrollVal* 0.5 + 'px';
        text.style.left =  678 - scrollVal* 0.2 + 'px';
        text.style.fontSize =  10 + scrollVal* 0.046 + 'px';

        // information.style.top = 370 - scrollVal* 0.5 + 'px';
        // information.style.left =  678 - scrollVal* 0.2 + 'px';
        // information.style.fontSize =  7 + scrollVal* 0.046 + 'px';

        information.style.top = 320 - scrollVal* 0.38 + 'px';
        information.style.left =  620 - scrollVal* 0.4 + 'px';
        information.style.fontSize =  7 + scrollVal* 0.03 + 'px';

        // textBox.style.innerHeight = 200 + scrollVal* 0.5 + 'px';
        // textBox.style.offsetHeight= 200 + scrollVal* 1 + 'px';
        // textBox.style.containerHeight= 200 + scrollVal* 1 + 'px';

        textBox.style.width= 150 + scrollVal* 0.45 + 'px';
        textBox.style.height= 110 + scrollVal* 0.45 + 'px';

        addBtn.style.top= 321 + scrollVal* 0.645 + 'px';
        addBtn.style.left= 857 + scrollVal* 0.55  + 'px';
        addBtn.style.fontSize =  6 + scrollVal* 0.03 + 'px';


        
        


        
    } 
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

function hideParagraph() {
    var paragraph = document.getElementById("box");
    paragraph.style.display = "none";

    var para = document.getElementById("box1");
    para.style.display = "block";
}
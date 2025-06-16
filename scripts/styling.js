// this file was encoded in ISO 8859-1
// feito por gabriel loureiro amorim hugi / made by gabriel loureiro amorim hugi
// this project is under the MIT license

// file for making sure the css works with every browser configuration (hopefuly)

//ResizeFunction();
//window.addEventListener('resize', ResizeFunction);

//this shit is useless for now
function ResizeFunction () {
    //adjusts screen
    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    document.body.style.height = screenHeight + "px";
    document.body.style.width = screenWidth + "px";
    document.body.style.maxHeight = screenHeight + "px";
    document.body.style.maxWidth = screenWidth + "px";
}
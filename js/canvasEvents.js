function getStartCoord(ev) {
    let DOMx = document.querySelector(".currentX"),
        DOMy = document.querySelector(".currentY");
    
    DOMx.innerHTML = ev.offsetX;
    DOMy.innerHTML = ev.offsetY;
    
    coordObj.x = ev.offsetX;
    coordObj.y = ev.offsetY;
}

function getEndCoord(ev) {
    let DOMx1 = document.querySelector(".currentX1"),
        DOMy1 = document.querySelector(".currentY1"),
        DOMRect = document.querySelector("#rect");
        
    DOMx1.innerHTML = ev.offsetX;
    DOMy1.innerHTML = ev.offsetY;
    
    coordObj.x1 = ev.offsetX;
    coordObj.y1 = ev.offsetY;
    
    DOMRect.style.display = "inline-block";
    DOMRect.style.marginTop = coordObj.y + "px";
    DOMRect.style.marginLeft = coordObj.x + "px";
    DOMRect.style.width = (coordObj.x1 - coordObj.x) + "px";
    DOMRect.style.height = (coordObj.y1 - coordObj.y) + "px";
}

let canvas = document.querySelector("#canvas"),
    coordObj = {
        x: 1,
        y: 1,
        x1: 1,
        y1: 1
    };
    
canvas.addEventListener("mousedown", getStartCoord);
canvas.addEventListener("mouseup", getEndCoord);

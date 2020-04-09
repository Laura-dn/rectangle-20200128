function createObjectRect() {
    let DOMSpanX = document.querySelector(".task-1-x"),
        DOMSpanY = document.querySelector(".task-1-y"),
        DOMSpanX1 = document.querySelector(".task-1-x1"),
        DOMSpanY1 = document.querySelector(".task-1-y1"),
        DOMRect = document.querySelector("#rect");
    
    objRect = new Rectangle(coordObj);
    DOMSpanX.innerHTML = objRect.x;
    DOMSpanY.innerHTML = objRect.y;
    DOMSpanX1.innerHTML = objRect.x1;
    DOMSpanY1.innerHTML = objRect.y1;
    
    DOMRect.style.display = "inline-block";
}

function checkObjectRect() {
    if(objRect == undefined) {
        createObjectRect();
    } else {
        return true;
    }
}

function getWidth() {
    let rectWidth = 0;
    
    checkObjectRect();
    
    rectWidth = objRect.x1 - objRect.x;
    return rectWidth;
}

function getHeight() {
    let rectHeight = 0;
        
    checkObjectRect();
    
    rectHeight = objRect.y1 - objRect.y;
    return rectHeight;
}

function getSquare() {
    let rectWidth = getWidth(),
        rectHeight = getHeight();
        
    return rectWidth * rectHeight;
}

function getPerimeter() {
    let rectWidth = getWidth(),
        rectHeight = getHeight();
        
    return (rectWidth + rectHeight) * 2;
}

function getUpdateWidth(w) {
    let DOMInput = Number(w),
        rectWidth = getWidth(),
        updateWidth = 0;
        
    updateWidth = rectWidth + DOMInput;
    
    if(!isNaN(updateWidth) && updateWidth > 0 && updateWidth < 8193) {
        return updateWidth;
    } else {
        return false;
    }
}

function getUpdateHeight(h) {
    let DOMInput = Number(h),
        rectHeight = getHeight(),
        updateHeight = 0;
        
    updateHeight = rectHeight + DOMInput;
    
    if(!isNaN(updateHeight) && updateHeight > 0 && updateHeight < 8193) {
        return updateHeight;
    } else {
        return false;
    }
}

function getUpdateX(x) {
    let DOMInput = Number(x),
        DOMRect = document.querySelector("#rect"),
        currentX = 0,
        newX = 0;
    
    checkObjectRect();
    
    currentX = DOMRect.offsetLeft;
    newX = currentX + DOMInput - 1;
    
    if(!isNaN(newX) && newX > 0 && newX < 8193) {
        return newX;
    } else {
        return false;
    }
}

function getUpdateY(y) {
    let DOMInput = Number(y),
        DOMRect = document.querySelector("#rect"),
        currentY = 0,
        newY = 0;
    
    checkObjectRect();
    
    currentY = DOMRect.offsetTop;
    newY = currentY + DOMInput - 1;
    
    if(!isNaN(newY) && newY > 0 && newY < 8193) {
        return newY;
    } else {
        return false;
    }
}

function updateDOM(ev) {
    let DOMId = ev.target.id,
        DOMResult,
        DOMRect = document.querySelector("#rect"),
        DOMInput = 0,
        updateWidth = 0,
        updateHeight = 0,
        updateX = 0,
        updateY = 0;
    
    switch(DOMId) {
        case "btnCreateObject":
            createObjectRect();
            break;
        case "btnWidth":
            DOMResult = document.querySelector(".resultWidth");
            DOMResult.innerHTML = `Ширина прямоугольника: ${getWidth()} px.`;
            break;
        case "btnHeight":
            DOMResult = document.querySelector(".resultHeight");
            DOMResult.innerHTML = `Высота прямоугольника: ${getHeight()} px.`;
            break;
        case "btnSquare":
            DOMResult = document.querySelector(".resultSquare");
            DOMResult.innerHTML = `Площадь прямоугольника: ${getSquare()} px.`;
            break;
        case "btnPerimeter":
            DOMResult = document.querySelector(".resultPerimeter");
            DOMResult.innerHTML = `Периметр прямоугольника: ${getPerimeter()} px.`;
            break;
        case "btnUpdateWidth":
            DOMInput = document.querySelector("#updateWidth"),
            DOMResult = document.querySelector(".resultUpdateWidth");
            updateWidth = getUpdateWidth(DOMInput.value);
            
            if(updateWidth) {
                DOMRect.style.width = updateWidth + "px";
                DOMResult.innerHTML = `Текущая ширина прямоугольника: ${updateWidth} px.`;
            } else {
                DOMResult.classList.add("error");
                DOMResult.innerHTML = `!ОШИБКА в данных: ${DOMInput.value}`;
            }
            
            break;
        case "btnUpdateHeight":
            DOMInput = document.querySelector("#updateHeight");
            DOMResult = document.querySelector(".resultUpdateHeight");
            updateHeight = getUpdateHeight(DOMInput.value);
            
            if(updateHeight) {
                DOMRect.style.height = updateHeight + "px";
                DOMResult.innerHTML = `Текущая высота прямоугольника: ${updateHeight} px.`;
            } else {
                DOMResult.classList.add("error");
                DOMResult.innerHTML = `!ОШИБКА в данных: ${DOMInput.value}`;
            }
            
            break;
        case "btnUpdateWH":
            let DOMInputW = document.querySelector("#updateW"),
                DOMInputH = document.querySelector("#updateH");
            
            updateWidth = getUpdateWidth(DOMInputW.value);
            updateHeight = getUpdateHeight(DOMInputH.value);
            DOMResult = document.querySelector(".resultUpdateWH");
            
            if(updateHeight && updateWidth) {
                DOMRect.style.height = updateHeight + "px";
                DOMRect.style.width = updateWidth + "px";
                DOMResult.innerHTML = `Текущая высота прямоугольника: ${updateHeight} px.<br>Текущая ширина прямоугольника: ${updateWidth} px.`;
            } else {
                DOMResult.classList.add("error");
                DOMResult.innerHTML = `!ОШИБКА в данных: ${DOMInputW.value} -- ${DOMInputH.value}`;
            }
            
            break;
        case "btnUpdateX":
            DOMInput = document.querySelector("#updateX");
            DOMResult = document.querySelector(".resultUpdateX");
            updateX = getUpdateX(DOMInput.value);
            
            if(updateX) {
                DOMRect.style.marginLeft = updateX + "px";
                DOMResult.innerHTML = `Текущее положение (Х): ${updateX}.`;
            } else {
                DOMResult.classList.add("error");
                DOMResult.innerHTML = `!ОШИБКА в данных: ${DOMInput.value}`;
            }
            
            break;
        case "btnUpdateY":
            DOMInput = document.querySelector("#updateY");
            DOMResult = document.querySelector(".resultUpdateY");
            updateY = getUpdateY(DOMInput.value);
            
            if(updateY) {
                DOMRect.style.marginTop = updateY + "px";
                DOMResult.innerHTML = `Текущее положение (Y): ${updateY}.`;
            } else {
                DOMResult.classList.add("error");
                DOMResult.innerHTML = `!ОШИБКА в данных: ${DOMInput.value}`;
            }
            
            break;
        case "btnUpdateXY":
            let DOMInputX = document.querySelector("#updateXYx"),
                DOMInputY = document.querySelector("#updateXYy");
            
            updateX = getUpdateX(DOMInputX.value);
            updateY = getUpdateY(DOMInputY.value);
            DOMResult = document.querySelector(".resultUpdateXY");
            
            if(updateX && updateY) {
                DOMRect.style.marginLeft = updateX + "px";
                DOMRect.style.marginTop = updateY + "px";
                DOMResult.innerHTML = `Текущее положение (Х): ${updateX}.<br>Текущее положение (Y): ${updateY}.`;
            } else {
                DOMResult.classList.add("error");
                DOMResult.innerHTML = `!ОШИБКА в данных: ${DOMInputW.value} -- ${DOMInputH.value}`;
            }
            
            break;
        default:
            alert("ОШИБКА выполнения операции!");
            break;
    }
}

let objRect,
    event = "click",
    arrBtn = [
        "CreateObject",
        "Width",
        "Height",
        "Square",
        "Perimeter",
        "UpdateWidth",
        "UpdateHeight",
        "UpdateWH",
        "UpdateX",
        "UpdateY",
        "UpdateXY"
    ];

for(let i = 0; i < arrBtn.length; i++) {
    let btn = document.querySelector("#btn" + arrBtn[i]);
    btn.addEventListener(event, updateDOM);
}

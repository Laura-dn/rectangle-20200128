let objRect; //Объект класса Прямоугольник

//Создаем объект Прямоугольник
function createObjectRect() {
    let DOMSpanX = document.querySelector(".task-1-x"),     //Выбираем span для Х с первого задания
        DOMSpanY = document.querySelector(".task-1-y"),     //Выбираем span для У с первого задания
        DOMSpanX1 = document.querySelector(".task-1-x1"),   //Выбираем span для Х1 с первого задания
        DOMSpanY1 = document.querySelector(".task-1-y1"),   //Выбираем span для У1 с первого задания
        DOMRect = document.querySelector("#rect");          //Выбираем наш прямоугольник с холста
    
    objRect = new Rectangle(coordObj);          //Создаем объект Прямоугольник
    //Выводим координаты в ДОМ
    DOMSpanX.innerHTML = objRect.x;
    DOMSpanY.innerHTML = objRect.y;
    DOMSpanX1.innerHTML = objRect.x1;
    DOMSpanY1.innerHTML = objRect.y1;
    
    DOMRect.style.display = "inline-block"; //Если пользователь не создал прямоугольник, открываем по умолчанию.
}

//Проверка объекта Прямоугольник
function checkObjectRect() {
    if(objRect == undefined) {
        createObjectRect();
    } else {
        return true;
    }
}

//Возвращает ширину прямоугольника
function getWidth() {
    let rectWidth = 0;
    
    checkObjectRect();  //Проверяем, создан ли объект
    
    rectWidth = objRect.x1 - objRect.x; //Находим ширину нашего прямоугольника
    return rectWidth;
}

//Возвращает высоту прямоугольника
function getHeight() {
    let rectHeight = 0;
        
    checkObjectRect();  //Проверяем, создан ли объект
    
    rectHeight = objRect.y1 - objRect.y;    //Находим высоту нашего прямоугольника
    return rectHeight;
}

//Возвращает площадь прямоугольника
function getSquare() {
    let rectWidth = getWidth(),     //Получаем ширину
        rectHeight = getHeight();   //Получаем высоту
        
    return rectWidth * rectHeight;
}

//Возвращает периметр прямоугольника
function getPerimeter() {
    let rectWidth = getWidth(),     //Получаем ширину
        rectHeight = getHeight();   //Получаем высоту
        
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

function getWhereDot(x, y) {
    let dotX = Number(x),
        dotY = Number(y),
        DOMRect = document.querySelector("#rect"),
        currentX = DOMRect.offsetLeft - 1,
        currentY = DOMRect.offsetTop - 1,
        currentX1 = currentX + Number(DOMRect.style.width.replace("px", "")),
        currentY1 = currentY + Number(DOMRect.style.height.replace("px", ""));

    if(dotX >= currentX && dotX <= currentX1 &&
       dotY >= currentY && dotY <= currentY1) {
        return true;
    } else {
        return false;
    }
}

function getDot(x, y) {
    let DOMDiv = document.createElement("div"),
        DOMCanvas = document.querySelector("#canvas"),
        DOMOldDiv = document.querySelector("#dot12");
    
    if(DOMOldDiv != null) {
        DOMOldDiv.remove();
    }

    DOMDiv.id = "dot12";
    DOMDiv.style.left = (x - 2) + "px";
    DOMDiv.style.top = (y - 2) + "px";

    DOMCanvas.append(DOMDiv);
}

//Запускаем функцию при клике на кнопку
function updateDOM(ev) {
    let DOMId = ev.target.id,                       //Считываем id нажатой кнопки
        DOMRect = document.querySelector("#rect"),  //Выбираем наш прямоугольник на холсте
        DOMResult,                                  //Переменная для вывода сообщения с результатом
        DOMInput,                                   //
        DOMInputX,                                  //
        DOMInputY,                                  //
        whereDot,                                   //
        updateWidth = 0,                            //
        updateHeight = 0,                           //
        updateX = 0,                                //
        updateY = 0;                                //
    
    //Проверяем полученный id
    switch(DOMId) {
        case "btnCreateObject":     //id кнопки "Cоздать объект"
            createObjectRect();
            break;
        case "btnWidth":            //id кнопки "Расчитать ширину"
            DOMResult = document.querySelector(".resultWidth");
            DOMResult.innerHTML = `Ширина прямоугольника: ${getWidth()} px.`;
            break;
        case "btnHeight":           //id кнопки "Расчитать высоту"
            DOMResult = document.querySelector(".resultHeight");
            DOMResult.innerHTML = `Высота прямоугольника: ${getHeight()} px.`;
            break;
        case "btnSquare":           //id кнопки "Расчитать площадь"
            DOMResult = document.querySelector(".resultSquare");
            DOMResult.innerHTML = `Площадь прямоугольника: ${getSquare()} px.`;
            break;
        case "btnPerimeter":        //id кнопки "Расчитать периметр"
            DOMResult = document.querySelector(".resultPerimeter");
            DOMResult.innerHTML = `Периметр прямоугольника: ${getPerimeter()} px.`;
            break;
        case "btnUpdateWidth":      //id кнопки "Изменить ширину"
            DOMInput = document.querySelector("#updateWidth");
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
        case "btnUpdateHeight":     //id кнопки "Изменить высоту"
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
        case "btnUpdateWH":         //id кнопки "Изменить высоту и ширину"
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
        case "btnUpdateX":          //id кнопки "Изменить ось Х"
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
        case "btnUpdateY":          //id кнопки "Изменить ось Y"
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
        case "btnUpdateXY":         //id кнопки "Изменить ось X и Y"
            DOMInputX = document.querySelector("#updateXYx");
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
        case "btnWhereDot":         //id кнопки Проверка точки
            DOMInputX = document.querySelector("#dotX");
            DOMInputY = document.querySelector("#dotY");
            DOMResult = document.querySelector(".resultWhereDot");
            whereDot = getWhereDot(DOMInputX.value, DOMInputY.value);

            getDot(DOMInputX.value, DOMInputY.value);

            if(whereDot) {
                DOMResult.innerHTML = `Точка с координатами (${DOMInputX.value}, ${DOMInputY.value}) находится внутри прямоугольника.`;
            } else {
                DOMResult.innerHTML = `Точка с координатами (${DOMInputX.value}, ${DOMInputY.value}) находится вне прямоугольника.`;
            }

            break;
        default:
            alert("ОШИБКА выполнения операции!");
            break;
    }
}

//Вешаем события на все кнопки
(function() {
    let arrWithBtn = document.querySelectorAll("button"),
        event = "click";

for(let i = 0; i < arrWithBtn.length; i++) {
    arrWithBtn[i].addEventListener(event, updateDOM);
}
})();

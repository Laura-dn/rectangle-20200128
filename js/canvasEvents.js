let canvas = document.querySelector("#canvas"),
    coordObj = {    //Координаты прямоугольника по умолчанию
        x: 1,
        y: 1,
        x1: 1,
        y1: 1
    };

//Считываем координаты первой точки (по нажатию мыши)
function getStartCoord(ev) {
    let DOMx = document.querySelector(".currentX"), //Выбираем span с координатой по оси Х
        DOMy = document.querySelector(".currentY"); //Выбираем span с координатой по оси У
    
    DOMx.innerHTML = ev.offsetX; //Выводим Х в ДОМ
    DOMy.innerHTML = ev.offsetY; //Выводим У в ДОМ
    
    //Заносим координаты Х,У в объект
    coordObj.x = ev.offsetX;
    coordObj.y = ev.offsetY;
}

//Считываем координаты последней точки (когда отпускаем мышь)
function getEndCoord(ev) {
    let DOMx1 = document.querySelector(".currentX1"),   //Выбираем span с координатой по оси Х1
        DOMy1 = document.querySelector(".currentY1"),   //Выбираем span с координатой по оси У1
        DOMRect = document.querySelector("#rect");      //Выбираем наш прямоугольник с холста
        
    DOMx1.innerHTML = ev.offsetX;   //Выводим Х1 в ДОМ
    DOMy1.innerHTML = ev.offsetY;   //Выводим У1 в ДОМ
  
    //Заносим координаты Х1,У1 в объект
    coordObj.x1 = ev.offsetX;
    coordObj.y1 = ev.offsetY;
    
    DOMRect.style.marginTop = coordObj.y + "px";                //Задаем отступ сверху для прямоугольника
    DOMRect.style.marginLeft = coordObj.x + "px";               //Задаем отступ слева для прямоугольника
    DOMRect.style.width = (coordObj.x1 - coordObj.x) + "px";    //Находим ширину прямоугольника
    DOMRect.style.height = (coordObj.y1 - coordObj.y) + "px";   //Находим высоту прямоугольника
    DOMRect.style.display = "inline-block";                     //Показываем прямоугольник
}
    
canvas.addEventListener("mousedown", getStartCoord);
canvas.addEventListener("mouseup", getEndCoord);

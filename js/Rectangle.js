/*    (x,y) * * * * * * * *
 *          *             *
 *          *             *
 *          * * * * * * * * (x1, y1)
*/

class Rectangle
{
    //Создаем приватные переменные
    #x;
    #y;
    #x1;
    #y1;
    
    constructor({x,y,x1,y1}) {
        //Вызывает сеттеры
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
    }
    
    get x() {return this.#x;}
    get y() {return this.#y;}
    get x1() {return this.#x1;}
    get y1() {return this.#y1;}
    
    //Проверку переменных не делаем, т.к. пользователь ничего не вводит
    set x(value) {this.#x = value;}
    set y(value) {this.#y = value;}
    set x1(value) {this.#x1 = value;}
    set y1(value) {this.#y1 = value;}
}

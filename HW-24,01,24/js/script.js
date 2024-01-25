//Создать Rectangle класс как на примере Circle, наследуют от класса Shape и расширяют его
//функциональность для отображения конкретных фигур.

//Tакже добавить метод setStyle для родительского класса, принимает объект и применяет
//все стили которые есть в этом объекте

class Shape {
  constructor(className) {
    this.element = document.createElement("div");

    this.element.classList.add("shape", className);
  }

  setStyle(styles) {
    Object.assign(this.element.style, styles);
  }

  render() {
    document.querySelector(".container").append(this.element);
  }
}

class Rectangle extends Shape {
  constructor() {
    super("rectangle");
  }
}

let rectangle = new Rectangle();
rectangle.setStyle({
  background: "orange",
  borderRadius: "50px",
});
rectangle.render();

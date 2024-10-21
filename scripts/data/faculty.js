export class Faculty {
  #image;
  #name;
  #fullname;
  #address;

  constructor(OneFaculty) {
    this.#image = OneFaculty.image;
    this.#name = OneFaculty.name;
    this.#fullname = OneFaculty.fullname;
    this.#address = OneFaculty.address;
  }

  getImage() {
    return this.#image;
  }
  getName() {
    return this.#name;
  }
  getFullname() {
    return this.#fullname;
  }
  getAddress() {
    return this.#address;
  }
}

export let faculties = [
  new Faculty({
    image: "images/fitr-faculty.jpg",
    name: "ФИТР",
    fullname: "Факультет информационных технологий и робототехники",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, ул. Хмельницкого, 9, учебный корпус 11-А",
  }),
  new Faculty({
    image: "images/ATF.webp",
    name: "АТФ",
    fullname: "Автотракторный факультет",
    address:
      "Адрес: 220013, г. Минск, ул. Я. Коласа, 12, учебный корпус №8, 220013, г. Минск, Республика Беларусь",
  }),
  new Faculty({
    image: "images/EF.jpg",
    name: "ЭФ",
    fullname: "Энергетический факультет",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, пр. Независимости 65/2, учебный корпус № 2",
  }),
  new Faculty({
    image: "images/WTF.jpg",
    name: "ВТФ",
    fullname: "Военно-технический факультет",
    address:
      "Адрес: Республика Беларусь,220013 г. Минск, пр. Независимости, 59, учебный корпус 4",
  }),
  new Faculty({
    image: "images/FTUG.jpg",
    name: "ФТУГ",
    fullname: "Факультет технологий управления и гуманитаризации",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, ул. Я. Коласа, 14, корпус 9",
  }),
  new Faculty({
    image: "images/FMMP.jpg",
    name: "ФММП",
    fullname: "Факультет маркетинга, менеджмента, предпринимательства",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, пр.Независимости, 67, учебный корпус 18",
  }),
];

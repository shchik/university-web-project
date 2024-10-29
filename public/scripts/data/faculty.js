export class Faculty {
  #id;
  #image;
  #name;
  #fullname;
  #address;
  specialities;

  constructor(OneFaculty) {
    this.#id = OneFaculty.id;
    this.#image = OneFaculty.image;
    this.#name = OneFaculty.name;
    this.#fullname = OneFaculty.fullname;
    this.#address = OneFaculty.address;
    (this.specialities = []),
      OneFaculty.specialities.forEach((speciality) => {
        this.specialities.push(speciality);
      });
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
  getId() {
    return this.#id;
  }
}

export function getFaculty(facultyId) {
  let matchingFaculty;
  faculties.forEach((faculty) => {
    if (faculty.getId() === facultyId) {
      matchingFaculty = faculty;
    }
  });
  return matchingFaculty;
}

export let faculties = [
  new Faculty({
    id: "1",
    image: "images/faculty-images/fitr-faculty.jpg",
    name: "ФИТР",
    fullname: "Факультет информационных технологий и робототехники",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, ул. Хмельницкого, 9, учебный корпус 11-А",
    specialities: [
      {
        image: "images/speciality-images/poit.jpg",
        name: "ПОИТ",
        fullname: "Программное обеспечение информационных технологий",
        placesCount: 30,
      },
      {
        image: "images/speciality-images/isit.jpg",
        name: "ИСИТ",
        fullname:
          "Информационные системы и технологии в представлении и обработки информации",
        placesCount: 30,
      },
      {
        image: "images/speciality-images/sapr.jpg",
        name: "САПР",
        fullname: "Информационные системы и технологии на заводе",
        placesCount: 30,
      },
    ],
  }),
  new Faculty({
    id: "2",
    image: "images/faculty-images/ATF.webp",
    name: "АТФ",
    fullname: "Автотракторный факультет",
    address:
      "Адрес: 220013, г. Минск, ул. Я. Коласа, 12, учебный корпус №8, 220013, г. Минск, Республика Беларусь",
    specialities: [
      {
        image: "images/speciality-images/ATF-1.jpg",
        name: "АТМТК(Аэ)",
        fullname:
          "Автомобили, тракторы, мобильные и технологические комплексы Автомобилестроение (электроника)",
        placesCount: 25,
      },
      {
        image: "images/speciality-images/ATF-2.jpg",
        name: "АТМТК(ЭИТС)",
        fullname:
          "Автомобили, тракторы, мобильные и технологические комплексы Электрические и автономные транспортные средства",
        placesCount: 40,
      },
      {
        image: "images/speciality-images/ATF-3.jpg",
        name: "АТМТК(ГиЛА)",
        fullname:
          "Автомобили, тракторы, мобильные и технологические комплексы Грузовые и легковые автомобили",
        placesCount: 25,
      },
    ],
  }),
  new Faculty({
    id: "3",
    image: "images/faculty-images/EF.jpg",
    name: "ЭФ",
    fullname: "Энергетический факультет",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, пр. Независимости 65/2, учебный корпус № 2",
    specialities: [
      {
        image: "images/speciality-images/EF-1.jfif",
        name: "ПТТ",
        fullname: "Промышленная теплоэнергетика и теплотехника",
        placesCount: 30,
      },
      {
        image: "images/speciality-images/EF-1.jfif",
        name: "ТЭС",
        fullname: "Тепловые электрические станции",
        placesCount: 30,
      },
      {
        image: "images/speciality-images/EF-1.jfif",
        name: "ЭС",
        fullname: "Электрические станции",
        placesCount: 30,
      },
    ],
  }),
  new Faculty({
    id: "4",
    image: "images/faculty-images/WTF.jpg",
    name: "ВТФ",
    fullname: "Военно-технический факультет",
    address:
      "Адрес: Республика Беларусь,220013 г. Минск, пр. Независимости, 59, учебный корпус 4",
    specialities: [
      {
        image: "",
        name: "ПОИТ",
        fullname: "Программное обеспечение информационных технологий",
        placesCount: 30,
      },
      {
        image: "",
        name: "ИСИТ",
        fullname:
          "Информационные системы и технологии в представлении и обработки информации",
        placesCount: 30,
      },
      {
        image: "",
        name: "САПР",
        fullname: "Информационные системы и технологии на заводе",
        placesCount: 30,
      },
    ],
  }),
  new Faculty({
    id: "5",
    image: "images/faculty-images/FTUG.jpg",
    name: "ФТУГ",
    fullname: "Факультет технологий управления и гуманитаризации",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, ул. Я. Коласа, 14, корпус 9",
    specialities: [
      {
        image: "",
        name: "ПОИТ",
        fullname: "Программное обеспечение информационных технологий",
        placesCount: 30,
      },
      {
        image: "",
        name: "ИСИТ",
        fullname:
          "Информационные системы и технологии в представлении и обработки информации",
        placesCount: 30,
      },
      {
        image: "",
        name: "САПР",
        fullname: "Информационные системы и технологии на заводе",
        placesCount: 30,
      },
    ],
  }),
  new Faculty({
    id: "6",
    image: "images/faculty-images/FMMP.jpg",
    name: "ФММП",
    fullname: "Факультет маркетинга, менеджмента, предпринимательства",
    address:
      "Адрес: Республика Беларусь, 220013, г. Минск, пр.Независимости, 67, учебный корпус 18",
    specialities: [
      {
        image: "",
        name: "ПОИТ",
        fullname: "Программное обеспечение информационных технологий",
        placesCount: 30,
      },
      {
        image: "",
        name: "ИСИТ",
        fullname:
          "Информационные системы и технологии в представлении и обработки информации",
        placesCount: 30,
      },
      {
        image: "",
        name: "САПР",
        fullname: "Информационные системы и технологии на заводе",
        placesCount: 30,
      },
    ],
  }),
];

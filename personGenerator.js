const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    middleNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Дмитриев",
            "id_3": "Андреев",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Данилов",
            "id_8": "Федоров",
            "id_9": "Борисов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Сергеев",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Антонов"
        }
    }`,
    profFemaleJson: `{  
        "count": 7,
        "list": {
            "id_1": "Ментор SkillFactory",
            "id_2": "Стюардесса",
            "id_3": "Стоматолог",
            "id_4": "HR-менеджер",
            "id_5": "Data-аналитик",
            "id_6": "Организатор праздников",
            "id_7": "Космитолог"
        }
    }`,
    profMaleJson: `{  
        "count": 7,
        "list": {
            "id_1": "Программист",
            "id_2": "Кочегар",
            "id_3": "Слесарь",
            "id_4": "Лесоруб",
            "id_5": "Шахтер",
            "id_6": "Строитель",
            "id_7": "Крановщик"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Светлана",
            "id_3": "Анна",
            "id_4": "Марина",
            "id_5": "Вероника",
            "id_6": "Виктория",
            "id_7": "Галина",
            "id_8": "Полина",
            "id_9": "Агафия",
            "id_10": "Алина"
        }
    }`,

    mounthDateJson: `{  
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,
     
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
     randomDate : function (mounthDateJson){
        this.randomValue(this.mounthDateJson)
    if (this.randomValue(this.mounthDateJson) === "Февраля"){
        return   this.randomIntNumber (max = 28, min = 1)+ " " + this.randomValue(this.mounthDateJson) + " "  + this.randomIntNumber (max = 1979, min = 2000)+ " " + " года рождения";
     }
   else if (this.randomValue(this.mounthDateJson) === "Апреля"){
        return   this.randomIntNumber (max = 30, min = 1)+ " " + this.randomValue(this.mounthDateJson)+ " " + this.randomIntNumber (max = 1979, min = 2000)+ " " + " года рождения";
     }
     else if (this.randomValue(this.mounthDateJson) === "Июня"){
        return   this.randomIntNumber (max = 30, min = 1)+ " " + this.randomValue(this.mounthDateJson)+ " " + this.randomIntNumber (max = 1979, min = 2000)+ " " + " года рождения";
     }
     else if (this.randomValue(this.mounthDateJson) === "Августа"){
        return  this.randomIntNumber (max = 30, min = 1)+ " " + this.randomValue(this.mounthDateJson)+ " " + this.randomIntNumber (max = 1979, min = 2000)+ " " + " года рождения";
     }
     else if (this.randomValue(this.mounthDateJson) === "Ноября"){
       return this.randomIntNumber (max = 30, min = 1)+ " " + this.randomValue(this.mounthDateJson)+ " " + this.randomIntNumber (max = 1979, min = 2000)+ " " + " года рождения";
     }else{
        return   this.randomIntNumber (max = 31, min = 1)+ " " + this.randomValue(this.mounthDateJson)+ " " + this.randomIntNumber (max = 1979, min = 2000)+ " " + " года рождения";
     
    }
},

    getPerson: function () {
        this.person = {};
        let gender = Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        if (gender === "Женщина"){
            this.person.firstName =this.randomValue(this.firstNameFemaleJson);
            this.person.surName =this.randomValue(this.surnameJson ) + "a" ;
            this.person.middleName =this.randomValue(this.middleNameJson ) + "нa" ;
            this.person.professions =this.randomValue(this.profFemaleJson);
            this.person.gender = "Женщина";
            this.person.Date =this.randomDate ()
           
        }
        if (gender=="Мужчина"){
            
            this.person.firstName = this.randomValue(this.firstNameMaleJson);
            this.person.surName =this.randomValue(this.surnameJson);
            this.person.middleName =this.randomValue(this.middleNameJson ) + "ич";
            this.person.professions =this.randomValue(this.profMaleJson );
            this.person.gender = "Мужчина";
            this.person.Date =this.randomDate ()
        }
      
       
        return this.person;
    }
};


window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;

    const initPerson2 = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surName;

    const initGender = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;

    const initYearDate = personGenerator.getPerson();
    document.getElementById('birthYearOutput').innerText = initPerson.Date; 

    const initmiddleName = personGenerator.getPerson();
    document.getElementById('middleNameeOutput').innerText = initPerson.middleName; 

    const initProfessions = personGenerator.getPerson();
    document.getElementById('professionsOutput').innerText = initPerson.professions; 

};

document.querySelector("#but1").addEventListener("click", ()=>{
   // location.reload();
   const initPerson = personGenerator.getPerson();
   document.getElementById('firstNameOutput').innerText = initPerson.firstName;

   const initPerson2 = personGenerator.getPerson();
   document.getElementById('surnameOutput').innerText = initPerson.surName;

   const initGender = personGenerator.getPerson();
   document.getElementById('genderOutput').innerText = initPerson.gender;

   const initYearDate = personGenerator.getPerson();
   document.getElementById('birthYearOutput').innerText = initPerson.Date; 

   const initmiddleName = personGenerator.getPerson();
   document.getElementById('middleNameeOutput').innerText = initPerson.middleName; 

   const initProfessions = personGenerator.getPerson();
   document.getElementById('professionsOutput').innerText = initPerson.professions; 
})
document.querySelector("#but2").addEventListener("click", ()=>{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = "Генерация Имени";

    const initPerson2 = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = "Генерация Фамилии";

    const initGender = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = "Генерация пола";

    const initYearDate = personGenerator.getPerson();
    document.getElementById('birthYearOutput').innerText = "Генерация даты"; 

    const initmiddleName = personGenerator.getPerson();
    document.getElementById('middleNameeOutput').innerText = "Генерация отчества"; 

    const initProfessions = personGenerator.getPerson();
    document.getElementById('professionsOutput').innerText = "Генерация провессии"; 
})




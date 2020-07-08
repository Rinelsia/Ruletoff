"use strict"
//вешаем обработчик с проверкой события, прогрузился ли дом элементы
document.addEventListener('DOMContentLoaded', function(){
    //ищем список всех селекторов кнопок
    var modalIn = document.querySelectorAll('.add-modal'),
        x = document.getElementById("x");
    
    
    //функция добавляет класс актив, для включения окна
    function modalWindow(a){
        let md = document.querySelector('.modal-window').classList.add('activ');
        console.log(a);
    }
    
    //удаляет класс актив
    function modalX(x){
        let md = document.querySelector('.modal-window').classList.remove('activ');
    }
    //
    modalIn.forEach(function(e){
        e.addEventListener('click', modalWindow);
    });
    x.addEventListener('click', modalX);
});
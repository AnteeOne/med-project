function makeStraight() {
    let objects = document.getElementsByClassName("indicator");
    let gap = 50;
    let max = 0;
    for (let i = 0; i < objects.length; i++) {
        let element = objects[i].children;
        let indicator_length = element[0].textContent.length;
        let indicator_value_length = element[1].textContent.length;
        if (indicator_length + indicator_value_length > max) {
            max = indicator_length + indicator_value_length;
        }
    }
    for (let i = 0; i < objects.length; i++) {
        let element = objects[i].children;
        let indicator_length = element[0].textContent.length;
        let indicator_value_length = element[1].textContent.length;
        let gap = max - indicator_value_length - indicator_length;
        gap *= 10;
        element[1].style.paddingLeft =  `${gap}px`;
    }
}

makeStraight();

// validating

function addClass(el, className) {
    if (!el.classList.contains(className)) {
        el.classList.add(className);
    }
}

function rmClass(el, className) {
    el.classList.remove(className);
}

var name = document.getElementById('name-cab');
var soname = document.getElementById('soname');
var height = document.getElementById('height-cab');
var weight = document.getElementById('weight-cab');
var age = document.getElementById('age-cab');
var gender = document.getElementById('gender-cab');
var smoking = document.getElementById('smoking-cab')

function validateDig(form, reg, max) {
    form.addEventListener('blur', function (e) {
        if (reg.test(e.target.value) && e.target.value > 0 && e.target.value < max) {
            e.target.style.border = '2px solid lightgreen';
        } else {
            e.target.style.border = '2px solid red';
        }
    });
}

function validateStr(form, reg) {
    form.addEventListener('blur', function (e) {
        if (reg.test(e.target.value)) {
            e.target.style.border = '2px solid lightgreen';
        } else {
            e.target.style.border = '2px solid red';
        }
    });
}

// validateStr(name, /[А-Я][а-я]+/);
validateStr(soname, /[А-Я][а-я]+/);
validateStr(gender, /м|ж/);
validateDig(height, /\d+/, 250);
validateDig(weight, /\d+/, 150);
validateDig(age, /\d+/, 100);
validateStr(smoking, /да|нет/i);
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        form1.answer.value += btntext;
    });
}

function sin() {
    form1.answer.value = Math.sin(form1.answer.value);
}

function cos() {
    form1.answer.value = Math.cos(form1.answer.value);
}

function tan() {
    form1.answer.value = Math.tan(form1.answer.value);
}

function pow() {
    form1.answer.value = Math.pow(form1.answer.value, 2);
}

function sqrt() {
    form1.answer.value = Math.sqrt(form1.answer.value, 2);
}

function log() {
    form1.answer.value = Math.log(form1.answer.value);
}

function ln() {
    form1.answer.value = 2, 303 * Math.log(form1.answer.value);
}

function e() {
    form1.answer.value = Math.exp(form1.answer.value);
}

function fact() {
    var i, num, f;
    f = 1
    num = form1.answer.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    form1.answer.value = f;
}

function backspc() {
    form1.answer.value = form1.answer.value.substr(0, form1.answer.value.length - 1);
}


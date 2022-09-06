let screen = document.getElementById('screen');
const theme = document.querySelector('.theme-toggler');
screen.value = '';
function display(num) { 
    screen.value += num;
};
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        if (screen.value = '') {
            alert('INSERT VALUES')
        } else {
            alert('INVALID')
        }
    }
};

function Clear() {
    screen.value = '';
};
function del() {
    screen.value = screen.value.slice(0, -1);
};

theme.onclick = () => {
    theme.classList.toggle('active');

    if( theme.classList.contains('active')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
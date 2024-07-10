document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        console.log('Начало');

        setTimeout(function() {
            console.log('2 секунды прошло');
        }, 2000);

        setTimeout(function() {
            console.log('3 секунды прошло');
        }, 3000);
    });
});
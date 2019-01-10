
function counting_down() {
    var counting_down = new Date();

    var dzien = counting_down.getDate();
    if (dzien < 10) dzien = '0' + dzien;

    var month = counting_down.getMonth() + 1;
    if (month < 10) month = '0' + month;

    var year = counting_down.getFullYear();
    
    var hour =counting_down.getHours();
    if (hour < 10) hour = '0' + hour;

    var minute = counting_down.getMinutes();
    if (minute < 10) minute = '0' + minute;

    var seconds = counting_down.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;


    document.getElementById('watch').innerHTML = dzien + '/' + month + '/' + year + '   |   ' + hour + ':' + minute + ':' + seconds;
    
    setTimeout('counting_down()', 1000);
    
}



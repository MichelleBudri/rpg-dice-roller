/* tooltip */
$('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
})  

/* Random Numbers */
function getRandom(min, max) {
    type = (max - 1);

    min = Math.ceil(min);
    max = Math.floor(max);
    calc = Math.floor(Math.random() * (max - min)) + min;
    
    document.getElementById("diceType").innerHTML = "1D"+type;
    document.getElementById("result").innerHTML = calc;
    
    $('.description').removeClass('display-none');
}
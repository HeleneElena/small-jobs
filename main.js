// Максимальное количество снежинок на экране
let snowmax = 35;
// Массив цветов снежинок
let snowcolor = new Array("#AAAACC","#DDDDFF","#CCCCDD","#F3F3F3","#F0FFFF","#FFFFFF","#EFF5FF")
// Массив шрифты для снежков
let snowtype = new Array("Arial Black","Arial Narrow","Times","Comic Sans MS");
// Знак для снежков
let snowletter = "*";
// Скорость падение
let sinkspeed = 0.6;
// Максимальный размер снежков 
let snowmaxsize = 40;
// Минимальный размер снежков
let snowminsize = 8;
let snowingzone = 1;
  
// Массив снежков
let snow = new Array();
// Отступы с низу
let marginbottom;
// Отступы с право
let marginright;
// Таймер
let timer;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
// Данные о браузере
let browserinfos = navigator.userAgent;
let ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
let ns6 = document.getElementById&&!document.all;
let opera = browserinfos.match(/Opera/);
// Браузер
let browserok = ie5 || ns6 || opera;

function randommaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}
function initsnow() {
    if (ie5 || opera) {
        marginbottom=document.body.clientHeight;
        marginright=document.body.clientWidth;
    }
    else if (ns6) {
        marginbottom=window.innerHeight;
        marginright=window.innerWidth;
    }
    let snowsizerange = snowmaxsize - snowminsize;
    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i]= 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i);
        snow[i].style.fontFamily = snowtype[randommaker(snowtype / length)];
        snow[i].size = randommaker(snowsizerange) + snowminsize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
        snow[i].sink = sinkspeed * snow[i].size / 5;
        if (snowingzone == 1) {snow[i].posx = randommaker(marginright - snow[i].size)}
        if (snowingzone == 2) {snow[i].posx = randommaker(marginright / 2 - snow[i].size)}
        if (snowingzone == 3) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4}
        if (snowingzone == 4) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2}
        snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
        snow[i].style.left = snow[i].posx + "px";
        snow[i].style.top = snow[i].posy + "px";
    }
    movesnow();
}
function movesnow() {
    for (i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
        snow[i].style.top = snow[i].posy + "px";
        if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
            if (snowingzone == 1) {snow[i].posx = randommaker(marginright - snow[i].size)}
            if (snowingzone == 2) {snow[i].posx = randommaker(marginright / 2 - snow[i].size)}
            if (snowingzone == 3) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4}
            if (snowingzone == 4) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2}
            snow[i].posy = 0;
        }
    }
    let timer = setTimeout("movesnow()", 25);
}
 
for (i = 0; i <= snowmax; i++) {
    document.write("<span id='s" + i + "' style='position:absolute;top:-" + snowmaxsize + "px;'>" + snowletter + "</span>");
}
 
if (browserok) {
    window.onload = initsnow;
}
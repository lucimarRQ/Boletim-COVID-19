var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1739 / 3;
canvas.height = 3092 / 3;

var img = new Image();
img.src = 'layoutModel.png';
// font.src = 'proxima.otf';

img.onload = function(e) {
    ctx.drawImage(img, 0, 0, 1739 / 3, 3092 / 3);

    ctx.fillStyle = "#FF6801";
    //data
    ctx.font = "bolder 33px Arial";
    ctx.fillText(data, 383, 193);

    ctx.fillStyle = "#ffff";
    ctx.font = "bolder 55px Arial";
    //monitorados
    ctx.fillText(monitorados, 45, 305);
    //suspeitos
    ctx.fillText(suspeitos, 45, 395);

    ctx.font = "bolder 45px Arial";
    //descartados
    ctx.fillText(descartados, 30, 480);

    ctx.font = "bolder 75px Arial";
    //positivo
    ctx.fillText(positivo, 30, 600);

    ctx.font = "bolder 40px Arial";
    //recuperados
    ctx.fillText(recuperados, 215, 557);
    //domiciliar
    ctx.fillText(domiciliar, 215, 620);
    //hospitalizado
    ctx.fillText(hospitalizado, 215, 680);
    //exame
    ctx.fillText(exame, 25, 745);
    //obitos
    ctx.fillText(obitos, 25, 810);

};
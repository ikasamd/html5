var img = new Image();    //画像オブジェクト作成
img.src = "img/316x384.png";  //写真のパスを指定する

function draw1(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(img,0,0);
}
function main(){
    draw1();
}
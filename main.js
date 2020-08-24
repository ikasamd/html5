var outsite = "https://rawgithub.com/ikasamd/html5/master/";
var img = new Image();    //画像オブジェクト作成
img.src = outsite + "img/316x384.png";  //写真のパスを指定する

function draw1() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.drawImage(img, 0, 0);
}

function init(){
    if (window.GamepadEvent) {
        // ゲームパッドを接続すると実行されるイベント
        window.addEventListener("gamepadconnected", function (e) {
            console.log("ゲームパッドが接続された");
            console.log(e.gamepad);
        });
        // ゲームパッドの接続を解除すると実行されるイベント
        window.addEventListener("gamepaddisconnected", function (e) {
            console.log("ゲームパッドの接続が解除された");
            console.log(e.gamepad);
        });
    }else{
        console.log("GamepadEvent未対応");
    }
}
function main() {
    console.log("main:start")
    init();
    draw1();
    console.log("main:end")
}
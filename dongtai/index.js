// $(function(){
//     // 下拉菜单
//     var menu=$("#nav li");
//     menu.each(function(i){
//         if($(this).children().is("ul")){
//             $(this).css("background","url(image1/BG.avif) 30px right no-repeat");
//             $(this).mouseover(function(){
//                 $(this).children("ul").show();
//             });
//             $(this).mouseout(function(){
//                 $(this).children("ul").hide("");
//             });
//         }
//     });
// });
var user =prompt("请输入用户名：");
if(!!user){
    var ok=confirm("你输入的用户名为：\n"+user+"\n请确认。");
    if(ok){
        alert("欢迎你：\n"+user);

    }
    else{
        user=prompt("请重新输入你的用户名：");
        alert("欢迎你：\n"+user);
    }
}
else{
    user=prompt("请输入你的用户名：");
}
function openW(url){
    var w=screen.availWidth/2;
    var h=screen.availHeight/2;
    var t=(screen.availHeight-h)/2;
    var l=(screen.availWidth-w)/2;
    var p="top="+t+",left="+l+",width="+w+",height="+h;
    var win=window.open(url,"url",p);
}
openW("https://world.taobao.com/");

$(function () {
    $("#kezd").click(init);
//    init();
});

function init() {
//    $("div").eq(0).text("Ez a div szövege");
//    $("div").eq(0).html("Ez a <b>div</b> szövege<br>");
//    $("div").eq(0).append("Ez a <b>div</b> másik szövege");
//    alert($("div").eq(0).text());
    $("#jatekter").empty();
    for (var i = 0; i < 5; i++) {
        $("#jatekter").append('<div>');
        $("#jatekter div").eq(i).append('<img>');
        $("#jatekter div img").eq(i).attr('src', 'kep/szazalek.jpg');
        $("#jatekter div img").eq(i).attr('alt', 'kep');
        $("#jatekter div img").eq(i).attr('width', '100px');
    }
    $("#jatekter div").addClass("szazalek");
    $("#jatekter div").css({"background-color": "cyan", "padding": "20px"});
   
    
    
    $("#jatekter div").hover(
        function () {
        $(this).css({"background-color": "pink", "padding": "20px"});
                    },
        function () {
        $(this).css({"background-color": "cyan", "padding": "20px"});
                    }       );
        
        
        
//    $("#jatekter div").mouseenter(function () {
//        $(this).css({"background-color": "pink", "padding": "20px"});
//    });
//    $("#jatekter div").mouseleave(function () {
//        $(this).css({"background-color": "cyan", "padding": "20px"});
//    });

}
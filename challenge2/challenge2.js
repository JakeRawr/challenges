$(document).ready(function(){
    $("button").click(function(){
        $("ol").append("<li>" + $("#box").val() + "</li>")
        $("li").click(function(){
            $(this).remove();
        });
      });
    
    $("input").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode :event.which);
        if(keycode == '13'){
            $("ol").append("<li>" + $("#box").val() + "</li>")
            $("li").click(function(){
                $(this).remove();
            });
        }
    });
});
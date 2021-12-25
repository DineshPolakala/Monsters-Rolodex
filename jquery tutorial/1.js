$(document).ready(function(){

    $("#paragraph").draggable({
        axis : "y",
        revert:true
    });

    $("#button").click(function(){
        //$("p").css("font-color","red");
        $("#paragraph").text("Dinesh");
    })

})

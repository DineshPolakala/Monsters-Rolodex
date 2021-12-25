//  click on the staft reset button
        //  are we playing
        // yes
            //    reload page
        //  no 
            //  show trails left
            //  change bottom text to reset game
//  cerate random fruit

// defing random step

//  check if fruit is too low

        // no
            // derease step
        // yes 
            // is trails left
                //  yes 
                    // decrease trail by one
                //  no
                    // show game over, text : start game

//  slice a fruit
    //  play sound
    // explode fruit
// click on the staft reset button
var playing  = false;
var score ;
var trailsLeft;
$(function(){
    $("#startreset").click(function(){
        //  are we playing
        // yes
        if(playing == true)
            location.reload();
        //  no
        else{
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            // show trails left
            $("#trailsleft").show();
            trailsLeft = 3;
            addHearts();

        }
    })

});

function addHearts(){
    for(let i =0; i <trailsLeft; i++)
    {
        $("#trailsleft").append('<img src="./images/heart.jfif" alt="heart">')
    }
}





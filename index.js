// chnage h1 color to red
// $("h1").css("color","red");

//select ul and on and then function with click and li to toggleclass "completed"
$("ul").on("click", "li" ,function(){
$(this).toggleClass("completed");
});




// fade out and then remove the li

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

});




$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var toDoText=$(this).val();
    $(this).val("");
    $("ul").append("<li> <span><i class='fas fa-trash'></i></span>  " +" "+ toDoText +" </li>")
	}
});






$ (".fa-plus").click(function(){

	$("input[type='text'").fadeToggle();
})





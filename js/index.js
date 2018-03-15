




//function(e){
//("#c-slide").carousel({
//interval:5000
//});
//("#c-slide a.left").click(function(){
//(".carousel").carousel("prev");
//});
//("#c-slide a.right").click(function(){
//(".carousel").carousel("next");
//});
//});
//
//console.log($)
//定时器 轮播
fun1 = function(){
	for(var i = 0;i<3;i++){
		if($('.customer').eq(i).is(":visible")){
			var val = $('.customer').eq(i).text();
			// console.log(val);
			switch(val){
				case '360':
				$("#360").attr("src","images/360logo.png");
				$("#qt").attr("src","images/Qtone-Educaition_0.png");
				$("#en").attr("src","images/Fun-dubbing_0.png");
				$('#customer_say').css('background-color','#fffefa');
				
				break;
				case '全通教育':
				$("#qt").attr("src","images/Qtone-Educaition.png");
				$("#360").attr("src","images/360logo_0.png");
				$("#en").attr("src","images/Fun-dubbing_0.png");
				$('#customer_say').css('background-color','#f9fdf2');
				
				break;
				case '英语趣配音':
				$("#en").attr("src","images/Fun-dubbing.png");
				$("#360").attr("src","images/360logo_0.png");
				$("#qt").attr("src","images/Qtone-Educaition_0.png");
				$('#customer_say').css('background-color','#fafdfb');
				
				break;
			}
		}
	}
}
var time = setInterval(fun1,800);

$('#c-slide').mouseover(function(){
	 clearInterval(time);
})
$('#c-slide').mouseout(function(){
	time = setInterval(fun1,800);
})

$('#360').click(function(){
	$('#customer_say').css('background-color','#fffefa');
	$("#360").attr("src","images/360logo.png");
	$("#qt").attr("src","images/Qtone-Educaition_0.png");
	$("#en").attr("src","images/Fun-dubbing_0.png");
});
$('#qt').click(function(){
	$('#customer_say').css('background-color','#f9fdf2');
	$("#qt").attr("src","images/Qtone-Educaition.png");

	$("#360").attr("src","images/360logo_0.png");
	$("#en").attr("src","images/Fun-dubbing_0.png");
});
$('#en').click(function(){
	$('#customer_say').css('background-color','#fafdfb');
	$("#en").attr("src","images/Fun-dubbing.png");

	$("#360").attr("src","images/360logo_0.png");
	$("#qt").attr("src","images/Qtone-Educaition_0.png");
});

$('#menu_button').click(function(){
	$('#toggle_menu').slideToggle();
})

myVid=document.getElementById("video1");
myVid.playbackRate=1;
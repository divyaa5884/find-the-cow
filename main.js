															/* Javascript code -FindTheCow */

$(document).ready(function(){
		        $('#cow_img').hide();
		        $('#cowim').show();
		});

window.onload=function()  {
	document.getElementById("my_audio").play();

};

var r_x=Math.floor(Math.random() * (1265 - 10 + 1)) + 10;		//	(end - start + 1) + start;
var r_y=Math.floor(Math.random() * (600 - 10 + 1)) + 10;
console.log("randomNO._x: "+r_x);
console.log("randomNO._y: "+r_y);
document.addEventListener('mousemove',function(evt) {
	var pos = getMousePos(evt);
	console.log("posx: "+pos.x);
	console.log("posy: "+pos.y);
	var o =
		{
			left:r_x-75,
			top:r_y-75
		};
	dis=Math.sqrt(((r_x-pos.x)*(r_x-pos.x))+((r_y-pos.y)*(r_y-pos.y)));
	if(pos.x>=(r_x-75) && pos.x<=(r_x+75) && pos.y>=r_y-75 && pos.y<=r_y+75)
	{
			$("#cow_img").show().offset(o);
			//$('#cow_img').css('cursor','pointer');
			document.getElementById("my_audio").pause();
			//alert("You have found TheInvisibleCow !");
	}
	else
	{
		//console.log("Hello");
		// $("#cow_img").hide();
		aud_speed(dis);
	}
});


function getMousePos(evt) {
	return {
		x: evt.clientX,
		y: evt.clientY
	};
}
function aud_speed(dis)  {
	var ad = document.getElementById("my_audio");
	console.log("DIS: "+dis);
	var playbackRate = (4-(dis/380))/1.5;
	ad.playbackRate = playbackRate;
	console.log("plyb "+ad.playbackRate);
};

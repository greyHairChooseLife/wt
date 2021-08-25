//for(let i=0; i<arr_note.length; i++){
//	arr_note[i].addEventListener("mouseenter", function(){
//		arr_content[i].style.display = 'block';
//	});
//	arr_note[i].addEventListener("mouseleave", function(){
//		arr_content[i].style.display = 'none';
//	});
//}
//
//arr_note[0]
//
//
//dragdrop_even_taget

let x1;
let x2;
let y1;
let y2;

L1.addEventListener("mousedown", function(e){
	x1 = e.clientX;
	y1 = e.clientY;
});

L1.addEventListener("mouseup", function(e){
	x2 = e.clientX;
	y2 = e.clientY;
});


L2.addEventListener("mouseenter", function(){
alert(x1);
alert(x2);
alert(y1);
alert(y2);
});

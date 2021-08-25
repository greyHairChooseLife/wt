for(var i=0; i < content_class.length; i++){
	content_class[i].style.display = 'none';
}

for(let i=0; i<arr_note.length; i++){
	arr_note[i].addEventListener("mouseenter", function(){
		arr_content[i].style.display = 'block';
	});
	arr_note[i].addEventListener("mouseleave", function(){
		arr_content[i].style.display = 'none';
	});
}

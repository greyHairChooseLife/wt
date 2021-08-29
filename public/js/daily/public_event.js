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


keyboard_shortcut_help.addEventListener('mouseenter', () => {
	keyboard_shortcut_help_result.style.display = 'block';
	everything.style.opacity = '50%';
});

keyboard_shortcut_help.addEventListener('mouseleave', () => {
	keyboard_shortcut_help_result.style.display = 'none';
	everything.style.opacity = '100%';
});

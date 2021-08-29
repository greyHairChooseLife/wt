let trigger = false;
let selected_content;
let selected_content_status = 'none';


// judge a 'mod' key(like shift or alt or ctrl etc...) is being activated
document.addEventListener("keydown", e => {
	if(e.shiftKey == true)
		trigger = true;
})
document.addEventListener("keyup", e => {
	if(e.shiftKey == false)
		trigger = false;
})


// navigation by key stroke
document.addEventListener("keyup", e => { 
	if(trigger == true && e.key == 'ArrowUp'){
		selected_direction = 'down';
		move(selected_direction);
	}
	else if(trigger == true && e.key == 'ArrowDown'){
		selected_direction = 'up';
		move(selected_direction);
	}
	else if(trigger == true && e.key == 'ArrowLeft'){
		selected_direction = 'right';
		move(selected_direction);
	}
	else if(trigger == true && e.key == 'ArrowRight'){
		selected_direction = 'left';
		move(selected_direction);
	}
});


// targeting for event as save target's name in variable
document.addEventListener("keyup", e => {
	if(trigger == true){
		switch(e.key){
			case `!`:
				L1.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==0)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = L1_content;
				break;
			case `Q`:
				L2.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==1)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = L2_content;
				break;
			case `A`:
				L3.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==2)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = L3_content;
				break;
			case `Z`:
				L4.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==3)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = L4_content;
				break;
			case `@`:
				R1.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==4)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = R1_content;
				break;
			case `W`:
				R2.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==5)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = R2_content;
				break;
			case `S`:
				R3.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==6)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = R3_content;
				break;
			case `X`:
				R4.style.border = 'solid 5px red';
				for(var i=0; i<arr_note.length; i++){
					if(i==7)
						continue;
					arr_note[i].style.border = '';
				}
				selected_content = R4_content;
				break;
		}
	}
});


// open and close note_content
document.addEventListener("keyup", e => { 
	if(e.key == 'Enter'){
		if(selected_content.style.display == 'block')	  // hand over the status of target(that is returned from conditional, so we know which event will be occured
			selected_content_status = 'block';
		else if(selected_content.style.display == 'none')
			selected_content_status = 'none';

		if(selected_content_status == 'block'){
			selected_content.style.display = 'none';
			selected_content_status = 'none';
		}
		else if(selected_content_status == 'none'){
			selected_content.style.display = 'block';
			selected_content_status = 'block';
		}
	}
});


//set variable;
let x1;
let x2;
let y1;
let y2;

let compared_x;
let compared_y;

let selected_direction; // up, down, left, right
let cancel_move; // exception like accident click



//get coordiates %% next
for(var i=0; i<arr_note.length; i++){
	arr_note[i].addEventListener("mousedown", function(e){
		x1 = e.clientX;
		y1 = e.clientY;
	});
	arr_note[i].addEventListener("mouseup", function(e){
		x2 = e.clientX;
		y2 = e.clientY;
		compare_coordinates(x1, x2, y1, y2);
		select_direction(compared_x, compared_y);
		move(selected_direction);

	});	
}
dragdrop_even_taget.addEventListener("mousedown", function(e){
	x1 = e.clientX;
	y1 = e.clientY;
});
dragdrop_even_taget.addEventListener("mouseup", function(e){
	x2 = e.clientX;
	y2 = e.clientY;
	compare_coordinates(x1, x2, y1, y2);
	select_direction(compared_x, compared_y);
	move(selected_direction);
});


//compare absolute value of coordiates to know, navigate vertically or horizontally
function compare_coordinates(x1, x2, y1, y2){
	if(x2-x1 >= 0)	
		compared_x = x2-x1;
	else	
		compared_x = (x2-x1)*(-1);

	if(y2-y1 >= 0)	
		compared_y = y2-y1;
	else	
		compared_y = (y2-y1)*(-1);
};

//select move direction, up/down/left/right
function select_direction(compared_x, compared_y){
	if(compared_x == compared_y && compared_x == 0) return;  //selected_direction will be undefined
	if(compared_x >= compared_y){
		if(compared_x < window.innerWidth * 0.1 ){  //just in case they drag&drop accidently
			alert("too short movement");
			return;
		}
		if(x1 > x2)
			selected_direction = 'left';
		else
			selected_direction = 'right';
	}
	else
		if(compared_y < window.innerHeight * 0.1 ){
			alert("too short movement");
			return;
		}
		if(y1 > y2)
			selected_direction = 'up';
		else
			selected_direction = 'down';
}


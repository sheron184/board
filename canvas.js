
window.addEventListener("load",()=>{
	const canvas = document.querySelector("#canvas");
	const paint_on_hover_btn = document.querySelector("#paint_on_hover");
	const bucket = document.querySelector("#color_bucket");
	//resizing
	//canvas.setAttribute('width', "100%");
    //canvas.setAttribute('height', "100%");
    var canvas_holder = document.querySelector(".canvas-holder");
    var my_height = $(".canvas-holder").height();
    var my_width =  $(".canvas-holder").width();
    //console.log(my_width);
	canvas.height = my_height;
	canvas.width = my_width;
	const ctx = canvas.getContext("2d");


	//ctx.fillStyle = "red";
	//ctx.fillRect(10,10,50,50);
	//var imgData = ctx.getImageData(10,10,50,50);
	//console.log(imgData.data[1]);


	//ctx.fillRect(200,100,50,100);
	/*
	ctx.strokeStyle = "red";
	ctx.lineWidth = 5;
	ctx.strokeRect(100,100,200,500);
	
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 7;
	ctx.strokeRect(300,100,200,500);
	*/

	// == Painting == //


	//Variables
	let painting = false;
	let paint_on_hover = false;
	let hover = 0;
	let color_bucket = false;


	// ***************** actions **************** //
	
	function hover_paint(){
		if(!paint_on_hover){
			paint_on_hover = true;
			$("#paint_on_hover").addClass("hover_on");
		}else{
			paint_on_hover = false;
			$("#paint_on_hover").removeClass("hover_on");
		}
		
		//console.log(paint_on_hover);
	}
	function enable_bucket_fill(){
		if(!color_bucket){
			color_bucket = true;
			$("#color_bucket").addClass("color-bucket");
		}else{
			color_bucket = false;
			$("#color_bucket").removeClass("color-bucket");
		}
		
	}
	function startPosition(e){
		if(color_bucket){
			console.log("yo");
			bucket_fill();
			/*
			//$("#canvas").css("cursor","wait");
			var img_data = ctx.getImageData(e.offsetX,e.offsetY,1,1);
			var cordinates = [e.offsetX,e.offsetY];
			canvas_height = my_height;
			canvas_width  = my_width;
			y = cordinates[1];
			x = cordinates[0];
			var clicked_color = ctx.getImageData(cordinates[0],cordinates[1],1,1);
			var pixel_stack = [];
			var pixel = [x,y];
			pixel_stack.push(pixel);

			console.log(pixel_stack);
			//console.log(clicked_color);
			while(pixel_stack.length){
				pixel_stack.pop();
				var check_left = false;
				var check_right = false;

				while(y >= 0){
					y--;
					var this_img_data = ctx.getImageData(x,y,1,1);
					//console.log(this_img_data.data);
					if(!match_color(this_img_data.data,clicked_color.data)){
						break;
					}
					//console.log(y);
				}
				

				while(y <= canvas_height){
					y++;
					var img_data_1 = ctx.getImageData(x,y,1,1);
					if(match_color(this_img_data.data,clicked_color.data)){
						color = $("#color").val();
						var new_color = hexToRgb(color);
						for (n = 0; n < img_data.data.length; n += 4) {
								img_data.data[n+0] = new_color[0];
								img_data.data[n+1] = new_color[1];
								img_data.data[n+2] = new_color[2];
								img_data.data[n+3] = 255;
						}
						//console.log(y);
						ctx.putImageData(img_data,x,y);
					}else{
						break;
					}
					//break;
					//check left
					x--;
					if(x>0){
						var left_img_data = ctx.getImageData(x,y,1,1);
						if(match_color(left_img_data.data,clicked_color.data)){
							if(!check_left){
								var new_cordin = [x,y];
								check_left = true;
								pixel_stack.push(new_cordin);
							}else if(check_left){
								check_left == false;
							}
						}
					}
					//console.log(pixel_stack.length);
					//check right
					
					x = x+2;
					console.log(x);
					if(x<canvas_width){
						//console.log("yo");
						var right_img_data = ctx.getImageData(x,y,1,1);
						if(match_color(right_img_data.data,clicked_color.data)){
							if(!check_right){
								var new_cordin = [x,y];
								check_right = true;
								if(pixel_stack.push(new_cordin)){
									console.log("yo");
								}
							}else if(check_right){
								check_right = false;
							}
						}
					}
					x = x-2;
				
					break;
				}
				
				//console.log(y);	
			}
			
		*/
		}else{
			//console.log(cordinates);
			if(hover == 1){
				painting = false;
				ctx.beginPath();
				hover = 0;
			}else{
				//console.log(e);
				painting = true;
				draw(e);
			}	
		}	
	}
	function match_color(pixel_color,clicked_color){
		//color = $("#color").val();
		//var choosed_color = hexToRgb(color);
		//console.log(pixel_color);
		//console.log(clicked_color);
		return (clicked_color[0] == pixel_color[0] && clicked_color[1] == pixel_color[1] && clicked_color[2] == pixel_color[2] && clicked_color[3] == pixel_color[3]);
	}
	const hexToRgb = hex =>
	  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
	    .substring(1).match(/.{2}/g)
	    .map(x => parseInt(x, 16))
		//console.log(hexToRgb("#000000")); // [0, 51, 255]
		//console.log(hexToRgb("#03f")); //

	function finishedPosition(){
		if(!paint_on_hover){
			painting = false;
			ctx.beginPath();
		}
	}
	function draw(e){
		if(!painting) return;
		if(paint_on_hover){
			hover = 1;
		}
		stroke_width = $("#stroke_width").val();
	 	color = $("#color").val();
		ctx.lineWidth = stroke_width;
		ctx.strokeStyle = color;
		ctx.lineCap = 'round';

		ctx.lineTo(e.offsetX,e.offsetY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.offsetX,e.offsetY);
	}
	function startDraw(){
		startPosition();
	}
	function bucket_fill(img_data,cordinates){
		
	}



	// ***************** Event listerners **************** //

	canvas.addEventListener("mousedown",startPosition);
	canvas.addEventListener("mouseup",finishedPosition); 
	canvas.addEventListener("mousemove",draw);
	//canvas.addEventListener("mousemove",startDraw);

	//paint on hover
	paint_on_hover_btn.addEventListener("click",hover_paint); 
	bucket.addEventListener("click",enable_bucket_fill);


});
window.addEventListener("resize",()=>{
	var canvas_holder = document.querySelector(".canvas-holder");
    var my_height = $(".canvas-holder").height();
    var my_width =  $(".canvas-holder").width();
    //console.log(my_width);
	canvas.height = my_height;
	canvas.width = my_width;
});
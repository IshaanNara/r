var canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
rover_h=100;
rover_w=100;
rover_x=10;
rover_y=10;
b_img="mars.jpg";
r_img="rover.png";
function add(){
    b_imgtag=new Image();
    b_imgtag.onload=upload_b;
    b_imgtag.src=b_img;
   r_imgtag=new Image();
    r_imgtag.onload=uploadr;
    r_imgtag.src=r_img;

}
function upload_b(){
ctx.drawImage(b_imgtag,0,0,canvas.width,canvas.height);

}
function uploadr(){
    ctx.drawImage(r_imgtag,rover_x,rover_y,rover_w,rover_h);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38') { up();
         console.log("up"); 
    }
    if(keyPressed == '40') { down();
        console.log("down"); 
   }
   if(keyPressed == '37') { left();
    console.log("left"); 
}
if(keyPressed == '39') { right();
    console.log("right"); 
}
}
function up() {
     if(rover_y >=0) {
          rover_y = rover_y - 10;
           console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
            uploadb();
             uploadr();
             }
             }
             function down() {
                if(rover_y <=500) {
                     rover_y = rover_y + 10;
                      console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
                       uploadb();
                        uploadr();
                        }
                        }
                        function left() {
                            if(rover_x >=0) {
                                 rover_x = rover_x - 10;
                                  console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
                                   uploadb();
                                    uploadr();
                                    }
                                    }
                                     function right() {
                                        if(rover_x <=500) {
                                             rover_x = rover_x + 10;
                                              console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
                                               uploadb();
                                                uploadr();
                                                }
                                                }

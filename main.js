var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_image_width = 30;
var block_image_height = 30;

var player_image = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.pnghttps://static.wikia.nocookie.net/ironman/images/8/89/Iron_man_mark_85.png/revision/latest?cb=20210603004637",function(Img){
        player_image = Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
    
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
    
}
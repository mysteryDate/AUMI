/* aumi_routings.js
ian hattwick
created 3/23/12

This script routes itemnames, audiofile names, and imagefile names to the aumi_main_coll and various textfield
objects. If a write operation is attempted while the filepath, itemname, audiofile, or imagefile are 
not assigned an error message will be displayed and the write operation will be interrupted.

*/autowatch = 1;
inlets = 1;
outlets = 1;
var flags = new Array(0, 0, 0, 0);

$("parent.aumi_status_led").message(0);
//***********status_led**************//
function status_led(state) {
	if (state == 1 ) {
		state1 = 0.;
		state2 = 1.;
	}
	
	else {
		state1 = 1.;
		state2 = 0.;		
	}
	$("parent.aumi_status_led").message( "offcolor", state1, state2, 0., 1.);
}

//***********text fields**************//

function global_text_send(message){

	if (message == "clear") {
		status_update("Please select a name, audiofile, and imagefile.");
		message = " ";
		}
	item_name(message);
	current_audiofile(message);
	current_imagefile(message);
	status_led(0);
}

function item_name(message) {
	$("parent.aumi_item_name").message("set", message);
}

function current_audiofile(message) {
	$("parent.aumi_current_audiofile").message("set", message);
}

function current_imagefile(message) {
	$("parent.aumi_current_imagefile").message("set", message);
}

//***********status_update**************//
function status_update(message) {
	$("parent.aumi_status_update").message("set", message);
}
//***********closebang**************//

function closebang() {
	$("parent.aumi_main_coll").message("write image_and_sound_pairs.txt");

}

//***********file path functions**************//
function filepath (message) {


}







//***********access to max object by their scripting name**************//
function $(stringref){
    stringref=stringref.replace(/parent/gi, "parentpatcher")
    var path=stringref.split('.')
    var obj=this.patcher
    for(i in path){
        if(path[i]=='parentpatcher'){ //up 1 level:
            obj=obj.parentpatcher
        }else{
            obj=obj.getnamed(path[i])
            if(i!=path.length-1){ //down 1 level:
                obj=obj.subpatcher()
            }
        }
    }
    return(obj)
}


// USAGE:
// $("myButton").message('set','new text!') access 'myButton' object in current patcher
// $("parent.myButton").message('set','new text!') access 'myButton' object in parent patcher
// $("myPatcher.myButton").message('set','new text!') access 'myButton' object in child patcher
// $("parent.myPatcher.myButton").message('set','new text!') access 'myButton' object in sibling patcher
/* Adaptive Use keyboard scale generator
works with AU keyboard patcher to allow users to enter and save new scales manually

*/
autowatch = 1;

inlets = 1;
outlets = 3;

var scale_name;
var scale_degrees = new Array();
var scale_degrees_named = new Array();
var scale_degree_names = new Array("C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B");

var current_pitches = new Array();

var melody = 0;
var coll_name;


//***********add and delete notes from scale**************//

function add_note(pitch) {

	pitch = pitch - 36;
	
	if (melody != 1) 
	{
		pitch_already_present = scale_degrees.indexOf(pitch); //is pitch already in scale
	
		if (pitch_already_present == -1 ) 
		{ //if not, add it to scale
			scale_degrees.push(pitch);
			scale_degrees.sort(sortdesc); //sort numerically
			convert_scale();
		}
	
		else 
		{ //if pitch is present, delete it from scale
			scale_degrees.splice(pitch_already_present, 1);
			convert_scale();
		}
	}
	
	else { //if not, add it to scale
		scale_degrees.push(pitch);
		convert_scale();
		}
		
	monitor ("monitor");


}

function convert_scale () { //converts numeric scale to alphabetic scale
//	scale_degrees_named_length = scale_degrees_named.length; //clear scale_degrees_named
	scale_degrees_named.splice(0, scale_degrees_named.length);
	
	for (i=scale_degrees.length; i > 0 ; i--) {
		scale_degrees_named[scale_degrees.length - i] = scale_degree_names[scale_degrees[i-1]];
		//	post (scale_degrees_named, "\n");
	}
}
function clear () {
	monitor ("clear");
	
	scale_name = "<enter scale name>";
	$("aumi_keyboard_scale_write_kslider").message("clear"); //clears kslider in patch
	
	scale_degrees_length = scale_degrees.length;
	scale_degrees.splice(0, scale_degrees_length);
	
	scale_degrees_named_length = scale_degrees_named.length; //clear scale_degrees_named
	scale_degrees_named.splice(0, scale_degrees_named_length);
	
	delete_flag = 0;
}

function sortdesc(a, b) //sorts list descending numerically
{
return b-a;
}

//***********enter scale name**************//

function name_scale (name) {
	scale_name = name;
	monitor ("monitor");
	current_name = scale_name;
}

function collname(name) 
{
	clear();
	$("parent.aumi_keyboard_scale_main_umenu").message("clear");
	$("aumi_keyboard_scale_umenu").message("clear");
	

    coll_name=name;
    outlet (0, "dump");
}


function chosen_scale(name)
{
	clear();
	current_scale = name;
}


function set_melody(val)
{
    melody = val;
	clear();
}
//***********play a scale**************//

function play_scale()
{
		 if (melody != 1) {
     
		scale_degrees.sort(sortascend); //sort ascending
        
        }
        
    if (scale_degrees.length != 0) outlet (1, scale_degrees);

    else outlet (2, current_scale);
 
} 




//***********select a scale and output its pitches**************//

// function current (pitches, name) {
// 	current_scale = name;
// 	write_current_pitches(pitches);
// 	outlet (1, "set", current_scale, "selected.");
// }
// 
// function write_current_pitches (){
// 
// 	for (i = current_pitches.length; i>0 ; i--) {
// 	thisPitchLocation = current_pitches.length - i;
// 
// 	$("aumi_keyboard_current_scale").message(current_pitches[thisPitchLocation]+36);
// 	}
// 
// }
 
//***********store and delete scales**************//
 
function Store(name) {

    scale_name = name;
    
	 if (melody != 1) {
     
		scale_degrees.sort(sortascend); //sort ascending
        
        }
        
		outlet (0, "store", scale_name, scale_degrees); // store scale
        outlet (2, "store", scale_name, scale_degrees);
        outlet (2, "write", coll_name);
		
		outlet (0, scale_name); // select scale
		$("aumi_keyboard_scale_umenu").message("set", scale_name); //set new scale in umenu
		$("aumi_keyboard_scale_umenu").message("bang");
		
 		current_scale = current_name;

		clear();

}

function delete_scale(number, name) {

		outlet (0, "delete", name);
		outlet (2, "delete", name);
        outlet (2, "write", coll_name);
		$("parent.aumi_keyboard_scale_main_umenu").message("delete", number);
		$("parent.aumi_keyboard_scale_main_umenu").message("set", 0);
		$("parent.aumi_keyboard_scale_main_umenu").message("bang");
		$("aumi_keyboard_scale_umenu").message("delete", number);
		$("aumi_keyboard_scale_umenu").message("set", 0);
		$("aumi_keyboard_scale_umenu").message("bang");
		
		//outlet (1, "set", current_name, "deleted!");
		clear_after_delete();

}

function clear_after_delete () {

	$("aumi_keyboard_scale_write_kslider").message("clear"); //clears kslider in patch
	
	scale_degrees_length = scale_degrees.length;
	scale_degrees.splice(0, scale_degrees_length);
	
	scale_degrees_named_length = scale_degrees_named.length; //clear scale_degrees_named
	scale_degrees_named.splice(0, scale_degrees_named_length);
	
	delete_flag = 0;
}

function sortascend(a, b) //sorts list descending numerically
{
return a-b;
}

//***********output scale name and degrees out outlet 2**************//

function monitor (mode) {
	if ( mode == "monitor") {
		//outlet (1, "set","C", scale_name, ":", scale_degrees_named);
	}
	
	if ( mode == "clear") {
		//outlet (1, "set", "Enter Scale and Name, then click Store.");
	}

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
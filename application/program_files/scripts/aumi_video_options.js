/* Adaptive Use video option preset saver

General purpose js to populate umenus with preset names at load, 
and manually add and save new presets

load:
clear umenus
read colls to populate umenus and count number of current items

store:
read incoming name, append it to umenus
set umenus to new preset
add 1 to num_presets

delete:
delete current preset.
renumber presets to fill gap
subtract 1 from num_presets

*/
autowatch = 1;
inlets = 1;
outlets = 4;

//name outlets
umenu_send = 1;
coll_send = 0;
preset_send = 2;
dump_send = 3;

var preset_name;
var num_presets = 0;
var delete_flag = 0;

var coll_name2;

var brightness = 1;
var contrast = 1;
var axis = 1;
var thickness = 1;
var color = new Array(250, 0, 0);
var dot_color = new Array(255, 127, 0);
var dot_size = 5;

//***********load messages**************//

function saved_presets () 
//load umenus and count presets. 
//num_presets will be 1 more than actual at the end of this function
{
	if (num_presets == 0) 
	{
		clear();
		//outlet (coll_send, 0);
		outlet (preset_send, 0);
	}
	
	outlet (coll_send, num_presets);
	if (num_presets < 100 ) num_presets++;
	//outlet (dump_send, num_presets);
	}

function set_num_presets (value)
{
	num_presets = value;
}

function clear () 
{
	outlet (umenu_send, "clear");
}

function coll_name(string) 
{
	coll_name2 = string;
}


function anything (value, value2, value3) {
	var message = messagename;
	if ( message == "brightness" ) brightness = value;
	if ( message == "rect_color" ) {
			color[0] = value;
			color[1] = value2;
			color[2] = value3;
		}
	if ( message == "dot_color" ) {
			dot_color[0] = value;
			dot_color[1] = value2;
			dot_color[2] = value3;
		}
	if ( message == "dot_size" ) dot_size = value;	
	if ( message == "contrast" ) contrast = value;
	if ( message == "thickness" ) thickness = value;
	if ( message == "axis" ) axis = value;

}


//***********store preset name**************//

function name_preset (name) 
{
	outlet ( umenu_send, "append", name);
	outlet (coll_send, (num_presets-1), 
		name, brightness, contrast, 
		axis, thickness, 
		color[0], color[1], color[2], 
		dot_size, 
		dot_color[0], dot_color[1], dot_color[2]);
	outlet (coll_send, "write", coll_name2);
	outlet ( umenu_send, num_presets-1);
	num_presets++;
	//outlet (dump_send, num_presets);
}


//***********delete presets**************//

function delete_preset(number) 
{
	
	outlet (coll_send, "delete", number);
	outlet (umenu_send, "delete", number); //??umenu number is one less than coll
	num_presets--;
	outlet (umenu_send, 0);
	outlet (coll_send, "write", coll_name2);
	
	outlet (dump_send, num_presets);
    
    
}


autowatch = 1;

inlets = 1;
outlets = 2;

/* aumi video handler
processes messages to pattrstorage file aumi_video_pattr.json

outlets:
0 = pattrstorage
1 = umenu

****************/

var num_presets = 0; 
var current_preset = 0;
var file_path;


/*************read/write******************/

function store(name)
{
	num_presets++;
	outlet (0, "store", num_presets, name);
	outlet (1, "append", name);
	outlet (1, num_presets-1);
//	post ("write", file_path, "\n");
	outlet(0, "write", file_path);
}

function remove()
{
	outlet (0, "remove", current_preset);
	outlet (1, "delete", current_preset - 1);
	current_preset--;
	outlet (0, current_preset);
	outlet (1, current_preset-1);
	num_presets--;
	outlet(0, "write", file_path);
}

// function delete_undefined()
// {
// 	
// 
// }

function filepath(name)
{
	file_path = name;
}

/******load/recall**************/

function getslotnames ()
{
	outlet (1, "clear");
	outlet (0, "renumber"); //make sure presets are numbered contiguously
	outlet (0, "getslotnamelist");
}

function slotnames(name)
{
	if (name == "done") 
	{	
		recall(-1);  //format for umenu
		//outlet(0, "write", file_path);
	}
// 	else if (name == "(undefined)"
// 	{
// 		delete_undefined();
// 	}
	
	else if (name == 0) ;
	else if (name == 1) ;
	
	else
	{
	//	num_presets = 0;
		num_presets++;
		outlet (1, "append", name);
	}
}

function recall(val)
{
	if (val == -1)
	{
	outlet (1, "set", 0); //format for umenu
	current_preset = 1;
	post("current", current_preset, "\n");
	outlet (0, current_preset);
	
	}
	
	else
	{
	outlet (1, "set", val); //format for umenu
	//post("current", temp_val, "\n");
	current_preset = val+1;
	outlet (0, current_preset);
	}
}

function dump()
{
	post ("aumi video handler dump*******", "\n");
	post ("current", current_preset, "\n");
	post ("total", num_presets, "\n");
	post ("file path", file_path, "\n");
}

{
	"patcher" : 	{
		"fileversion" : 1,
		"rect" : [ 159.0, 240.0, 1024.0, 663.0 ],
		"bglocked" : 0,
		"defrect" : [ 159.0, 240.0, 1024.0, 663.0 ],
		"openrect" : [ 0.0, 0.0, 0.0, 0.0 ],
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"metadata" : [  ],
		"boxes" : [ 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "loadmess set #1",
					"id" : "obj-10",
					"fontsize" : 10.0,
					"patching_rect" : [ 173.0, 148.0, 83.0, 18.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"fontname" : "Arial",
					"outlettype" : [ "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "inlet",
					"id" : "obj-1",
					"patching_rect" : [ 340.0, 27.0, 15.0, 15.0 ],
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"comment" : ""
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "buffer~ #1_buffer",
					"id" : "obj-2",
					"fontsize" : 9.0,
					"patching_rect" : [ 47.0, 200.0, 94.0, 17.0 ],
					"numinlets" : 1,
					"numoutlets" : 2,
					"fontname" : "Arial",
					"outlettype" : [ "float", "bang" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "prepend replace",
					"id" : "obj-3",
					"fontsize" : 9.0,
					"patching_rect" : [ 47.0, 181.0, 81.0, 17.0 ],
					"numinlets" : 1,
					"numoutlets" : 1,
					"fontname" : "Arial",
					"outlettype" : [ "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "inlet",
					"id" : "obj-4",
					"patching_rect" : [ 235.0, 29.0, 15.0, 15.0 ],
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"comment" : ""
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "t populate l",
					"id" : "obj-5",
					"fontsize" : 9.0,
					"patching_rect" : [ 235.0, 83.0, 60.0, 17.0 ],
					"hidden" : 1,
					"numinlets" : 1,
					"numoutlets" : 2,
					"fontname" : "Arial",
					"outlettype" : [ "populate", "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "newobj",
					"text" : "prepend prefix",
					"id" : "obj-6",
					"fontsize" : 9.0,
					"patching_rect" : [ 235.0, 62.0, 74.0, 17.0 ],
					"hidden" : 1,
					"numinlets" : 1,
					"numoutlets" : 1,
					"fontname" : "Arial",
					"outlettype" : [ "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "umenu",
					"id" : "obj-7",
					"fontsize" : 12.0,
					"patching_rect" : [ 5.0, 53.0, 94.0, 20.0 ],
					"numinlets" : 1,
					"prefix" : "Macintosh HD:/Users/zevinpolzin/Documents/DesktopMAX7106/gamelan/samples/gongs/",
					"items" : [ "Select", "Sound", "Folder" ],
					"numoutlets" : 3,
					"fontname" : "Arial",
					"types" : [  ],
					"outlettype" : [ "int", "", "" ]
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "comment",
					"text" : "#1",
					"id" : "obj-8",
					"fontsize" : 14.0,
					"patching_rect" : [ 6.0, 31.0, 92.0, 25.0 ],
					"numinlets" : 1,
					"numoutlets" : 0,
					"fontname" : "Futura Medium"
				}

			}
, 			{
				"box" : 				{
					"maxclass" : "panel",
					"bordercolor" : [ 0.517647, 0.517647, 0.517647, 1.0 ],
					"id" : "obj-9",
					"rounded" : 10,
					"bgcolor" : [ 0.035294, 1.0, 0.976471, 1.0 ],
					"patching_rect" : [ 3.0, 30.0, 98.0, 46.0 ],
					"numinlets" : 1,
					"border" : 1,
					"numoutlets" : 0,
					"background" : 1
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"source" : [ "obj-6", 0 ],
					"destination" : [ "obj-5", 0 ],
					"hidden" : 1,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-4", 0 ],
					"destination" : [ "obj-6", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-3", 0 ],
					"destination" : [ "obj-2", 0 ],
					"hidden" : 0,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-7", 1 ],
					"destination" : [ "obj-3", 0 ],
					"hidden" : 1,
					"midpoints" : [ 52.0, 133.0, 56.5, 133.0 ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-5", 1 ],
					"destination" : [ "obj-7", 0 ],
					"hidden" : 1,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-5", 0 ],
					"destination" : [ "obj-7", 0 ],
					"hidden" : 1,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-1", 0 ],
					"destination" : [ "obj-7", 0 ],
					"hidden" : 1,
					"midpoints" : [  ]
				}

			}
, 			{
				"patchline" : 				{
					"source" : [ "obj-10", 0 ],
					"destination" : [ "obj-8", 0 ],
					"hidden" : 1,
					"midpoints" : [  ]
				}

			}
 ]
	}

}

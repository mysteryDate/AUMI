/* aumi_instruction_test

stores and outputs messages into the main aumi instruction box. 
Replaces previous png files which were low resolution.

*/
autowatch = 1;
inlets = 1;
outlets = 3;

//define outlets
title_out = 0;
message_out = 1;
return_out = 2;

function mode0() 
    {
    outlet (title_out, "set", "   WELCOME!");
    new_line(1);
    outlet (message_out, "set", "To begin, please choose a mode from the yellow menu box.");
    new_line(3);
    outlet (message_out, "append", "The Adaptive Use Musical Instrument (AUMI) is a project of the Deep Listening Institute, Ltd. developed by Zane Van Dusen and Zevin Polzin under the direction of Pauline Oliveros and Leaf Miller.");
    new_line (2);
    outlet (message_out, "append", "Updated by Doug van Nort and Ian Hattwick.");
    new_line(2);
    outlet (message_out, "append", "To donate please go to: deeplistening.org/adaptiveuse.");
    }
    
function mode1()
    {
    outlet (title_out, "set", "  Keyboard Mode");
    outlet (message_out, "set", "Click on a point on the screen (such as your nose) to set the tracking point.");
    new_line(2);
    outlet (message_out, "append", "Moving side-to-side triggers notes on the keyboard. The guidelines may also be set so that vertical moving up-and-down triggers notes on the keyboard instead.");
    new_line (2);
    outlet (message_out, "append", "The outer rectangle scales the range of movement required to play 2 octaves on the keyboard. The 'Guide Size' slider changes the size of the rectangle.");
    new_line(2);
    outlet (message_out, "append", "The 'Sound Source' menu allows you to select from a number of different sounds for the keyboard to play. The Scale and Key menus allow you to change the Scale and Key of the notes triggered.");
    }
    
function mode2()
    {
    outlet (title_out, "set", " Quarter Screen Percussion Mode");
    outlet (message_out, "set", "The Screen is divided into 5 sections:four quarters and a square section in the center that can change in size.");
    new_line(2);
    outlet (message_out, "append", "The 'Guide Size' slider changes the size of the center square.");
    new_line (2);
    outlet (message_out, "append", "Click on a point on the screen (such as your nose) to set the tracking point.");
    new_line(2);
    outlet (message_out, "append", "Each section can be assigned a sound that will be triggered when the tracking point enters the section. The center square is silent.");
    }
    
function mode3()
    {
    outlet (title_out, "set", "Relative Movement Percussion Mode");
    outlet (message_out, "set", "Sounds are triggered based on the averaged direction of movement on the screen.");
    new_line(2);
    outlet (message_out, "append", "The speed and distance of your movement can be used to control the pitch and volume of the sound playback.");
    new_line (2);
    outlet (message_out, "append", "The 'Sensitivity' slider controls how much movement is required to trigger a sound. Moving the slider to the right increases the sensitivity, moving the slider to the left decreases it.");
    new_line(2);
    outlet (message_out, "append", "Sounds can be assigned to four directions: up, down, left, and right.");
    }
    
function mode4()
    {
    outlet (title_out, "set", " Quarter Screen Percussion Mode");
    outlet (message_out, "set", "The Screen is divided into vertical sections. The 'Number of Divisions'  controls the number of sections the screen is divided into. Up to 8 sections can be created.");
    new_line(2);
    outlet (message_out, "append", "Click on a point on the screen (such as your nose) to set the tracking point.");
    new_line(2);
    outlet (message_out, "append", "Each section can be assigned a sound that will be triggered when the tracking point enters the section.");
    }    
    
    
function new_line (value) 
    {
    for ( i=0; i<value; i++) 
        {
        outlet (return_out, 13);
        }
    }
// USAGE:
// $("myButton").message('set','new text!') access 'myButton' object in current patcher
// $("parent.myButton").message('set','new text!') access 'myButton' object in parent patcher
// $("myPatcher.myButton").message('set','new text!') access 'myButton' object in child patcher
// $("parent.myPatcher.myButton").message('set','new text!') access 'myButton' object in sibling patcher
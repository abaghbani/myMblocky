/**
 * @copyright 2015 Makeblock
 * @author callblueday
 * @description blocks for move modules
 */

goog.require('goog.color.hexToRgb');
goog.require('Blockly.Blocks');
goog.require('MBlockly.BlockKeeper');
goog.require('MBlockly.Control');


MBlockly.BlockKeeper.makeBlock('start_whengo', [], 
	function()
	{
		this.setColour(MBlockly.BlockKeeper.HUE.start);
		this.appendDummyInput().appendField(Blockly.Msg.START_WHEN_GO)
		this.setInputsInline(true);
		this.setNextStatement(true);
	}, 
	function(){ }
);

MBlockly.BlockKeeper.makeBlock('maneli_stop', [], 
	function()
	{
		this.setColour(MBlockly.BlockKeeper.HUE.start);
		this.appendDummyInput().appendField(Blockly.Msg.MANELI_STOP)
		this.setInputsInline(true);
		this.setPreviousStatement(true);
	}, 
	function()
	{
		MBlockly.Control.stopSpeed();
	}
);

MBlockly.BlockKeeper.makeBlock('maneli_forward', [], 
	function()
	{
		var iconImages = MBlockly.resources().ICONS;
		var icon = new Blockly.FieldImage(iconImages.MOVE_FORWARD, 30, 30, '*');
		
		this.setColour(MBlockly.BlockKeeper.HUE.move);
		this.appendDummyInput()
			.appendField(icon)
			.appendField(Blockly.Msg.MANELI_FORWARD)
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	},
	function()
	{
		MBlockly.Action.runSpeed(100, 1);	//speed = 100 dir = 1 (forward)
	}
);

MBlockly.BlockKeeper.makeBlock('maneli_turnleft', [], 
	function()
	{
		var iconImages = MBlockly.resources().ICONS;
		var icon = new Blockly.FieldImage(iconImages.MOVE_TURN_LEFT, 30, 30, '*');
		
		this.setColour(MBlockly.BlockKeeper.HUE.math);
		this.appendDummyInput()
			.appendField(icon)
			.appendField(Blockly.Msg.MANELI_TURNLEFT)
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	},
	function()
	{
		MBlockly.Action.turnSpeed(100, 1);
	}
);


MBlockly.BlockKeeper.makeBlock('maneli_turnright', [], 
	function()
	{
		var iconImages = MBlockly.resources().ICONS;
		var icon = new Blockly.FieldImage(iconImages.MOVE_TURN_RIGHT, 30, 30, '*');
		
		this.setColour(MBlockly.BlockKeeper.HUE.event);
		this.appendDummyInput()
			.appendField(icon)
			.appendField(Blockly.Msg.MANELI_TURNRIGHT)
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	},
	function()
	{
		MBlockly.Action.turnSpeed(100, -1);
	}
);

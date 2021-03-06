goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');
//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Blocks['servo_move'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Servo)
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Degree);
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Delay);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Allows you to use a servo at a specific pin. Sets the servo to a position in degrees (0-180) and then delays your code by millseconds (Ex: Delay 1000 = 1 second)');
  }
};

Blockly.Blocks['servo_read_degrees'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
	this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Servo)
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_ReadDegree);
    this.setOutput(true, "Number");
    this.setTooltip('Returns the position (in degrees) of a servo at a specific PIN. For example, if my servo is at this position, make the robot do something else.');
  }
};


Blockly.Blocks['servo_attached'] = {
  helpUrl: 'http://www.arduino.cc/playground/ComponentLib/servo',
  init: function() {
	this.setColour(80);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Attached)
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip('true if the servo is attached to pin; false otherwise. ');
  }
};

Blockly.Blocks['servo_detach'] = {
  helpUrl: '',
  init: function() {
    this.setColour(80);
	this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVO_Detach)
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Release a pin from servo driving.');
  }
};
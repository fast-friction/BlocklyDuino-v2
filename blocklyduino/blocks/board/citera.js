/**
 * @license
 * Copyright 2012 Fred Lin
 * Copyright 2025 fast-friction
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Basics board command blocks for Blockly.
 * @author gasolin@gmail.com (Fred Lin)
 * @author scanet@libreduc.cc (Sébastien Canet)
*/
/**
 * @author 54060627+fast-friction@users.noreply.github.com (fast-friction)
 * Description:Based on "./board_base.js". Custom blocks for Citera Board.
 */


'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Constants.citera');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var mediaFolder = "./blocklyduino/media/";



Blockly.Blocks['citera_buildin_led_toggle'] = {
    init: function () {
        //this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL);
        this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["赤色","LED_RED"], ["黄色","LED_YELLOW"], ["緑色","LED_GREEN"]]), "カラー")
                .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT)
                .appendField(new Blockly.FieldDropdown([["点灯","1"], ["消灯","0"]]), 'STAT')
                //.appendField(new Blockly.FieldBitmap("..."), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP);
        this.setStyle('arduino_blocks');
    }
};
    
Blockly.Blocks['citera_buildin_segmentflush_int'] = {
    init: function () {
        this.appendValueInput("NUM", 'Number')
                .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_SegmentFlush_int)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_SegmentFlush_int_TOOLTIP);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_buildin_segmentflush_Float'] = {
    init: function () {
        this.appendValueInput("NUM", 'Number')
                .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_SegmentFlush_Float)
                .setCheck(floatCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_SegmentFlush_Float_TOOLTIP);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_buildin_segmentdot'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_SEGMENTDOT1)
                .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "Dot_Number")
                .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_SEGMENTDOT2)
                .appendField(new Blockly.FieldDropdown([["点灯","1"], ["消灯","0"]]), "Dot_State")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_buildin_segmentdash'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("7セグメント表示器の’(ダッシュ)を")
                .appendField(new Blockly.FieldDropdown([["点灯","1"], ["消灯","0"]]), "State")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_buildin_segmentcoron'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("7セグメント表示器の:(コロン)を")
                .appendField(new Blockly.FieldDropdown([["点灯","1"], ["消灯","0"]]), "State")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_buildin_segmentclear'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("7セグメント表示器の全ての表示を消灯する");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_int'] = {
    init: function () {
        this.appendValueInput("NUM", 'Number')
                .appendField("整数")
                .setCheck(intCompatibility);
        this.appendValueInput("NUM2", 'Number')
                .appendField("+")
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setOutput(true, 'int');
        // this.setPreviousStatement(true, null);
        // this.setTooltip("");
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_float'] = {
    init: function () {
        this.appendValueInput("NUM", 'Number')
                .appendField("小数")
                .setCheck(floatCompatibility);
        this.appendValueInput("NUM2", 'Number')
                .appendField("+")
                .setCheck(floatCompatibility);
        this.setInputsInline(true);
        this.setOutput(true, 'float');
        // this.setPreviousStatement(true, null);
        // this.setTooltip("");
        this.setStyle('arduino_blocks');
    }
};


Blockly.Blocks['citera_digital_read'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_highlow'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'BOOL')
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL);
        this.setStyle('arduino_blocks');
    }
};



Blockly.Blocks['citera_analog_read'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownAnalog), "PIN");
        this.setOutput(true, 'int');
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_delay'] = {
    init: function () {
        this.appendValueInput("DELAY_TIME", 'Number')
                .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL);
        this.setStyle('arduino_blocks');
    }
};


Blockly.Blocks['citera_tone'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
                //.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.appendValueInput("NUM", "Number")
                .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_notone'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT)
                //.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_NOTONE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};



Blockly.Blocks['citera_car_lsensor'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("左の光センサーの値を取得する");
        this.setOutput(true, 'int');
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_car_rsensor'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("右の光センサーの値を取得する");
        this.setOutput(true, 'int');
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_car_motordrive'] = {
    init: function () {
        this.appendValueInput("LEFT", "Number")
                .appendField("車の左のモーターのパワー")
                .setCheck(intCompatibility);
                //.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.appendValueInput("RIGHT", "Number")
                .appendField("右のモーターのパワー")
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
        // this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};



Blockly.Blocks['citera_red_matrix'] = {
    init: function () {
        // 初期値: 5x5 のマトリクス
        var defaultMatrix = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];

        this.appendDummyInput()
                .appendField("LED_redマトリクス")
                // ★ここを変更しました：new Blockly.FieldBitmap(...) ではなく、
                // レジストリから呼び出す方式に変更します。
                .appendField(Blockly.fieldRegistry.fromJson({
                    type: "field_bitmap", // プラグインの登録名
                    value: defaultMatrix,
                    width: 8, 
                    height: 8,
                    colourOn: '#ff00ff',
                    colourOff: '#444444'
                }), "MATRIX_DATA");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("8x8 LED Matrix");
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_green_matrix'] = {
    init: function () {
        // 初期値: 5x5 のマトリクス
        var defaultMatrix = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ];

        this.appendDummyInput()
                .appendField("LED_greenマトリクス")
                // ★ここを変更しました：new Blockly.FieldBitmap(...) ではなく、
                // レジストリから呼び出す方式に変更します。
                .appendField(Blockly.fieldRegistry.fromJson({
                    type: "field_bitmap", // プラグインの登録名
                    value: defaultMatrix,
                    width: 8, 
                    height: 8,
                    colourOn: '#ff00ff',
                    colourOff: '#444444'
                }), "MATRIX_DATA");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("8x8 LED Matrix");
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['citera_matrix_print'] = {
        init: function () {
        this.appendDummyInput()
                .appendField("ドットマトリクスに描画")
                //.appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
        // this.setHelpUrl(Blockly.Msg.ARDUINO_NOTONE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};
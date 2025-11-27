/**
 * @license
 * Copyright 2020 Sébastien CANET
 * Copyright 2025 fast-friction
 * SPDX-License-Identifier: BSD-3-Clause
 */
 
/**
 * @fileoverview Generating Arduino code for basics board command blocks.
 * @author scanet@libreduc.cc (Sébastien CANET)
*/
/**
 * @author 54060627+fast-friction@users.noreply.github.com (fast-friction)
 * Description:Based on "./board_base.js". Custom blocks for Citera Board.
 */

'use strict';

goog.provide('Blockly.Arduino.citera');

goog.require('Blockly.Arduino');

Blockly.Arduino['citera_buildin_led_toggle'] = function (block) {
    var dropdown_color = block.getFieldValue('カラー');
    var dropdown_stat = block.getFieldValue('STAT');
    //Blockly.Arduino.setups_['setup_output_' + dropdown_color] = 'pinMode(' + dropdown_color +', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_color +', ' + dropdown_stat + ');\n'
    return code;
};

Blockly.Arduino['citera_buildin_segmentflush_int'] = function (block) {
    var seg_int_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1234'
    var code = 'SegmentFlush_int(' + seg_int_num + ');\ndelay(50);\n';
    return code;
};

Blockly.Arduino['citera_buildin_segmentflush_Float'] = function (block) {
    var seg_Float_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '123.4'
    var code = 'SegmentFlush_Float(' + seg_Float_num + ');\ndelay(50);\n';
    return code;
};

Blockly.Arduino['citera_buildin_segmentdot'] = function (block) {
    var dropdown_dot_number = block.getFieldValue('Dot_Number');
    var dropdown_dot_state = block.getFieldValue('Dot_State');
    //Blockly.Arduino.setups_['setup_output_' + dropdown_dot_number] = 'pinMode(' + dropdown_dot_number +', OUTPUT);';
    var code = 'SegmentDot'+ dropdown_dot_number + '( '+ dropdown_dot_state + ');\ndelay(10);\n';
    return code;
};

Blockly.Arduino['citera_buildin_segmentdash'] = function (block) {
    var dropdown_state = block.getFieldValue('State');
    //Blockly.Arduino.setups_['setup_output_' + dropdown_dot_number] = 'pinMode(' + dropdown_dot_number +', OUTPUT);';
    var code = 'SegmentDash( '+ dropdown_state + ');\ndelay(10);\n';
    return code;
};

Blockly.Arduino['citera_buildin_segmentcoron'] = function (block) {
    var dropdown_state = block.getFieldValue('State');
    //Blockly.Arduino.setups_['setup_output_' + dropdown_dot_number] = 'pinMode(' + dropdown_dot_number +', OUTPUT);';
    var code = 'SegmentCoron( '+ dropdown_state + ');\ndelay(10);\n';
    return code;
};

Blockly.Arduino['citera_buildin_segmentclear'] = function (block) {
    var code = 'SegmentClear();\ndelay(50);\n';
    return code;
};


Blockly.Arduino['citera_int'] = function (block) {
    var int_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1234'
    var int_num2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var code = '(' + int_num + '+' + int_num2 + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['citera_float'] = function (block) {
    var float_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '123.4'
    var float_num2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC) || '0'
    var code = '(' + float_num + '+' + float_num2 + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];

};

    
Blockly.Arduino['citera_digital_read'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    // Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'digitalRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['citera_highlow'] = function (block) {
    // Boolean values HIGH and LOW.
    var code = (block.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['citera_analog_write'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    var value_num = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
    //Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
    return code;
};

Blockly.Arduino['citera_analog_read'] = function (block) {
    var dropdown_pin = block.getFieldValue('PIN');
    //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['citera_delay'] = function (block) {
    var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
    var code = 'delay(' + delay_time + ');\n';
    return code;
};


Blockly.Arduino['citera_tone'] = function (block) {
    //var dropdown_pin = block.getFieldValue("PIN");
    var value_num = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    //Blockly.Arduino.setups_['setup_output BUZZER'] = 'pinMode(BUZZER, OUTPUT);';
    var code = "tone(" + value_num + ");\n";
    return code;
};

Blockly.Arduino['citera_notone'] = function (block) {
    //var dropdown_pin = block.getFieldValue("PIN");
    //Blockly.Arduino.setups_['setup_output BUZZER'] = 'pinMode(BUZZER, OUTPUT);';
    var code = "noTone();\n";
    return code;
};


Blockly.Arduino['citera_car_lsensor'] = function (block) {
    var code = 'Serial_LSensor()';  
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['citera_car_rsensor'] = function (block) {
    var code = 'Serial_RSensor()';  
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['citera_car_motordrive'] = function (block) {
    var left = Blockly.Arduino.valueToCode(this, "LEFT", Blockly.Arduino.ORDER_ATOMIC);
    var right = Blockly.Arduino.valueToCode(this, "RIGHT", Blockly.Arduino.ORDER_ATOMIC);
    var code = "Serial_MotorDrive(" + left + ", " + right + ");\n";
    return code;
};


Blockly.Arduino['citera_red_matrix'] = function(block) {
  // 1. ブロックから0と1の配列データを取得
  var matrix = block.getFieldValue('MATRIX_DATA');
  Blockly.Arduino.codeFunctions_['MATRIX_DATA'] = 'DotMatrix_t dm_data;';

  // field-bitmapの仕様により、データは配列 [0, 1, 0, ...] で返ってくることが多いですが、
  // 安全のために文字列か配列か確認して処理します。
  
  // Arduino用のコードを作成開始
  var val = 0;
  var code = '// LED Matrix Pattern\n';
  for (var i = 0; i < 8; i++){
    code +='dm_data.red_data['+ i + ']= ';
    val = 0;
    for (var j = 0; j < 8; j++){
        val = val*2;
        val += matrix[i][j] || 0; 
    }
    code+= val+';\n';
  }
  

  return code;
};

Blockly.Arduino['citera_green_matrix'] = function(block) {
  // 1. ブロックから0と1の配列データを取得
  var matrix = block.getFieldValue('MATRIX_DATA');
  Blockly.Arduino.codeFunctions_['MATRIX_DATA'] = 'DotMatrix_t dm_data;';

  // field-bitmapの仕様により、データは配列 [0, 1, 0, ...] で返ってくることが多いですが、
  // 安全のために文字列か配列か確認して処理します。
  
  // Arduino用のコードを作成開始
  var val = 0;
  var code = '// LED Matrix Pattern\n';
  for (var i = 0; i < 8; i++){
    code +='dm_data.green_data['+ i + ']= ';
    val = 0;
    for (var j = 0; j < 8; j++){
        val = val*2;
        val += matrix[i][j] || 0; 
    }
    code+= val+';\n';
  }
  

  return code;
};

Blockly.Arduino['citera_matrix_print'] = function (block) {
    var code = 'Serial_DotMatrix_Write(dm_data);\ndelay(50);\n';
    return code;
};
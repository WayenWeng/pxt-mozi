
/**
 * 
 */
enum GROVE_TWO_DOUBLE_BUTTON {
    DEF_I2C_ADDR = 0x02,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x0002          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_DOUBLE_BUTTON_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_GET_DEV_EVENT = 0x01,   // This command gets device event status
    I2C_CMD_LED_ON = 0xb0,          // This command turns on the indicator LED flash mode
    I2C_CMD_LED_OFF = 0xb1,         // This command turns off the indicator LED flash mode
    I2C_CMD_AUTO_SLEEP_ON = 0xb2,   // This command enable device auto sleep mode
    I2C_CMD_AUTO_SLEEP_OFF = 0xb3,  // This command disable device auto sleep mode (default mode)
    I2C_CMD_SET_ADDR = 0xc0,        // This command sets device i2c address
    I2C_CMD_RST_ADDR = 0xc1         // This command resets device i2c address
}

/**
 * 
 */
enum BUTTON_EVENT_TYPE {
    //% block=None
    BUTTON_NO_EVENT = 0,
    //% block=A_Click
	BUTTON_A_CLICK = 1,
    //% block=A_DblClick
	BUTTON_A_DOUBLE_CLICK = 2,
    //% block=A_Hold
	BUTTON_A_LONG_PRESS = 3,
    //% block=B_Click
	BUTTON_B_CLICK = 4,
    //% block=B_DblClick
	BUTTON_B_DOUBLE_CLICK = 5,
    //% block=B_Hold
	BUTTON_B_LONG_PRESS = 6,
    //% block=A_B_Click
	BUTTON_A_AND_B_CLICK = 7,
    //% block=A_B_DblClick
	BUTTON_A_AND_B_DOUBLE_CLICK = 8,
    //% block=A_B_Hold
	BUTTON_A_AND_B_LONG_PRESS = 9
}


/**
 * 
 */
enum GROVE_TWO_LED_MATRIX {
    DEF_I2C_ADDR = 0x07,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x8002          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_LED_MATRIX_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_DISP_BAR = 0x01,        // This command displays LED bar
    I2C_CMD_DISP_EMOJI = 0x02,      // This command displays pixel emoji
    I2C_CMD_DISP_NUM = 0x03,        // This command displays number
    I2C_CMD_DISP_STR = 0x04,        // This command displays string
    I2C_CMD_DISP_CUSTOM = 0x05,     // This command displays user-defined pictures
    I2C_CMD_DISP_OFF = 0x06,        // This command displays nothing
    I2C_CMD_LED_ON = 0xb0,          // This command turns on the indicator LED flash mode
    I2C_CMD_LED_OFF = 0xb1,         // This command turns off the indicator LED flash mode
    I2C_CMD_AUTO_SLEEP_ON = 0xb2,   // This command enable device auto sleep mode
    I2C_CMD_AUTO_SLEEP_OFF = 0xb3,  // This command disable device auto sleep mode (default mode)
    I2C_CMD_SET_ADDR = 0xc0,        // This command sets device i2c address
    I2C_CMD_RST_ADDR = 0xc1,        // This command resets device i2c address
}


/**
 * 
 */
enum EMOJI_TYPE {
    //% block=Face
    FACE = 0,
    //% block=Mad
    MAD = 1,
    //% block=Sad
    SAD = 2,
    //% block=Smile
    SMILE = 3,
    //% block=Surprise
    SURPRISE = 4
}


/**
 * Functions to operate Mozi module.
 */
//% weight=10 color=#CD5C5C icon="\uf1b3" block="Mozi"
namespace mozi {
    let wakePin: DigitalPin = DigitalPin.P8;
    
    export function wakeupDevice()
    {
        pins.digitalWritePin(wakePin, 0);
        control.waitMicros(25);
        pins.digitalWritePin(wakePin, 1);
        control.waitMicros(25);
    }
    
    export function i2cSendByte(address: number, data: number)
    {
        let buf: Buffer = pins.createBuffer(1);
        buf[0] = data;
        wakeupDevice();
        pins.i2cWriteBuffer(address, buf, false);
    }
    
    export function i2cSendBytes(address: number, data: Buffer)
    {
        wakeupDevice();
        pins.i2cWriteBuffer(address, data, false);
    }
    
    export function i2cReceiveByte(address: number): number
    {
        let buf: Buffer = pins.createBuffer(1);
        wakeupDevice();
        buf = pins.i2cReadBuffer(address, 1, false);
        return buf[0];
    }
    
    export function i2cReceiveBytes(address: number, len: number): Buffer
    {
        let buf: Buffer = pins.createBuffer(len);
        wakeupDevice();
        buf = pins.i2cReadBuffer(address, len, false);
        return buf;
    }
    
    let moziEventId = 8000;

    export class Mozi
    {
        currentDeviceAddress: number;

        /**
         * Get vendor ID of device.
         */
        //% blockId=mozi_get_device_vid block="%strip|get vid"
        //% advanced=true
        getDeviceVID(): number
        {
            let data: Buffer = pins.createBuffer(4);
            i2cSendByte(this.currentDeviceAddress, 0);
            data = i2cReceiveBytes(this.currentDeviceAddress, 4);
            return (data[0] + data[1] * 256);
        }
        
        /**
         * Get product ID of device.
         */
        //% blockId=mozi_get_device_pid block="%strip|get pid"
        //% advanced=true
        getDevicePID(): number
        {
            let data: Buffer = pins.createBuffer(4);
            i2cSendByte(this.currentDeviceAddress, 0);
            data = i2cReceiveBytes(this.currentDeviceAddress, 4);
            return (data[2] + data[3] * 256);
        }
        
        /**
         * Change i2c address of device.
         * @param newAddress the new i2c address of device, eg: 2
         */
        //% blockId=mozi_change_device_address block="%strip|change address to|%newAddress"
        //% newAddress.min=2 newAddress.max=126
        //% advanced=true
        changeDeviceAddress(newAddress: number = 2)
        {
            let data: Buffer = pins.createBuffer(2);
            data[0] = 0xc0;
            data[1] = newAddress;
            i2cSendBytes(this.currentDeviceAddress, data);
            this.currentDeviceAddress = newAddress;
        }
        
        /**
         * Restore the i2c address of device to default.
         */
        //% blockId=mozi_default_device_address block="%strip|default address"
        //% advanced=true
        defaultDeviceAddress()
        {
            i2cSendByte(this.currentDeviceAddress, 0xc1);
        }
        
        /**
         * Trun on the indicator LED flash mode.
         */
        //% blockId=mozi_turn_on_device_led_flash block="%strip|turn on led flash"
        //% advanced=true
        turnOnLedFlash()
        {
            i2cSendByte(this.currentDeviceAddress, 0xb0);
        }
        
        /**
         * Trun off the indicator LED flash mode.
         */
        //% blockId=mozi_turn_off_device_led_flash block="%strip|turn off led flash"
        //% advanced=true
        turnOffLedFlash()
        {
            i2cSendByte(this.currentDeviceAddress, 0xb1);
        }
        
        /**
         * Enable device auto sleep mode.
         */
        //% blockId=mozi_enable_device_auto_sleep block="%strip|enable auto sleep"
        //% advanced=true
        enableAutoSleep()
        {
            i2cSendByte(this.currentDeviceAddress, 0xb2);
        }
        
        /**
         * Disable device auto sleep mode.
         */
        //% blockId=mozi_disable_device_auto_sleep block="%strip|disable auto sleep"
        //% advanced=true
        disableAutoSleep()
        {
            i2cSendByte(this.currentDeviceAddress, 0xb3);
        }
    }
    
    export class MoziInput extends Mozi
    {
        lastStatus: number;
        eventId: number;
        
        /**
         * Get the device event status.
         */
        //% blockId=mozi_get_device_event_status block="%strip|get event status"
        //% advanced=true
        getEventStatus(): number
        {
            let data: Buffer = pins.createBuffer(4);
            i2cSendByte(this.currentDeviceAddress, 0x01);
            data = i2cReceiveBytes(this.currentDeviceAddress, 4);
            return data[0];
        }
    }
    
    export class Button extends MoziInput
    {
        
    }
    
    /**
     * Create a new driver for button
     * @param address the address of device, eg: 2
     */
    //% blockId=mozi_create_button_double block="create button and set address|%address"
    //% address.min=2 address.max=126
    export function createButton(address: number = 2): Button
    {
        moziEventId += 1;
        let button = new Button();
        button.currentDeviceAddress = address;
        button.lastStatus = BUTTON_EVENT_TYPE.BUTTON_NO_EVENT;
        button.eventId = moziEventId;
        return button;
    }
    
    /**
     * Registers code to run when a particular button is detected
     * @param button device be specified
     * @param event type of button to detect
     * @param handler code to run
     */
    //% blockId=mozi_button_create_event block="on button|%button|event|%event"
    export function onButton(button: Button, event: BUTTON_EVENT_TYPE, handler: Action) {
        control.onEvent(button.eventId, event, handler);
        if (!button) {
            control.inBackground(() => {
                while(true)
                {
                    const buttonStatus = button.getEventStatus();
                    if (buttonStatus != button.lastStatus) {
                        button.lastStatus = buttonStatus;
                        control.raiseEvent(button.eventId, button.lastStatus);
                    }
                    basic.pause(50);
                }
            })
        }
    }

    export class Matrix extends Mozi
    {
        currentDeviceAddress: number;

        /**
         * Display the LED bar mode on LED matrix.
         * @param bar set the Bar level you want to display from 0 to 18, eg: 0
         * @param time set the display time duration set it to 0 to display forever, eg: 1000
         */
        //% blockId=mozi_matrix_dispaly_bar block="%strip|matrix display bar|%bar|time|%time|ms"
        //% bar.min=0 bar.max=18
        displayBar(bar: number = 0, time: number = 1000)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_LED_MATRIX_CMD_TYPE.I2C_CMD_DISP_BAR;
            data[1] = bar;
            data[2] = time & 0xff;
            data[3] = (time >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Display emoji mode on LED matrix.
         * @param emoji set a number from 0 to 4 for different emoji. 0 is dull, 1 is mad, 2 is sad, 3 is smile, 4 is surprise.
         * @param time set the display time duration set it to 0 to display forever, eg: 1000
         */
        //% blockId=mozi_matrix_dispaly_emoji block="%strip|matrix display emoji|%emoji|time|%time|ms"
        displayEmoji(emoji: EMOJI_TYPE, time: number = 1000)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_LED_MATRIX_CMD_TYPE.I2C_CMD_DISP_EMOJI;
            data[1] = emoji;
            data[2] = time & 0xff;
            data[3] = (time >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Display number mode on LED matrix.
         * @param num set the number you want to display on LED matrix. Long numbers will roll on it, the shorter you set the time duration, the faster it rolls, eg: 0
         * @param time set the display time duration, set it to 0 to display forever, eg: 1000
         */
        //% blockId=mozi_matrix_dispaly_number block="%strip|matrix display number|%num|time|%time|ms"
        displayNumber(num: number = 0, time: number = 1000)
        {
            let data: Buffer = pins.createBuffer(5);
            data[0] = GROVE_TWO_LED_MATRIX_CMD_TYPE.I2C_CMD_DISP_NUM;
            data[1] = num & 0xff;
            data[2] = (num >> 8) & 0xff;
            data[3] = time & 0xff;
            data[4] = (time >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Display string mode on LED matrix.
         * @param str the string pointer, the maximum number is 28 bytes, eg: hello
         * @param time set the display time duration, eg: 1000
         * @param flag false: auto display off; true: always display.
         */
        //% blockId=mozi_matrix_dispaly_string block="%strip|matrix display string|%str|time|%time|ms, always|%flag"
        displayStrings(str: string = "hello", time: number = 1000, flag: boolean = false)
        {
            let len: number = str.length;
            if(len >= 28)len = 28;
            let data: Buffer = pins.createBuffer(len + 4);
            for(let i = 0; i < len; i ++)data[i + 4] = str.charCodeAt(i);
            data[0] = GROVE_TWO_LED_MATRIX_CMD_TYPE.I2C_CMD_DISP_STR;
            data[1] = <number><any>flag;
            data[2] = time & 0xff;
            data[3] = (time >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Display nothing on LED Matrix.
         */
        //% blockId=mozi_matrix_dispaly_stop block="%strip|matrix display stop"
        //% advanced=true
        stopDisplay()
        {
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_LED_MATRIX_CMD_TYPE.I2C_CMD_DISP_OFF);
        }
    }
    
    /**
     * Create a new driver for matrix
     * @param address the address of device, eg: 7
     */
    //% blockId=mozi_create_led_matrix block="create matrix and set address|%address"
    //% address.min=2 address.max=126
    export function createMatrix(address: number = 7): Matrix
    {
        let matrix = new Matrix();
        matrix.currentDeviceAddress = address;
        return matrix;
    }
}
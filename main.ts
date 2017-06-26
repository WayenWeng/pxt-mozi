
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
 * 
 */
enum GROVE_TWO_BUZZER {
    DEF_I2C_ADDR = 0x08,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x8003          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_BUZZER_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_PLAY_TONE = 0x01,       // This command plays a tone for a given beat
    I2C_CMD_RING_TONE = 0x02,       // This command plays a tone for a given duration
    I2C_CMD_PLAY_MELODY = 0x03,     // This command plays a melody
    I2C_CMD_PLAY_STOP = 0x04,       // This command stops playing anything 
    I2C_CMD_SET_BPM = 0x05,         // This command sets BPM
    I2C_CMD_CHG_BPM = 0x06,         // This command changes BPM 
    I2C_CMD_GET_BPM = 0x07,         // This command gets BPM
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
enum GAMUT_TYPE {
    //% block=O
    NOTE_R0 = 0, // Null
    //% block=C4
	NOTE_C4 = 1, // Do
    //% block=D4
	NOTE_D4 = 2, // Re
    //% block=E4
	NOTE_E4 = 3, // Mi
    //% block=F4
	NOTE_F4 = 4, // Fa
    //% block=G4
	NOTE_G4 = 5, // So
    //% block=A4
	NOTE_A4 = 6, // La
    //% block=B4
	NOTE_B4 = 7, // Si
    //% block=C5
	NOTE_C5 = 8, // Do
    //% block=D5
	NOTE_D5 = 9, // Re
    //% block=E5
	NOTE_E5 = 10, // Mi
    //% block=F5
	NOTE_F5 = 11, // Fa
    //% block=G5
	NOTE_G5 = 12, // So
    //% block=A5
	NOTE_A5 = 13, // La
    //% block=B5
	NOTE_B5 = 14, // Si
    //% block=C6
	NOTE_C6 = 15, // Do
    //% block=D6
	NOTE_D6 = 16, // Re
    //% block=E6
	NOTE_E6 = 17, // Mi
    //% block=F6
	NOTE_F6 = 18, // Fa
    //% block=G6
	NOTE_G6 = 19, // So
    //% block=A6
	NOTE_A6 = 20, // La
    //% block=B6
	NOTE_B6 = 21, // Si
}

/**
 * 
 */
enum BEAT_TYPE
{
    //% block=1 beat
	BEAT_1 = 0,		// 1 beat, 60 * 1000 / BPM = 500 ms(BPM = 120)
    //% block=2 beat
	BEAT_2 = 1, 	// 2 beat, 1000 ms
    //% block=4 beat
	BEAT_4 = 2, 	// 4 beat, 2000 ms
    //% block=8 beat
	BEAT_8 = 3, 	// 8 beat, 4000 ms
    //% block=1/2 beat
	BEAT_1_2 = 4,	// 1/2 beat, 250 ms
    //% block=1/4 beat
	BEAT_1_4 = 5,	// 1/4 beat, 125 ms
    //% block=1/8 beat
	BEAT_1_8 = 6,	// 1/8 beat, 62.5 ms
    //% block=1/16 beat
	BEAT_1_16 = 7,	// 1/16 beat, 31.25 ms
};


/**
 * 
 */
enum GROVE_TWO_IMU_9DOF {
    DEF_I2C_ADDR = 0x04,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x0004          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_IMU_9DOF_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_GET_DEV_EVENT = 0x01,   // This command gets device event status
    I2C_CMD_GET_ACCEL_X = 0x02,     // This command gets the accelerometer value on X-axis
    I2C_CMD_GET_ACCEL_Y = 0x03,     // This command gets the accelerometer value on Y-axis
    I2C_CMD_GET_ACCEL_Z = 0x04,     // This command gets the accelerometer value on Z-axis
    I2C_CMD_GET_GYRO_X = 0x05,      // This command gets the gyroscope value on X-axis
    I2C_CMD_GET_GYRO_Y = 0x06,      // This command gets the gyroscope value on Y-axis
    I2C_CMD_GET_GYRO_Z = 0x07,      // This command gets the gyroscope value on Z-axis
    I2C_CMD_GET_MAG_X = 0x08,       // This command gets the magnetometer value on X-axis
    I2C_CMD_GET_MAG_Y = 0x09,       // This command gets the magnetometer value on Y-axis
    I2C_CMD_GET_MAG_Z = 0x0a,       // This command gets the magnetometer value on Z-axis
    I2C_CMD_GET_ACCEL_X_Y_Z = 0x0b, // This command gets the accelerometer values on ALL axis
    I2C_CMD_GET_GYRO_X_Y_Z = 0x0c,  // This command gets the gyroscope values on ALL axis
    I2C_CMD_GET_MAG_X_Y_Z = 0x0d,   // This command gets the magnetometer values on ALL axis
    I2C_CMD_GET_ALL_X_Y_Z = 0x0e,   // This command gets the values of accelerometer, gyroscope and magnetometer on ALL axis
    I2C_CMD_GET_HEADING = 0x0f,     // This command gets direction angle
    I2C_CMD_GET_ROTATION = 0x10,    // This command gets rotation angle
    I2C_CMD_SET_RANGE = 0x11,       // This command sets range
    I2C_CMD_SET_RATE = 0x12,        // This command sets rate
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
enum IMU_EVENT_TYPE // imu event define
{
    //% block=None
    EVENT_NULL = 0,
    //% block=X+
    TILT_X_P = 1,
    //% block=X-
    TILT_X_N = 2,
    //% block=Y+
    TILT_Y_P = 3,
    //% block=Y-
    TILT_Y_N = 4,
    //% block=Z+
	TILT_Z_P = 5,
    //% block=Z-
    TILT_Z_N = 6,
    //% block=Free Fall
	FREE_FALL = 7,
};

/**
 * 
 */
enum IMU_ACCEL_FSR_TYPE // accel range define
{
    IMU_FSR_2G = 0,
    IMU_FSR_4G = 1,
    IMU_FSR_8G = 2,
    IMU_FSR_16G = 3
};

/**
 * 
 */
enum IMU_ACCEL_DLPF_TYPE // accel rate define
{
    IMU_ACCEL_DLPF_460HZ = 0,
    IMU_ACCEL_DLPF_184HZ = 1,
    IMU_ACCEL_DLPF_92HZ = 2,
    IMU_ACCEL_DLPF_41HZ = 3,
    IMU_ACCEL_DLPF_20HZ = 4,
    IMU_ACCEL_DLPF_10HZ = 5,
    IMU_ACCEL_DLPF_5HZ = 6
};

/**
 * 
 */
enum IMU_GYRO_FSR_TYPE // gyro range define
{
    IMU_FSR_250DPS = 0,
    IMU_FSR_500DPS = 1,
    IMU_FSR_1000DPS = 2,
    IMU_FSR_2000DPS = 3
};

/**
 * 
 */
enum IMU_GYRO_DLPF_TYPE // gyro rate define
{
    IMU_GYRO_DLPF_250HZ = 0,
    IMU_GYRO_DLPF_184HZ = 1,
    IMU_GYRO_DLPF_92HZ = 2,
    IMU_GYRO_DLPF_41HZ = 3,
    IMU_GYRO_DLPF_20HZ = 4,
    IMU_GYRO_DLPF_10HZ = 5,
    IMU_GYRO_DLPF_5HZ = 6
};


/**
 * 
 */
enum GROVE_TWO_LIGHT {
    DEF_I2C_ADDR = 0x05,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x0005          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_LIGHT_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_GET_DEV_EVENT = 0x01,   // This command gets device event status
    I2C_CMD_GET_LIGHT = 0x02,       // This command gets light sensor value
    I2C_CMD_SET_THD	= 0x03,         // This command sets light sensor threshold level
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
enum LIGHT_THD_TYPE {
    THD_0_DEF_NUM = 50, // 
    THD_1_DEF_NUM = 200 //
}

enum LIGHT_EVENT_TYPE // light sensor event define
{
    //% block=<_Threshold_0
    LESS_THAN_THD_0 = 1,          // light intensity < threshold 0
    //% block=>=_Threshold_0_and_<_Threshold_1
	AMONG_THD_0_AND_THD_1 = 2,    // threshold 0 <= light intensity < threshold 1
    //% block=>=_Threshold_1
	MORE_THAN_THD_1 = 3           // light intensity >= threshold 1
};


/**
 * 
 */
enum GROVE_TWO_SOUND {
    DEF_I2C_ADDR = 0x06,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x0006          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_SOUND_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_GET_DEV_EVENT = 0x01,   // This command gets device event status
    I2C_CMD_GET_SOUND = 0x02,       // This command gets sound sensor value
    I2C_CMD_SET_THD	= 0x03,         // This command sets sound threshold level level
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
enum SOUND_THD_TYPE {
    THD_0_DEF_NUM = 50, // 
    THD_1_DEF_NUM = 200 //
}

enum SOUND_EVENT_TYPE // sound sensor event define
{
    //% block=<_Threshold_0
    LESS_THAN_THD_0 = 1,          // sound intensity < threshold 0
    //% block=>=_Threshold_0_and_<_Threshold_1
	AMONG_THD_0_AND_THD_1 = 2,    // threshold 0 <= sound intensity < threshold 1
    //% block=>=_Threshold_1
	MORE_THAN_THD_1 = 3           // sound intensity >= threshold 1
};


/**
 * 
 */
enum GROVE_TWO_TEMPERATURE {
    DEF_I2C_ADDR = 0x03,  // The device i2c address in default
    VID = 0x2886,         // Vender ID of the device
    PID = 0x0003          // Product ID of the device
}

/**
 * 
 */
enum GROVE_TWO_TEMPERATURE_CMD_TYPE {
    I2C_CMD_GET_DEV_ID = 0x00,      // This command gets device ID information
    I2C_CMD_GET_DEV_EVENT = 0x01,   // This command gets device event status
    I2C_CMD_GET_TEMP = 0x02,        // This command gets temperature value
    I2C_CMD_SET_THD	= 0x03,         // This command sets temperature threshold level level
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
enum TEMP_THD_TYPE {
    TEMP_THD_0_DEF_NUM = 10, // 
    TEMP_THD_1_DEF_NUM = 40 //
}

enum TEMP_EVENT_TYPE // Temperature sensor event define
{
    //% block=<_Threshold_0
    LESS_THAN_THD_0 = 1,          // Temperature intensity < threshold 0
    //% block=>=_Threshold_0_and_<_Threshold_1
	AMONG_THD_0_AND_THD_1 = 2,    // Temperature 0 <= Temperature intensity < threshold 1
    //% block=>=_Threshold_1
	MORE_THAN_THD_1 = 3           // Temperature intensity >= threshold 1
};


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
                    basic.showNumber(buttonStatus);
                    if (buttonStatus != button.lastStatus) {                        
                        // button.lastStatus = buttonStatus;
                        // control.raiseEvent(button.eventId, button.lastStatus);
                    }
                    basic.pause(50);
                }
            })
        }
    }
    
    export class IMU extends MoziInput
    {        
        private numberFormat(data: number): number
        {
            if(data > 0x7fff)data = 0 - ((data ^ 0xffff) + 1);
            return data;
        }
        
        /**
         * Get the accelerometer value on X-axis.
         */
        //% blockId=mozi_get_imu_accel_axis_x block="%strip|get accel axis x"
        getAccelAxisX(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_IMU_9DOF_CMD_TYPE.I2C_CMD_GET_ACCEL_X);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return this.numberFormat(data[0] + data[1] * 256);
        }
        
        /**
         * Get the accelerometer value on Y-axis.
         */
        //% blockId=mozi_get_imu_accel_axis_y block="%strip|get accel axis y"
        getAccelAxisY(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_IMU_9DOF_CMD_TYPE.I2C_CMD_GET_ACCEL_Y);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return this.numberFormat(data[0] + data[1] * 256);
        }
        
        /**
         * Get the accelerometer value on Z-axis.
         */
        //% blockId=mozi_get_imu_accel_axis_z block="%strip|get accel axis z"
        getAccelAxisZ(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_IMU_9DOF_CMD_TYPE.I2C_CMD_GET_ACCEL_Z);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return this.numberFormat(data[0] + data[1] * 256);
        }
        
        /**
         * Get the accelerometer values on X, Y and Z axis.
         */
        //% blockId=mozi_get_imu_accel_3_axis_data block="%strip|get accel 3 axis"
        //% advanced=true
        getAccel3AxisData(): number[]
        {
            let data: Buffer = pins.createBuffer(6);
            let accel: number[] = [0,0,0];
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_IMU_9DOF_CMD_TYPE.I2C_CMD_GET_ACCEL_X_Y_Z);
            data = i2cReceiveBytes(this.currentDeviceAddress, 6);           
            accel[0] = this.numberFormat(data[0] + (data[1] * 256));
            accel[1] = this.numberFormat(data[2] + (data[3] * 256));
            accel[2] = this.numberFormat(data[4] + (data[5] * 256));
            return accel;
        }
    }
    
    /**
     * Create a new driver for imu
     * @param address the address of device, eg: 4
     */
    //% blockId=mozi_create_imu block="create imu and set address|%address"
    //% address.min=2 address.max=126
    export function createIMU(address: number = 4): IMU
    {
        moziEventId += 1;
        let imu = new IMU();
        imu.currentDeviceAddress = address;
        imu.lastStatus = IMU_EVENT_TYPE.EVENT_NULL;
        imu.eventId = moziEventId;
        return imu;
    }
    
    /**
     * Registers code to run when a particular imu is detected
     * @param imu device be specified
     * @param event type of imu to detect
     * @param handler code to run
     */
    //% blockId=mozi_imu_create_event block="on imu|%imu|event|%event"
    export function onIMU(imu: IMU, event: IMU_EVENT_TYPE, handler: Action) {
        control.onEvent(imu.eventId, event, handler);
        if (!imu) {
            control.inBackground(() => {
                while(true)
                {
                    const imuStatus = imu.getEventStatus();
                    if (imuStatus != imu.lastStatus) {
                        imu.lastStatus = imuStatus;
                        control.raiseEvent(imu.eventId, imu.lastStatus);
                    }
                    basic.pause(50);
                }
            })
        }
    }

    
    export class Light extends MoziInput
    {        
        /**
         * Get the light sensor value.
         */
        //% blockId=mozi_get_light_lux block="%strip|get light lux"
        getLightLux(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_LIGHT_CMD_TYPE.I2C_CMD_GET_LIGHT);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return (data[0] + data[1] * 256);
        }
        
        /**
         * Set the light threshold level 0.
         * @param value the value of light threshold level 0, eg: 50
         */
        //% blockId=mozi_set_light_threshold_0 block="%strip|set light threshold 0|%value"
        //% advanced=true
        setThreshold0(value: number = 50)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_LIGHT_CMD_TYPE.I2C_CMD_SET_THD;
            data[1] = 0;
            data[2] = value & 0xff;
            data[3] = value >> 8;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Set the light threshold level 1.
         * @param value the value of light threshold level 1, eg: 200
         */
        //% blockId=mozi_set_light_threshold_1 block="%strip|set light threshold 1|%value"
        //% advanced=true
        setThreshold1(value: number = 200)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_LIGHT_CMD_TYPE.I2C_CMD_SET_THD;
            data[1] = 1;
            data[2] = value & 0xff;
            data[3] = value >> 8;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
    }
    
    /**
     * Create a new driver for light
     * @param address the address of device, eg: 5
     */
    //% blockId=mozi_create_light block="create light and set address|%address"
    //% address.min=2 address.max=126
    export function createLight(address: number = 5): Light
    {
        moziEventId += 1;
        let light = new Light();
        light.currentDeviceAddress = address;
        light.lastStatus = LIGHT_EVENT_TYPE.LESS_THAN_THD_0;
        light.eventId = moziEventId;
        return light;
    }
    
    /**
     * Registers code to run when a particular light is detected
     * @param light device be specified
     * @param event type of imu to detect
     * @param handler code to run
     */
    //% blockId=mozi_light_create_event block="on light|%light|event|%event"
    export function onLight(light: Light, event: LIGHT_EVENT_TYPE, handler: Action) {
        control.onEvent(light.eventId, event, handler);
        if (!light) {
            control.inBackground(() => {
                while(true)
                {
                    const lightStatus = light.getEventStatus();
                    if (lightStatus != light.lastStatus) {
                        light.lastStatus = lightStatus;
                        control.raiseEvent(light.eventId, light.lastStatus);
                    }
                    basic.pause(50);
                }
            })
        }
    }

    
    export class Sound extends MoziInput
    {        
        /**
         * Get the sound sensor value.
         */
        //% blockId=mozi_get_sound_value block="%strip|get sound value"
        getSoundValue(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_SOUND_CMD_TYPE.I2C_CMD_GET_SOUND);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return (data[0] + data[1] * 256);
        }
        
        /**
         * Set the sound threshold level 0.
         * @param value the value of sound threshold level 0, eg: 50
         */
        //% blockId=mozi_set_sound_threshold_0 block="%strip|set sound threshold 0|%value"
        //% advanced=true
        setThreshold0(value: number = 50)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_SOUND_CMD_TYPE.I2C_CMD_SET_THD;
            data[1] = 0;
            data[2] = value & 0xff;
            data[3] = value >> 8;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Set the sound threshold level 1.
         * @param value the value of sound threshold level 1, eg: 200
         */
        //% blockId=mozi_set_sound_threshold_1 block="%strip|set sound threshold 1|%value"
        //% advanced=true
        setThreshold1(value: number = 200)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_SOUND_CMD_TYPE.I2C_CMD_SET_THD;
            data[1] = 1;
            data[2] = value & 0xff;
            data[3] = value >> 8;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
    }
    
    /**
     * Create a new driver for sound
     * @param address the address of device, eg: 6
     */
    //% blockId=mozi_create_sound block="create sound and set address|%address"
    //% address.min=2 address.max=126
    export function createSound(address: number = 6): Sound
    {
        moziEventId += 1;
        let sound = new Sound();
        sound.currentDeviceAddress = address;
        sound.lastStatus = SOUND_EVENT_TYPE.LESS_THAN_THD_0;
        sound.eventId = moziEventId;
        return sound;
    }
    
    /**
     * Registers code to run when a particular sound is detected
     * @param sound device be specified
     * @param event type of sound to detect
     * @param handler code to run
     */
    //% blockId=mozi_sound_create_event block="on sound|%sound|event|%event"
    export function onSound(sound: Sound, event: SOUND_EVENT_TYPE, handler: Action) {
        control.onEvent(sound.eventId, event, handler);
        if (!sound) {
            control.inBackground(() => {
                while(true)
                {
                    const soundStatus = sound.getEventStatus();
                    if (soundStatus != sound.lastStatus) {
                        sound.lastStatus = soundStatus;
                        control.raiseEvent(sound.eventId, sound.lastStatus);
                    }
                    basic.pause(50);
                }
            })
        }
    }

    
    export class Temperature extends MoziInput
    {       
        /**
         * Get the temperature value.
         */
        //% blockId=mozi_get_temperature_value block="%strip|get temperature value"
        getTemperatureValue(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_TEMPERATURE_CMD_TYPE.I2C_CMD_GET_TEMP);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return (data[0] + data[1] * 256);
        }
        
        /**
         * Set the temperature threshold level 0.
         * @param value the value of temperature threshold level 0, eg: 10
         */
        //% blockId=mozi_set_temperature_threshold_0 block="%strip|set temperature threshold 0|%value"
        //% advanced=true
        setThreshold0(value: number = 10)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_TEMPERATURE_CMD_TYPE.I2C_CMD_SET_THD;
            data[1] = 0;
            data[2] = value & 0xff;
            data[3] = value >> 8;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Set the temperature threshold level 1.
         * @param value the value of temperature threshold level 1, eg: 40
         */
        //% blockId=mozi_set_temperature_threshold_1 block="%strip|set temperature threshold 1|%value"
        //% advanced=true
        setThreshold1(value: number = 40)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_TEMPERATURE_CMD_TYPE.I2C_CMD_SET_THD;
            data[1] = 1;
            data[2] = value & 0xff;
            data[3] = value >> 8;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
    }
    
    /**
     * Create a new driver for temperature
     * @param address the address of device, eg: 3
     */
    //% blockId=mozi_create_temperature block="create temperature and set address|%address"
    export function createTemperature(address: number = 3): Temperature
    {
        moziEventId += 1;
        let temperature = new Temperature();
        temperature.currentDeviceAddress = address;
        temperature.lastStatus = TEMP_EVENT_TYPE .LESS_THAN_THD_0;
        temperature.eventId = moziEventId;
        return temperature;
    }
    
    /**
     * Registers code to run when a particular temperature is detected
     * @param temperature device be specified
     * @param event type of temperature to detect
     * @param handler code to run
     */
    //% blockId=mozi_temperature_create_event block="on temperature|%temperature|event|%event"
    export function onTemperature(temperature: Temperature, event: TEMP_EVENT_TYPE, handler: Action) {
        control.onEvent(temperature.eventId, event, handler);
        if (!temperature) {
            control.inBackground(() => {
                while(true)
                {
                    const temperatureStatus = temperature.getEventStatus();
                    if (temperatureStatus != temperature.lastStatus) {
                        temperature.lastStatus = temperatureStatus;
                        control.raiseEvent(temperature.eventId, temperature.lastStatus);
                    }
                    basic.pause(50);
                }
            })
        }
    }

    export class Matrix extends Mozi
    {
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
    
    
    export class Buzzer extends Mozi
    {
        /**
         * Play a tone for a given beat.
         * @param gamut the tone needed to play.
         * @param beat set the beat as 1, 2, 4, 8, 1/2, 1/4, 1/8 or 1/16.
         */
        //% blockId=mozi_buzzer_play_tone block="%strip|buzzer play tone|%gamut|in|%beat|beats"
        playTone(gamut: GAMUT_TYPE, beat: BEAT_TYPE)
        {
            let data: Buffer = pins.createBuffer(3);
            data[0] = GROVE_TWO_BUZZER_CMD_TYPE.I2C_CMD_PLAY_TONE;
            data[1] = gamut;
            data[2] = beat;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Play a tone for a given time duration.
         * @param gamut the tone needed to play.
         * @param time set the time duration, unit ms.
         */
        //% blockId=mozi_buzzer_ring_tone block="%strip|buzzer ring tone|%gamut|in|%time|ms"
        ringTone(gamut: GAMUT_TYPE, time: number)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_BUZZER_CMD_TYPE.I2C_CMD_RING_TONE;
            data[1] = gamut;
            data[2] = time & 0xff;
            data[3] = (time >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Stop playing anything.
         */
        //% blockId=mozi_buzzer_stop_play block="%strip|buzzer stop play"
        //% advanced=true
        stopPlay()
        {
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_BUZZER_CMD_TYPE.I2C_CMD_PLAY_STOP);
        }
        
        /**
         * Set tempo to a given beats per minute.
         * @param bpm beats Per Minute, eg: 120
         */
        //% blockId=mozi_buzzer_set_tempo_to block="%strip|set buzzer tempo to|%bpm|bpm"
        //% advanced=true
        setTempoTo(bpm: number = 120)
        {
            let data: Buffer = pins.createBuffer(3);
            data[0] = GROVE_TWO_BUZZER_CMD_TYPE.I2C_CMD_SET_BPM;
            data[1] = bpm & 0xff;
            data[2] = (bpm >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Change tempo by a given beats per minute.
         * @param bpm increase tempo by +bpm, or decrease tempo by -bpm.
         */
        //% blockId=mozi_buzzer_change_tempo_by block="%strip|change buzzer tempo by|%bpm|bpm"
        //% advanced=true
        changeTempoBy(bpm: number)
        {
            let data: Buffer = pins.createBuffer(4);
            data[0] = GROVE_TWO_BUZZER_CMD_TYPE.I2C_CMD_CHG_BPM;
            if(bpm >= 0)data[1] = 1;
            else 
            {
                data[1] = 0;
                bpm = bpm * (-1);
            }
            data[2] = bpm & 0xff;
            data[3] = (bpm >> 8) & 0xff;
            i2cSendBytes(this.currentDeviceAddress, data);
        }
        
        /**
         * Get the current tempo as beats per minute.
         */
        //% blockId=mozi_get_buzzer_tempo_to block="%strip|get buzzer tempo"
        //% advanced=true
        getTempoTo(): number
        {
            let data: Buffer = pins.createBuffer(2);
            i2cSendByte(this.currentDeviceAddress, GROVE_TWO_BUZZER_CMD_TYPE.I2C_CMD_GET_BPM);
            data = i2cReceiveBytes(this.currentDeviceAddress, 2);
            return (data[0] + data[1] * 256);
        }
    }
    
    /**
     * Create a new driver for buzzer
     * @param address the address of device, eg: 8
     */
    //% blockId=mozi_create_buzzer block="create buzzer and set address|%address"
    //% address.min=2 address.max=126
    export function createBuzzer(address: number = 8): Buzzer
    {
        let buzzer = new Buzzer();
        buzzer.currentDeviceAddress = address;
        return buzzer;
    }
}
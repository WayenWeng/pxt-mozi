let button = mozi.createButton(GROVE_TWO_DOUBLE_BUTTON.DEF_I2C_ADDR);
let imu = mozi.createIMU(GROVE_TWO_IMU_9DOF.DEF_I2C_ADDR);
let light = mozi.createLight(GROVE_TWO_LIGHT.DEF_I2C_ADDR);
let sound = mozi.createSound(GROVE_TWO_SOUND.DEF_I2C_ADDR);
let temperature = mozi.createTemperature(GROVE_TWO_TEMPERATURE.DEF_I2C_ADDR);
let matrix = mozi.createMatrix(GROVE_TWO_LED_MATRIX.DEF_I2C_ADDR);
let buzzer = mozi.createBuzzer(GROVE_TWO_BUZZER.DEF_I2C_ADDR);

mozi.onButton(button, BUTTON_EVENT_TYPE.BUTTON_A_CLICK, () => {
    basic.showString("AC")
})
mozi.onButton(button, BUTTON_EVENT_TYPE.BUTTON_B_CLICK, () => {
    basic.showString("BC")
})

mozi.onIMU(imu, IMU_EVENT_TYPE.TILT_X_P, () => {
    basic.showString("X+")
})
mozi.onIMU(imu, IMU_EVENT_TYPE.TILT_X_N, () => {
    basic.showString("X-")
})

mozi.onLight(light, LIGHT_EVENT_TYPE.LESS_THAN_THD_0, () => {
    basic.showString("LESS")
})
mozi.onLight(light, LIGHT_EVENT_TYPE.AMONG_THD_0_AND_THD_1, () => {
    basic.showString("AMONG")
})
mozi.onLight(light, LIGHT_EVENT_TYPE.MORE_THAN_THD_1, () => {
    basic.showString("MORE")
})

mozi.onSound(sound, SOUND_EVENT_TYPE.LESS_THAN_THD_0, () => {
    basic.showString("LESS")
})
mozi.onSound(sound, SOUND_EVENT_TYPE.AMONG_THD_0_AND_THD_1, () => {
    basic.showString("AMONG")
})
mozi.onSound(sound, SOUND_EVENT_TYPE.MORE_THAN_THD_1, () => {
    basic.showString("MORE")
})

mozi.onTemperature(temperature, TEMP_EVENT_TYPE.LESS_THAN_THD_0, () => {
    basic.showString("LESS")
})
mozi.onTemperature(temperature, TEMP_EVENT_TYPE.AMONG_THD_0_AND_THD_1, () => {
    basic.showString("AMONG")
})
mozi.onTemperature(temperature, TEMP_EVENT_TYPE.MORE_THAN_THD_1, () => {
    basic.showString("MORE")
})

while(true)
{
    matrix.displayStrings("Hello World", 6000, false);
    buzzer.playTone(GAMUT_TYPE.NOTE_G6, BEAT_TYPE.BEAT_1_2);
    basic.pause(6000);
}

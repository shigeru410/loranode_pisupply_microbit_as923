IotLoRaNode.SetRegion(region.AS92X)
IotLoRaNode.InitialiseRadio(
"2604185C",
"9AF3FC9D7A21E05CAF59C9D0528BCBCE",
"A0AD13A7D52BD94F13C5C9D905012E7A",
SpreadingFactors.Ten
)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.clearScreen()
    IotLoRaNode.DigitalValue(true, Channels.One)
    IotLoRaNode.AnalogueValue(42, Channels.Two)
    IotLoRaNode.TemperatureValue(input.temperature(), Channels.Three)
    IotLoRaNode.AccelorometerValue(
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    input.acceleration(Dimension.Z),
    Channels.Four
    )
    IotLoRaNode.LightValue(input.lightLevel(), Channels.Five)
    basic.showArrow(ArrowNames.North)
    IotLoRaNode.loraTransmitPayload()
    basic.showArrow(ArrowNames.South)
    serial.writeLine("Waiting 10 sec.")
    basic.pause(10000)
})

function toKilogram(toPond)
{
    let value =(toPond / 2.20462)
    return value.toFixed(2) + " ปอนด์"
}
function toPond(toKilogram)
{
    let value =(toKilogram * 2.20462)
    return value.toFixed(2) + " กิโลกรัม"
}

function toKilogramProgram(value)
{
    alert(toKilogram(value))
}
function toPondProgram(value)
{
    alert(toPond(value))
}
// 1. kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        return 'This value is not valid.';
    }
}
var measurement = kilometerToMeter(13);
console.log(measurement);
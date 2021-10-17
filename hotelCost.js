// 3. hotelCost

function hotelCost(days) {
    if (days >= 0) {
        var cost = 0;
        if (days <= 10) {
            var cost = days * 100;
        } else if (days <= 20) {
            var firstTenDaysCost = 100 * 10;
            var remainingDays = days - 10;
            var secondTenDaysCost = remainingDays * 80;
            cost = firstTenDaysCost + secondTenDaysCost;
        } else {
            var firstTenDaysCost = 100 * 10;
            var secondTenDaysCost = 80 * 10;
            var remainingDays = days - 20;
            var afterTwentyDaysCost = remainingDays * 50;
            cost = firstTenDaysCost + secondTenDaysCost + afterTwentyDaysCost;
        }
        return cost;
    } else {
        return 'This value is not valid.';
    }
}
var hotelTotalCost = hotelCost(22);
console.log(hotelTotalCost);
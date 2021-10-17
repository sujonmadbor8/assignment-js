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



// 2. budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if ((watch && phone && laptop) >= 0) {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    } else {
        return 'This value is not valid.';
    }

}
var totalBudget = budgetCalculator(2, 3, 2);
console.log(totalBudget);



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


// 4. megaFriend
function megaFriend(friendsName) {
    var longestWord = '';
    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > longestWord.length) {
            longestWord = friendsName[i];
        }
    }
    return longestWord;
}
var friendsName = ['sujon', 'rakibUllah', 'shohagUllah', 'afsarul', 'shahidul'];
console.log(megaFriend(friendsName));
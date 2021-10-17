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
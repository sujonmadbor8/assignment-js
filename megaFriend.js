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
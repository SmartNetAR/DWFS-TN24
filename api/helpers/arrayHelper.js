
function getRandomArrayItem(ArrayItems) {
    return ArrayItems[Math.floor((Math.random() * ArrayItems.length))];
}


module.exports = {getRandomArrayItem};

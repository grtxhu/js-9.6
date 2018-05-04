var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var element = document.createElement('li');
    var liElements = list.getElementsByTagName('li');
    element.innerHTML = ('item ' + number.length);
    list.appendChild(element);
});

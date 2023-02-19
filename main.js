// cm2 to m2
function changeUnit() {

}

// take a and b then return area 
function calculateArea(a, b, type) {
    switch (type) {
        case 'triangle':
            return .5 * a * b;
        case 'rectangle':
            return a * b;
        default:
            return 0;
    }
}

// get input data from cards, get area and insert into results section
const calculateEls = document.querySelectorAll('.calculate-area');

calculateEls.forEach(function (item) {
    item.addEventListener('click', function () {
        // get input data and calculate area
        var aEl = item.parentNode.querySelector('[name=a]')
        var bEl = item.parentNode.querySelector('[name=b]')
        var type = item.parentNode.id

        // validations
        if (!aEl.value || !bEl.value) {
            alert('Input is empty');
            return;
        }
        if (!type) {
            alert('Invalid type')
            return;
        }

        var area = calculateArea(
            Number(aEl.value) || 0,
            Number(bEl.value) || 0,
            type
        );

        // update results section
        const resultEl = document.querySelector(`.results__item.${type}`)
        resultEl.querySelector('.results__number').innerHTML = area
    })
})

// generate random light color
function generateRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

// random color on card hover
document.querySelectorAll('.theme-card').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = generateRandomColor()
    });

    item.addEventListener('mouseleave', function () {
        item.style.backgroundColor = '#fff'
    });
})

// change unit
// document.querySelectorAll('.change-unit').forEach(function (item) {
//     item.addEventListener('click', function() {
//         var areaEl = this.parentNode.querySelector('.results__number');
//         var unitEl = this.parentNode.querySelector('.results__unit');
//         areaEl.innerHTML = (Number(areaEl.innerHTML) || 0) / 100
//         unitEl.innerHTML = 'm'
//         this.disabled = true
//     })
// })

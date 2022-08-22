const boxs = {
    length: 24,
    widht: 17,
    height: 4,
    price: '10 грн',
};

const boxm = {
    length: 34,
    widht: 24,
    height: 15,
    price: '30 грн',
};

const boxl = {
    length: 60,
    widht: 35,
    height: 28,
    price: '50 грн',
};

const el1 = document.querySelector('input[name="lenght"]');
const el2 = document.querySelector('input[name="widht"]');
const el3 = document.querySelector('input[name="height"]');
const el4 = document.querySelector('.button');


const createItem = el4.addEventListener('click', (click) => {
    let itemLenght = el1.value;
    let itemWidht = el2.value;
    let itemHeight = el3.value;

    let item = [itemLenght, itemWidht, itemHeight];
 
    item.sort(function(a, b) {
        return b - a;
    });

    console.log(item);
    
    getMatchingBoxPrice(boxs, boxm, boxl, item);
});

const getMatchingBoxPrice = (boxs, boxl, boxm, item) => {  
    if (boxs.length > item[0] && boxs.widht > item[1] && boxs.height > item[2]) {
        console.log(boxs.price);
        return;
    };
    if (boxm.length > item[0] && boxm.widht > item[1] && boxm.height > item[2]) {
        console.log(boxm.price);
        return;
    };
    if (boxl.length > item[0] && boxl.widht > item[1] && boxl.height > item[2]) {
        console.log(boxl.price);
        return;
    } else {
        console.log('усі коробки замалі');
        return;
    };
};


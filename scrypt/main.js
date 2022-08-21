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

    let item = {
        lenght: itemLenght,
        widht: itemWidht,
        height: itemHeight
    };

    sortedItems = Object.keys(item).sort(function(a,b) {
        return item[a] - item[b];
    });




    console.log(sortedItem());
    const sortingItem = () => {
        if (item.lenght < item.widht);
        
    }

    const isFitting = () => {
        
        if (boxs.length > item.lenght && boxs.widht > item.widht && boxs.height > item.height) {
            console.log('підійшлаS');
            return;
        };
        if (boxm.length > item.lenght && boxm.widht > item.widht && boxm.height > item.height) {
            console.log('підійшлаM');
            return;
        };
        if (boxl.length > item.lenght && boxl.widht > item.widht && boxl.height > item.height) {
            console.log('підійшлаL');
            return;
        } else {
            console.log('усі коробки замалі');
            return;
        };
    
    };
    isFitting();
});






const getMatchingBoxPrice = () => {};


let items = [];


const addPizzaForm = document.querySelector('.add-pizza-form');
const list = document.querySelector('.list');


function handleSubmit (event){

event.preventDefault();
const title       = event.currentTarget.title.value;
const price       = event.currentTarget.price.value;
const image       = event.currentTarget.image.value;
const description = event.currentTarget.description.value;

if(!title || !price || !image || !description) return;


const item = {
    title,
    price,
    image,
    description,
    selected: false,
    id: Date.now(),
    
    }
items.push(item);
event.currentTarget.reset();
displayItems();

};

function displayItems(){
const html = items.map(item => {
return
(`
    <li class='pizza-item'>
    <button class='delete'>&times;</button>
    <div class='pizza-item-image'>
        <img src='${item.image}' alt='${item.title}'/>
        </div>
            <div class='pizza-item-details'>
                <div class='pizza-item-details-top'>
                    <div class='itemHeader'>
                    <input type='checkbox'/>
                    <span class='itemName'>${item.title}</span>
                </div>
                <span class='itemPrice'>${item.price}</span>
            </div>
            <span class='pizza-item-details-bottom'>${item.description}</span>
    </div>
    </li>
`)


}).join('');

list.innerHTML = html;
}


addPizzaForm.addEventListener('submit', handleSubmit);




function edit(id, newPizzaName){
const itemIndex = items.findIndex(responce => responce.id === id);

items[itemIndex].title = newPizzaName;

displayItems();
};

function remove(id){
   items = items.filter(responce => responce.id !== id );
   displayItems();
};


function markAsSelected(id){
const itemIndex = items.findIndex(responce => responce.id === id); 
const pizzaItems = items[itemIndex]
pizzaItems.selected = !pizzaItems.selected;
displayItems();
};


function selectPizzas(){
let checkedPizzas = 0;
let itemsChecked = [];

items.forEach(res => {
    if (res.selected === true){
        checkedPizzas++;
    }
    
});
if (checkedPizzas === items.length){
    itemsChecked = items.map(res => {
        return{
            ...res,
            selected: false,
        }
    })
} else{
    itemsChecked = items.map(res => {
        return{
            ...res,
            selected: true,
        }

    })
}
items = itemsChecked;
displayItems();
}



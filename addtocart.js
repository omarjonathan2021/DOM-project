const product = [
    {
        id: 0,
        image: 'images/iphone-15-G.jpg',
        title: 'iphone 15',
        price: 150, 
    },
    {
        id: 1,
        image: 'images/iphone.jpg',
        title: 'iphone 15',
        price: 250, 
    },    
    {
        id: 2,
        image: 'images/z_fold_5.jpg',
        title: 'iphone 15',
        price: 120, 
    },     
    {
        id: 3,
        image: 'images/samsung-galaxy-s10.jpg',
        title: 'iphone 15',
        price: 120, 
    }    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    let {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>add to cart</button>"+
        `</div>
        </div>` 
    )
}).join('')


let cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}


// delete from cart
function delElement(a){
    cart.splice(a, 1);
    displaycart();
} 

function displaycart(a){
    let j = 0, total=0;


    // add to cart item count
    document.getElementById("count").innerHTML=cart.length;
   
    if(cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        

        // Adding the Total amount of items in cart 
        document.getElementById("total").innerHTML = "$ "+0+".00";
    
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}


// 
let products = document.querySelector('.products');
let bas = document.querySelector('.bas');

let menu = [
    {
        picture : 'bmw.png',
        category : 'BMW',
        href : "index2.html"
    },
    {
        picture : 'mercedes.webp',
        category : 'Mercedes-Benz',
        href : "index3.html"
    }
]

function printCategorys(product){
    product.forEach(prod => {
        let prod1 = document.createElement('div');
        products.appendChild(prod1);
        prod1.className = 'prod1';
        let prodImg = document.createElement('img');
        let prodCatergory = document.createElement('a');
        prodImg.src = prod.picture ;
        prodCatergory.innerText = prod.category;
        prodCatergory.href= prod.href
        prod1.append(prodImg,prodCatergory)
        
    });
}

let contbmw = [
    {
        picture : 'bmw m3.jpg',
        name : 'BMW M3',
        price : '70000 $',
    },
    {
        picture : 'bmwM4.jpeg',
        name : 'BMW M5',
        price : '80000 $',
    },
    {
        picture : 'bmw m5.webp',
        name : 'BMW M4',
        price : '90000 $',
    },
    {
        picture : 'bmwm8.jpeg',
        name : 'BMW M8',
        price : '100000 $',
    },
];

let contmerc = [
    {
        picture : 'merc1.avif',
        name : 'Mercedes-Benz',
        price : '70000 $',
    },
    {
        picture : 'merc2.jpg',
        name : 'Mercedes-Benz',
        price : '80000 $',
    },
    {
        picture : 'merc2.webp',
        name : 'Mercedes-Benz',
        price : '90000 $',
    },
    {
        picture : 'mercb.avif',
        name : 'Mercedes-Benz',
        price : '100000 $',
    },
]



function printProducts(prodcut1){
    prodcut1.forEach(prod1=>{
        let prod2 = document.createElement('div');
        products.appendChild(prod2);
        prod2.className = 'prod1';
        let prodImg = document.createElement('img');
        let prodName = document.createElement('h3');
        let prodPrice = document.createElement('h3'); 
        let prodButton = document.createElement('button')
        prodImg.src = prod1.picture ;
        prodName.innerText = prod1.name;
        prodPrice.innerText = prod1.price;
        prodButton.innerText = 'Buy';
        prod2.append(prodImg,prodName,prodPrice,prodButton);

   

        prodButton.onclick =()=>{
            let count = document.createElement('div');
            count.className = 'count';
            bas.appendChild(count);
            let countImg = document.createElement('img');
            let countName = document.createElement('h3');
            let countPrice = document.createElement('h3');
            countImg.src = prod1.picture ; 
            countName.innerText = prod1.name ; 
            countPrice.innerText = prod1.price ;
            let countButton = document.createElement('button');
            countButton.innerText = 'Buy'
            let plus = document.createElement('i');
            let p = document.createElement('p');
            p.innerText = '1'
            let minus = document.createElement('i');
            plus.className = 'fa fa-plus';
            minus.className = 'fa fa-trash';
            count.append(countImg,countName,countPrice,minus,p,plus,countButton);
            plus.onclick = () =>{
                p.innerText++;
                minus.className = 'fa fa-minus'
            }
            minus.onclick = function(){
                p.innerText-- ;
                if(p.innerText <=1){
                    minus.className = 'fa fa-trash'
                }
                if(p.innerText==0){
                    this.parentElement.remove()
                }
            }
            countButton.onclick = function(){
                alert('Congratulations!!!');
                this.parentElement.remove()

            }
        }
        
    
    })
}






if (window.location.href.indexOf("index1") > -1) {
    printCategorys(menu);
}
if (window.location.href.indexOf("index2") > -1) {
    printProducts(contbmw);
}
if (window.location.href.indexOf("index3") > -1) {
    printProducts(contmerc);
}


let shopcart = document.querySelector('.shopcart');
let x1 = document.createElement('button')
bas.append(x1);
x1.className = 'x1'
x1.innerText ='X'


shopcart.onclick = () => {
    bas.style.transform = 'scale(1)'
}

x1.onclick = () => {
    bas.style.transform = 'scale(0)'
}

//store the products array in localstorage as "products"
var arr = JSON.parse(localStorage.getItem("products")) || []
function admin(type,dese,price,img)
{
    this.type = type,
    this.dese = dese,
    this.price = price,
    this.image = img
}

function addproducts(event){
    event.preventDefault();

    var form = document.getElementById("products");

    var type = form.type.value;

    var description = form.dese.value;

    var price = form.price.value;

    var image = form.image.value;

    var aniketadmin = new admin(type,description,price,image)
    // console.log(aniketadmin)
    arr.push(aniketadmin)
    console.log(arr)

    localStorage.setItem("products",JSON.stringify(arr))
}

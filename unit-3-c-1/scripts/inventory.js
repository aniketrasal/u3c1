var product = JSON.parse(localStorage.getItem("products"))  || []

product.map(function(ele,index) {
    var all_products = document.getElementById("all_products")

    var box = document.createElement("div")
    box.setAttribute("id","box")

    var image = document.createElement("img")
    image.src = ele.image
    image.setAttribute("id","img")

    var type = document.createElement("h4")
    type.innerText = `Product Type: ${ele.type}`

    var dese = document.createElement("h4")
    dese.innerText = `Description: ${ele.dese}`

    var price = document.createElement("h4")
    price.innerText = `RS: ${ele.price}`

    var removebtn = document.createElement("button")
    removebtn.setAttribute("id","remove_product")
    removebtn.innerText = "Remove"
    removebtn.style.backgroundColor = "black"
    removebtn.style.color = "white"
    removebtn.addEventListener("click",function(){
        remove(ele,index)
    })
    box.append(image,type,dese,price,removebtn)
    document.querySelector("#all_products").append(box)


})

function remove(ele,index){
    product.splice(index,1)
    localStorage.setItem("products", JSON.stringify(product))
    window.location.reload()
}

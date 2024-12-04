var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDesc=document.getElementById("productDesc");
var Proudcts;
var currentIndex=-1;
if(localStorage.getItem("crud")==null)
{
    Proudcts=[];
}
else
{
    Proudcts=JSON.parse(localStorage.getItem("crud"));
     displayProuducts();
}
function addProduct()
{
   
 var proudct=
 {
    name:productName.value ,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value
 };
 if(document.getElementById('mainBtn').innerHTML=='Update')
    {   //update
        Proudcts[currentIndex]=proudct;
        document.getElementById('mainBtn').innerHTML='Add Product';
        currentIndex=-1
        
    }
    else
    {    //add
        Proudcts.push(proudct);
    }
 
 localStorage.setItem("crud",JSON.stringify(Proudcts));
 clear();
 displayProuducts();
 
}
function clear()
{
    productName.value="";
    productPrice.value="";
    productDesc.value="";
    productCategory.value="";
}
function displayProuducts()
{
    var cartoona="";
    for(var i=0;i<Proudcts.length;i++)
    {
        cartoona+=`<tr>
                        <td>${i}</td>
                        <td>${Proudcts[i].name}</td>
                        <td>${Proudcts[i].price}</td>
                        <td>${Proudcts[i].category}</td>
                        <td>${Proudcts[i].desc}</td>
                        <td><button onclick="displayForUpdate(${i})" class="btn btn-outline-warning">update</button></td>
                        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
                        
                    </tr>
        `;
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}
function deleteProduct(index)
{
    Proudcts.splice(index,1);
    localStorage.setItem("crud",JSON.stringify(Proudcts));
    displayProuducts();
}
function searchProduct(term)
{
    var cartoona="";
    for(var i=0;i<Proudcts.length;i++)
    {
        if(Proudcts[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            cartoona+=`
            <tr>
                        <td>${i}</td>
                        <td>${Proudcts[i].name}</td>
                        <td>${Proudcts[i].price}</td>
                        <td>${Proudcts[i].category}</td>
                        <td>${Proudcts[i].desc}</td>
                        <td><button class="btn btn-outline-warning">update</button></td>
                        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
                        
                    </tr>`;
        }
       
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}
function displayForUpdate(productIndex)
{
     productName.value=Proudcts[productIndex].name;
     productPrice.value=Proudcts[productIndex].price;
     productCategory.value=Proudcts[productIndex].category;
     productDesc.value=Proudcts[productIndex].desc;
     document.getElementById('mainBtn').innerHTML='Update';
     currentIndex=productIndex;
}
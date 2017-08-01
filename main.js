

let customerList = document.querySelector( "#mainSection" );


let picture =  customers.results[1].picture.large
let firstName = customers.results[1].name.first
let lastName = customers.results[1].name.last
for(var i = 0; i<customers.results.length; i++) {

    let div1 = document.createElement("div")



    let customer = customers.results[i]

    let img = document.createElement("img")
    img.src = customer.picture.large


    let label = document.createElement("label")
    label.innerHTML = `${customer.name.first} ${customer.name.last}`
    label.className = "name"

    let email = document.createElement("label")
    email.innerHTML = `${customer.email}`
    email.className = "email"

    let street = document.createElement("label")
    street.innerHTML = `${customer.location.street}`
    street.className = "street"

    let city = document.createElement("label")
    city.innerHTML = `${customer.location.city}`
    city.className = "city"

    let postcode = document.createElement("label")
    postcode.innerHTML = `${customer.location.postcode}`
    postcode.className = "city"







    let phone = document.createElement("label")
    phone.innerHTML = `${customer.phone}`
    phone.className = "phone"


    div1.appendChild( img );
    div1.appendChild( label );
    div1.appendChild( email );
    div1.appendChild( street );
    div1.appendChild( city );
    div1.appendChild( postcode );
    div1.appendChild( phone );
    customerList.append(div1);

}

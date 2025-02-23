
function print(obj){
    let s=""
    for(let i in obj){
        s+=(i+": "+obj[i]+" ")
    }
    console.log(s)
}
let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
print(book)
// title: The Hobbit author: J.R.R. Tolkien year: 1937
let book1 = { title: "Jersey", author: "Gowtham Thinnanuri", year: 2016 }
print(book1)
//title: Jersey author: Gowtham Thinnanuri year: 2016
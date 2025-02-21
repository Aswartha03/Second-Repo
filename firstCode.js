function checkEligiblity(age){
    if(age<=0){
        console.log("Invalid Age")
    }
    else{
        let ans=(age>=60) ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount" ;
        console.log(ans)
    }
}
checkEligiblity(65)
checkEligiblity(-1)
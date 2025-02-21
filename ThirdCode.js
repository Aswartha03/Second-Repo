function Grade(obj){
    for(let ele in obj){
        if(obj[ele]>=90){
            obj[ele]="A"
        }
        else if(obj[ele]>=80 && obj[ele]<90){
            obj[ele]="B"
        }
        else if(obj[ele]>=70 && obj[ele]<80){
            obj[ele]="C"
        }
        else if(obj[ele]>=60 && obj[ele]<70){
            obj[ele]="D"
        }
        else{
            obj[ele]="F"
        }
    }
    for(let ans in obj){
        console.log(ans+" - "+obj[ans])
    }
}
let obgect={
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45   
}
Grade(obgect)
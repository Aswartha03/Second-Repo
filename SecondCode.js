function Largest(n1,n2,n3){
    var ans=(n1>n2 && n1>n3) ? n1 : (n2>n3 && n2>n1) ? n2 :n3 ;
    console.log(ans)
}
Largest(45,78,33)//78
Largest(3,4,5)//5
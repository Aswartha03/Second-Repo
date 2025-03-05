function pattern(n){
    for(let i=1;i<=n-1;i++){
        let ans=""
        for(let j=1;j<=(n-i);j++){
            ans+=" "
        }
        for(let j=1;j<=(2*i)-1;j++){
            ans+="*"
        }
        console.log(ans)
    }
    for(let i=1;i<=n;i++){
        
        if(i==n){
            let ans=""
            for(let j=1;j<=n-1;j++){
                ans+=" "
            } 
            ans+="|" 
            console.log(ans)
        }
        // ans+="|"
        


    }
}
pattern(5)
pattern(3)
pattern(4)
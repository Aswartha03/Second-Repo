function pine_tree(n){
    for(let i=1;i<=n-1;i++){
        let ans=""
        for(let j=1;j<=(n-1-i);j++){
            ans+=" "
        }
        for(let j=1;j<=(2*i)-1;j++){
            ans+="*"
        }
        console.log(ans)
    }
    for(let i=1;i<=n;i++){
        if(i==n){
            let res=""
            for(let j=1;j<n-1;j++){
                res+=" "
            }
            res+="|"
            console.log(res)
        }
    }
}
pine_tree(5)
pine_tree(4)
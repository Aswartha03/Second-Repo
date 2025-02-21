function userRole(dict){
    var s1=(dict["role"]=="admin" && dict["active"]==true)
    var s2=(dict['role']=="admin" && dict["active"]==false)
    var s3=(dict['role']=="user" && dict['active']==true)
    var s4=(dict['role']=="user" && dict['active']==false)
    var ans = (s1===true) ? "Admin Access Granted!" : (s2===true)? "Admin Access Revoked" : (s3===true)? "User Access Granted!":(s4==true)? "User Access Revoked" :"Access Denied" ;
    console.log(ans)
}
let user = { name: "Alice", role: "admin", active: false }
userRole(user)
let m= {name: "Bob", role: "user", active: true }
userRole(m)
let user1 = { name: "Alice", role: "admin", active: true }
userRole(user1)
let m1= {name: "Bob", role: "user", active: false }
userRole(m1)
let m2= {name: "Bob", role: "u", active: false }
userRole(m2)
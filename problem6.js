function Privilege(person){
    if(person.role!="admin" && person.role!="manager" && person.role!="user"){
        console.log("Invalid Role")
    }
    else if(person.role=="admin"){
        let ans1=(person.active==true && person.experience>5 && person.department=="IT")? "Full IT Admin Access": (person.active==true && person.department!="IT" && person.experience>5)? "Full General Admin Access": (person.active==true && person.experience<=5)? "Limited Admin Access": "Admin Access Revoked" ;
        console.log(ans1)
    }
    else if(person.role=="manager"){
        let ans2=(person.active==true && person.experience>3 && person.department=="Sales")? "Full Sales Manger Access" : (person.active==true && person.experience>3 && person.department!="Sales")?"Full Manager Access":(person.active==true && person.experience<=3)? "Limited Manager Access": "Manager Access Revoked" ;
        console.log(ans2) 
    }
    else if(person.role=="user"){
        let ans3=(person.active==true && person.department=="Support")?"Priority Support Access": (person.active==true && person.department!="Support")?"User Access": "User Access Revoked"
        console.log(ans3)
    }
} 
let person1 ={ role: "admin", experience: 7, active: true, department: "IT" }
Privilege(person1)
let person2= { role: "user", experience: 2, active: true, department: "Support" };
Privilege(person2)
let person3 = { role: "manager", experience: 4, active: true, department: "Marketing" };
Privilege(person3)
let person4 = { role: "admin", experience: 3, active: false, department: "Finance" };
Privilege(person4)
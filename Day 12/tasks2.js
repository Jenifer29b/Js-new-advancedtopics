let user = {
    name: "ruban",
    sayhii : function () {
        console.log("hii I am",this.name)
    },
    changename: function () {
        let { name: surname } = user // change name to surname
        user.surname = "jeni"    // modify the name of surname
        console.log(user.surname) 
    } ,
    newname(newnaming)  {
        this.surname = newnaming
        console.log("this is new name",this.surname)
    }
}
user.sayhii()
user.changename()
user.newname("justin")

let caculator = {
    
    add : (a, b)=>{
        console.log("addition" , a+b)
    }
}
caculator.add(10,10)
const student={
    name:"Madhav",
    marks:95,
    prop:this, // global scope
    getname:function(){
        console.log(this);
        return this.name
    },
    getmarks: () =>{
        console.log(this); // parent's scope->window
        return this.marks;
    },

    getinfo1: function()
    {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    } ,
    getinfo2: function()
    {
        setTimeout(function()  {
            console.log(this); // window
        }, 2000);
    } , 

}
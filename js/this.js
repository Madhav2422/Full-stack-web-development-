                // this keyword refers to an object that is executing the piece of code 
const student={
    name: "Madhav",
    age:23,
    math:100,
    phy:99,
    eng:100,

    getavg()
    {
        // console.log(this);
        let avg=(this.math+this.phy+this.eng)/3
        console.log(avg);

    }

}

// function getavg()
// {
//     console.log(this);
// }
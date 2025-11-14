import { DefaultService } from "./generated/services/DefaultService";

async function main(){
    const res = await DefaultService.getUser("123")
    console.log(res)
}

main()
import axios, {AxiosResponse} from 'axios';
import {NextApiRequest, NextApiResponse} from 'next'

interface tokenResponse{
    token: string;
}

interface objectQuery {
    domainBase: string,
    username: string,
    password: string,
    service: string,
}

export default async function getToken(request: NextApiRequest, response: NextApiResponse) {


    const {
        domainBase,
        username,
        password,
        service
    }: objectQuery = request.body as unknown as objectQuery


    /* 
        domainBase = <domainBase>
        username = <username>
        password = <password>
        service = moodle_mobile_app

    */

    // const data: Response = await fetch(`https://${domainBase}?username=${username}&password=${password}&service=${service}`)
    try {
        const {data}: AxiosResponse = await axios.get(`https://${domainBase}?username=${username}&password=${password}&service=${service}`)
        console.log("data:", data)
        const {token}: tokenResponse = await data.json();
        console.log(token)
        response.json({
            result: {
                domainBase,
                username,
                password,
                service
            }
        })
    }catch(e) {
        console.log("erro parte do token")
        // console.log(e)
        response.json({
            result: {
                domainBase,
                username,
                password,
                service,
                error: e
            }
        })
    }

    
}


export default class APIService {
    static async LoginUser(body) {
        const response = await fetch('http://127.0.0.1:8000/api/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await response.json();
         
    }
    static  async RegisterUser(body) {
        const response = await fetch('http://127.0.0.1:8000/api/users/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await response.json();
         
    }



    static async ApplyForm(body, token) {
        const response = await fetch('http://127.0.0.1:8000/api/application/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                // 'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        });
        return await response.json();
        
    }

   
    
}
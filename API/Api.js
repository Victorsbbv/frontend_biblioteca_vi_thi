const BASE_URL = 'http://localhost:5079/api/Task' // MUDAR CONFORME NOVO


// GET
export const getRequest = async() => {
    try {
        // executa o comando
        const response = await fetch (BASE_URL, {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (!response.ok){
            throw new Error(`GET Request failed with status: ${response.status}`);
        }

        const textData= await response.text();
        const data = JSON.parse(textData);

        return data;

    } catch (error) {
        
        // tratativa - em caso de erro
        console.error(error);
        throw error;
    }
}


// GET POR ID
export const getRequestid = async(id) => {
    try {
        // executa o comando
        const response = await fetch (`${BASE_URL}/${id}`, {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (!response.ok){
            throw new Error(`GET Request failed with status: ${response.status}`);
        }

        const textData= await response.text();
        const data = JSON.parse(textData);

        return data;

    } catch (error) {
        
        // tratativa - em caso de erro
        console.error(error);
        throw error;
    }
}


// POST
export const postRequest = async (id, usuario, nascimento ) => {
    try {
        let myBody = {
            IdLivro : id,
            UserName: usuario,
            UserAno: nascimento
        };

        const response = await fetch(BASE_URL,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myBody),
        });

        if(!response.ok){
            throw new Error("Post request failed!!!")
        }

        const textData = await response.text();
        return JSON.parse(textData);
    } catch (error){
        console.error(error);
        throw error;
}

};
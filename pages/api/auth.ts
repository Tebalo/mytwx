import axios from 'axios';

interface LoginData{
    username: string;
    password: string;
}

interface ApiResponse{
    success: boolean;
    message: string;
    token?: string;
}

export const login = async (data: LoginData): Promise<ApiResponse> => {
    try{
        const response = await axios.post('http://192.168.0.100:8000/api/register', data);
        return response.data;
    }catch(e){      
        console.error(e);
        const errorMessage = 'Something went wrong';
        return {success: false,message: errorMessage};
    }
};
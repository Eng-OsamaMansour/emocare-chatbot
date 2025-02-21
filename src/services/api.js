const BASE_API_URL = 'http://127.0.0.1:8080';
const AI_API_URL = 'http://localhost:5000';

export const signup = async (formData) => {
    try {
        const response = await fetch(`${BASE_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred during sign up');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'An unexpected error occurred');
    }
};

export const signin = async (username, password) => {
    try {
        const response = await fetch(`${BASE_API_URL}/auth/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred during login');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'An unexpected error occurred');
    }
};

export const fetchUserData = async (token, username) => {
    try {
        const response = await fetch(`${BASE_API_URL}/user/${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'An unexpected error occurred');
    }
};

export const send_receive_text = async (text) => {
    try {
        const response = await fetch(`${AI_API_URL}/send_receive_text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "text": text })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred during send_receive_text');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'An unexpected error occurred');
    }
}

export const send_receive_voice = async (audio) => {
    try {
        const response = await fetch(`${AI_API_URL}/send_receive_audio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: audio
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred during send_receive_voice');
        }

        return await response;
    } catch (error) {
        throw new Error(error.message || 'An unexpected error occurred');
    }
}

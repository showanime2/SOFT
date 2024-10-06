export class UseFetch {
    constructor() {

    }

    // Method to make a GET request
    async get(endpoint) {
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Check if the response is okay (status in the range 200-299)
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json(); // Parse and return JSON data
        } catch (error) {
            console.error('GET request failed:', error);
            throw error; // Rethrow the error for further handling
        }
    }

    // Method to make a POST request
    async post(endpoint, data) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Stringify the data for the request body
            });

            // Check if the response is okay
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json(); // Parse and return JSON data
        } catch (error) {
            console.error('POST request failed:', error);
            throw error; // Rethrow the error for further handling
        }
    }
}

const useFetch = new UseFetch()
export default useFetch
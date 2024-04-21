export default async (method, route, body = {}) => {
    try {
        const BASE_URL = 'http://127.0.0.1:8088/api/';
        const init = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        if (
            method.toLowerCase() !== 'get' &&
            method.toLowerCase() !== 'delete'
        )
            init.body = body;
        const response = await fetch(`${BASE_URL}${route}`, init);

        if (!response.ok && response.status === 422) {
            console.log('!response.ok && response.status === 422');
            const errorData = await response.json();
            console.log({ errorData });
            return errorData;
        }
        if (!response.ok) {
            console.log('!response.ok');
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log({ data });
        return data;
    } catch (error) {
        console.error('Error: ' + route);
        console.error({ error });
        return null;
    }

}

import { bookingApi } from "../../src/api/bookingApi"

describe('Pruebas en el <bookingApi/>', () => {
    test('Debe tener la configuración por defecto', () => {
        // console.log(bookingApi);
        // console.log(process.env.VITE_API_URL);
        expect(bookingApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
    });
})
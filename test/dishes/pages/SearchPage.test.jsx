import {render, screen} from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import { SearchPage } from '../../../src/dishes/pages/SearchPage';


describe('Pruebas en <SearchPage/>', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        //Con MemoryRouter indentificamos en qué url estoy
        const {container} = render(
            <MemoryRouter> 
                <SearchPage/>
            </MemoryRouter>
        );
        //screen.debug();
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar -Chilli- y el input con el valor del queryString', () => {
        //Con MemoryRouter indentificamos en qué url estoy
        render(
            <MemoryRouter initialEntries={['/search?q=chilli']}> 
                <SearchPage/>
            </MemoryRouter>
        );

        // <input
        // ...
        //     value="chilli"

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('chilli');

        // <img
        // ...
        // src="http://res.cloudinary.com/dla3ofowl/image/upload/v1677168482/restaurant/qitsotv32rv7wqc2xksq.jpg"

        const img = screen.getByRole('img');
        expect(img.src).toContain('qitsotv32rv7wqc2xksq');

        //     <div
        //     aria-label="no-result" 
        // ...
        //     There is not results with <b>{q}</b>

        const noResult = screen.getByLabelText('no-result');

        // console.log(noResult.style);
        // CSSStyleDeclaration {
        // ...
        //     _values: { display: 'none' },

        expect(noResult.style.display).toBe('none');
    });

    test('Debe mostrar un error si no se encuentra el plato (chilliNoExite)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=chilliNoExite']}> 
                <SearchPage/>
            </MemoryRouter>
        );
        const noResult = screen.getByLabelText('no-result');
        expect(noResult.style.display).toBe('');
    });

});


import { render, screen } from '@testing-library/react';
import { MyComponent } from '../base/MyComponent';

describe('Prueba de componentes', () => {
    test('Debe mostrar el saludo', () => { 
        // en este caso vamos a hacer el test con las funcionalidades que ofeece React 
        // usando esta libería import '@testing-library/react';
       // Óscar prefiere usar  la libería Enzyme
        const saludoTest = 'Hola soy Peter parker';
        // utilizamos el método render() que hemos importado de la libería de testing de react 
        render(<MyComponent saludo={saludoTest} subtitulo= 'default'/>);
    
        expect(screen.getByText(saludoTest)).toBeInTheDocument();
        // con este probaríamos que el documento está renderizando el texto de saludo
        
     })
})
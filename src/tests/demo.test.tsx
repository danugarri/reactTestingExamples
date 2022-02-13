describe('primera prueba', () => {
    test('Testing a boolean', () => {
        const isActive = true;

        expect(isActive).toBe(true);
        // if(isActive) {
        //     throw new Error('Hemos forzado este error');
        // }
    });
      test('Testing string', () => {
        const greeting = 'Hola mundo';
        const greeting2= 'Hola mundo';

        expect(greeting).toBe(greeting2);
       
    })
})
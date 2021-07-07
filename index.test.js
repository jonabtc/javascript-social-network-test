const calculateDistanceBetweenUsers = require('.');

describe('Calculate Distance Between Two Users', () => {

    test('it must return a number', async () => {
        const userStart = 'userA';
        const userEnd = 'userA';
        const distance = await calculateDistanceBetweenUsers(userStart, userEnd);

        expect(typeof distance).toEqual('number');
    });

    test('it must return 3', async () => {
        const userStart = 'userA';
        const userEnd = 'userM';
        const distance = await calculateDistanceBetweenUsers(userStart, userEnd);

        expect(distance).toEqual(3);
    });

    test('it must return 0', async () => {
        const userStart = 'userA';
        const userEnd = 'userA';
        const distance = await calculateDistanceBetweenUsers(userStart, userEnd);

        expect(distance).toEqual(0);
    });

    test('it must return -1', async () => {
        const userStart = 'userM';
        const userEnd = 'userA';
        const distance = await calculateDistanceBetweenUsers(userStart, userEnd);

        expect(distance).toEqual(-1);
    });


});
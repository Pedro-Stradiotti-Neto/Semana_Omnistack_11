const generateUniqueId = require('../../src/util/generateUniqueId');

describe('Generate Unique Id', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
});
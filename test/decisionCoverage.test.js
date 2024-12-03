// Mengimpor modul 'chai' untuk melakukan assertion
const { expect } = require('chai');

// Mengimpor fungsi 'decisionLogic' dari file logic.js yang akan diuji
const decisionLogic = require('../logic');

// Deskripsi pengujian untuk Decision Coverage (DC)
describe('Decision Coverage (DC)', () => {

    // Uji skenario di mana kondisi pertama (a > 10 && b < 5) terpenuhi
    it('should return true when (a > 10 && b < 5) is true', () => {
        // a > 10 dan b < 5, jadi fungsi harus mengembalikan true
        expect(decisionLogic(11, 3, 1)).to.be.true; // True path
    });

    // Uji skenario di mana kondisi kedua (c === 0) terpenuhi
    it('should return true when c === 0', () => {
        // c === 0, jadi fungsi harus mengembalikan true meskipun kondisi pertama tidak terpenuhi
        expect(decisionLogic(5, 10, 0)).to.be.true; // True path
    });

    // Uji skenario di mana tidak ada kondisi yang terpenuhi
    it('should return false when neither condition is true', () => {
        // a <= 10, b >= 5, dan c !== 0, jadi fungsi harus mengembalikan false
        expect(decisionLogic(5, 10, 1)).to.be.false; // False path
    });
});

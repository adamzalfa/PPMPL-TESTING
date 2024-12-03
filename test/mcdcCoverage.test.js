// Mengimpor modul 'chai' untuk melakukan assertion
const { expect } = require('chai');

// Mengimpor fungsi 'decisionLogic' dari file logic.js yang akan diuji
const decisionLogic = require('../logic');

// Deskripsi pengujian untuk Multiple Condition Decision Coverage (MCDC)
describe('Multiple Condition Decision Coverage (MCDC)', () => {

    // Uji skenario di mana kondisi a > 10 dan b < 5 terpenuhi, c tidak relevan
    it('should return true when a > 10 and b < 5 (c is irrelevant)', () => {
        // Karena a > 10 dan b < 5, hasil fungsi harus true
        expect(decisionLogic(11, 3, 1)).to.be.true; // a > 10, b < 5, c irrelevant
    });

    // Uji skenario di mana kondisi a <= 10 menyebabkan hasil menjadi false, b dan c tidak relevan
    it('should return false when a <= 10 (b and c irrelevant)', () => {
        // Karena a <= 10, hasil fungsi harus false, terlepas dari nilai b dan c
        expect(decisionLogic(5, 3, 1)).to.be.false; // a <= 10
    });

    // Uji skenario di mana kondisi b >= 5 menyebabkan hasil menjadi false, a benar, c tidak relevan
    it('should return false when b >= 5 (a true, c irrelevant)', () => {
        // Karena b >= 5, hasil fungsi harus false meskipun a > 10
        expect(decisionLogic(11, 6, 1)).to.be.false; // b >= 5
    });

    // Uji skenario di mana kondisi c === 0 menyebabkan hasil menjadi true, a dan b tidak relevan
    it('should return true when c === 0 (a and b irrelevant)', () => {
        // Karena c === 0, hasil fungsi harus true terlepas dari nilai a dan b
        expect(decisionLogic(5, 10, 0)).to.be.true; // c === 0
    });

    // Uji skenario di mana kondisi c !== 0, a > 10, dan b >= 5, menyebabkan hasil menjadi false
    it('should return false when c !== 0 and a > 10, b >= 5', () => {
        // Karena c !== 0, dan kondisi lainnya tidak terpenuhi, hasil fungsi harus false
        expect(decisionLogic(11, 6, 1)).to.be.false; // c !== 0, a > 10, b >= 5
    });
});

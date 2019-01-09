import { clrExpected, clrValue } from './helpers';
import { genCurrency } from "../src/currency";

describe('[Generators]:Currency', () => {

    const testValue1 = genCurrency({ separator: ',', decimals: 2, min: 100, max: 150, formats: [{ symbol: '$' }] });
    // test(`Returns with ${clrExpected('Symbol=$, Range=100 - 5000, Decimals=2, Separator=","')}`, () => {
    test(`Should ${clrExpected('between 100-150, with "," and 2 decimals')} [ ${clrValue(testValue1)} ]`, () => {
        expect(testValue1).toMatch(/^\$1[0-5]\d\.\d{2}$/);
    });

    const testValue2 = genCurrency(({ separator: ',', decimals: 3, min: 1, max: 500000, formats: [{ symbol: '₹' }] }));
    // test(`Returns with ${clrExpected('Symbol=₹, Range=1 - 500000, Decimals=3, Separator=","')}`, () => {
    test(`Should ${clrExpected('between 1-500000, with "," and 3 decimals')} [ ${clrValue(testValue2)} ]`, () => {
        expect(testValue2).toMatch(/^₹[1-9]\d{0,2}(,\d{3})?\.\d{3}$/);
    });

    const testValue3 = genCurrency({ separator: '', decimals: 0, min: 2000, max: 3000, formats: [{ symbol: '₽' }] });
    // test(`Returns with ${clrExpected('Symbol=₽, Range=2000 - 3000, Decimals=0, Separator=""')}`, () => {
    test(`Should ${clrExpected('between 2000-3000, WITHOUT "," and decimals')} [ ${clrValue(testValue3)} ]`, () => {
        expect(testValue3).toMatch(/^₽[2-3]\d{3}$/);
    });
});
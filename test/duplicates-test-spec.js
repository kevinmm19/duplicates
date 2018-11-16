'use strict';

const chai = require('chai');
const Duplicates = require('../js/main');
const expect = chai.expect;
const assert = chai.assert;

describe('Duplicates class behavior', () => {
    it('Should create a random list of 4 elements for N = 3, and have at least 1 duplicate number', () => {
        const N = 3;
        const list = new Duplicates(N);
        list.printedList;
        list.findDuplicates();
        list.printedDuplicates;
        assert.lengthOf(list.list, 4);
        expect(list.duplicates.length).to.be.gt(0);
    });
    it('Should have [2, 3] as duplicate numbers', () => {
        const N = 3;
        const list = new Duplicates(N);
        list.list = [2, 3, 3, 2];
        list.printedList;
        list.findDuplicates();
        list.printedDuplicates;
        expect(list.duplicates).to.have.members([2, 3]);
    });
    it('Should have [1] as duplicate number', () => {
        const N = 4;
        const list = new Duplicates(N);
        list.list = [3, 2, 1, 1, 4];
        list.printedList;
        list.findDuplicates();
        list.printedDuplicates;
        expect(list.duplicates).to.have.members([1]);
    });
});
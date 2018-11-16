'use strict';
{
    class Duplicates {
        constructor(N = 1000000) {
            this.list = this.createList(N);
            this.duplicates = [];
        }
        createList(N) {
            let list = [];
            for (let i = 0; i <= N; i++) {
                let number = Math.floor(Math.random() * N) + 1;
                list.push(number);
            }
            return list;
        }
        findDuplicates() {
            this.duplicates = this.list.reduce((accumulator, el, i, array) => {
                if (array.indexOf(el) !== i && accumulator.indexOf(el) < 0) accumulator.push(el);
                return accumulator;
            }, []);
        }
        get printedList() {
            console.log('List');
            return this.list.map(el => console.log(el));
        }
        get printedDuplicates() {
            console.log('Duplicates');
            const sorted = this.duplicates.sort((a, b) => a - b);
            return sorted.map(el => console.log(el));
        }
    }
    const N = process.argv[2];
    const list = new Duplicates(N);
    list.printedList;
    list.findDuplicates();
    list.printedDuplicates;
    
    module.exports = Duplicates;
}
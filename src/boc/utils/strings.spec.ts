import { readString, stringToCell } from "./strings";

describe('strings', () => {
    it('should serialize and parse strings', () => {
        let cases: string[] = [
            '123',
            '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
            'привет мир 👀 привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀привет мир 👀'
        ];
        for (let c of cases) {
            let cell = stringToCell(c);
            expect(readString(cell.beginParse())).toEqual(c);
        }
    });
});
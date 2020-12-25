import { Entrant } from './types/entrant';

export class Randomizer {

    /**
     * 
     * @param entrants array of entrants info, i.e. id, name, email
     * @returns a map containing entrant id and their matched pair id
     */
    drawNames(entrants: Entrant[]): Map<number, number> {
        let ids: number[] = [];
        let map = new Map();
        
        // assign ids for each entrant
        entrants.forEach((value, index) => {
            value.id = index;
            ids.push(value.id);
        });

        let pairs = ids;
        ids.forEach((value) => {    
            let pair = this.draw(pairs, value);
            map.set(value, pair);

            // remove the id that has been picked so nobody gets it hereafter
            pairs = pairs.filter(id => id !== pair);
        });
        return map;
    }

    /**
     * 
     * @param array containing ids of entrants
     * @param exclude the id the draw is for
     * @returns a random id from the given array
     */
    private draw(array: number[], exclude: number): number {
        let ids = array.filter(id => id !== exclude);
        const randomElement = array[Math.floor(Math.random() * array.length)];
        return randomElement;
    }
}


// сортування чисел 6 6,5 6.6 7
const handleSortValues = (values) => {
    return values.sort((a, b) => {
        const [aStart, aEnd] = a.split('-').map(num => parseFloat(num) || num);
        const [bStart, bEnd] = b.split('-').map(num => parseFloat(num) || num);

        if (typeof aStart === 'number' && typeof bStart === 'number') {
            if (aStart !== bStart) {
                return aStart - bStart;
            } else if (aEnd && bEnd) {
                return aEnd - bEnd;
            } else {
                return 0;
            }
        } else {
            return a.localeCompare(b);
        }
    });
} 


// Порівнюємо рядки в алфавітному порядку
const handleSortCharacteristcs = (characteristcs) => {
    return characteristcs.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
    
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
}   
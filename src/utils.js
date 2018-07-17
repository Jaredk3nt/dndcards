/*
 * Use as the predicate in a filter() function
 */
const cardFilter = (filters) => {
    return (card) => {
        let filtered = false
        if (filters.rarity) {
            if (filters.rarity !== card.rarity) filtered = true;
        }
        if (filters.type) {
            if (!card.type.includes(filters.type)) filtered = true;
        }
        if (filters.search) {
            let searchableText = card.name.toLowerCase() + card.description.toLowerCase();
            if (!(searchableText.includes(filters.search.toLowerCase()))) filtered = true;
        }
        return !filtered;
    }
}

/*
 * Use as the predicate in a sort() function
 */
const cardSort = (sort) => {
    switch (sort){
        case 'byName':
            return (a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }
        case 'byId':
            return (a, b) => a.id - b.id;
        case 'byRarity':
            const rarities = ['simple', 'special', 'heroic', 'legendary', 'mythic'];
            return (a, b) => {
                return rarities.indexOf(a.rarity) - rarities.indexOf(b.rarity);
            }
    }
}

const cardIndexInList = (card, list) => {
    for(let i in list) {
        if (card.name === list[i].name) {
            return i;
        }
    }
    return -1;
}

const gatherArrayFromEdges = (edges, arrName) => {
    let result = [];
    edges.forEach(edge => {
        if (edge.node[arrName]) {
            result = result.concat(edge.node[arrName]);
        }
    });
    return result;
}

module.exports = {
    cardFilter,
    cardSort,
    cardIndexInList,
    gatherArrayFromEdges
}
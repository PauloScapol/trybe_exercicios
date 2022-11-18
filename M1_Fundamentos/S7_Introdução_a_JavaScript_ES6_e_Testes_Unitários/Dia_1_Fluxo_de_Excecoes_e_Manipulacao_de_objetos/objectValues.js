const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};
  
// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

// console.log(Object.values(coolestTvShow));

const student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

const listSkillsWithValues = (object) => {
    return Object.values(object);
}

console.log(listSkillsWithValues(coolestTvShow));

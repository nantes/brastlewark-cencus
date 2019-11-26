/* eslint-disable max-len */
export const getProfessionList = (population) => {
  // eslint-disable-next-line prefer-const
  let profesions = [...new Set(population.map((gnome) => gnome.professions.join(',')).join(',').split(',').filter((p) => p))];
  profesions.sort();
  return profesions;
};

export const filterPopulation = (population, searchValue, profession) => {
  const filteredPopulation = population.filter((gnome) => gnome.name.toLowerCase().includes(searchValue.toLowerCase()));
  return filteredPopulation.filter((i) => i.professions.some((p) => p.toLowerCase().indexOf((profession).toLowerCase()) > -1));
};

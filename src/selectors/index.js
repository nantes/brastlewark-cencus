
const searchPopulationByName = (population, searchValue) => {
  return population.filter((gnome) => gnome.name.toLowerCase().includes(searchValue.toLowerCase()));
};

export default searchPopulationByName;

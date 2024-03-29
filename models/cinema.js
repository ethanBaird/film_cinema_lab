const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitle = function(){
  const titles = this.films.map(film => film.title);
  return titles;
}
Cinema.prototype.filmByTitle = function(title){
  const result = this.films.filter(film => film.title === title)
  return result[0]
}
Cinema.prototype.isThereByYear = function(year){
  let found = this.films.find(film => film.year === year)
  if(found) {return true} else {return false}
};
Cinema.prototype.areTheFilmsLongEnough = function(time){
  return this.films.includes(film => film.length < time)
  if (found) {return false} else {return true}
};
Cinema.prototype.totalLengthOfFilms = function(){
  let totalRunTime = this.films.reduce((now, next) => {
    return now + next.length 
  }, 0)
  return totalRunTime
}
Cinema.prototype.filterByProperty = function(property, value){
  const result = this.films.filter(film => film[property] === value)
  return result
}

module.exports = Cinema;

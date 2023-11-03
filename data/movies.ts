const actorsFilms = {
  actors: [
    {
      name: 'Leonardo DiCaprio',
      films: [
        { title: 'Inception', year: 2010 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Revenant', year: 2015 },
        { title: 'Once Upon a Time in Hollywood', year: 2019 },
      ],
    },
    {
      name: 'Robert Downey Jr.',
      films: [
        { title: 'Iron Man 2', year: 2010 },
        { title: 'The Avengers', year: 2012 },
        { title: 'Iron Man 3', year: 2013 },
        { title: 'Avengers: Endgame', year: 2019 },
      ],
    },
    {
      name: 'Jennifer Lawrence',
      films: [
        { title: "Winter's Bone", year: 2010 },
        { title: 'The Hunger Games', year: 2012 },
        { title: 'Silver Linings Playbook', year: 2012 },
        { title: 'Mother!', year: 2017 },
      ],
    },
    {
      name: 'Scarlett Johansson',
      films: [
        { title: 'Iron Man 2', year: 2010 },
        { title: 'Lucy', year: 2014 },
        { title: 'Ghost in the Shell', year: 2017 },
        { title: 'Black Widow', year: 2021 },
      ],
    },
  ],
};

// Usage:
// Log the first actor's name and their films
console.log(actorsFilms.actors[0].name, actorsFilms.actors[0].films);

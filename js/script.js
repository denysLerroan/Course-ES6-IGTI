window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

// Cria um novo array com as caracteristicas solicitadas (personalizado)
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

// Filtra e traz um novo array com as caracteristicas passadas na função
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

// Inclui uma nova coluna no vetor
function doForEach() {
  const mappedPeople = doMap();
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

// Somatorio -> Reduce substitui o for de somatorio
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  // let sumAges = 0;
  // for (let i = 0; i < people.results.length; i++) {
  //   let current = people.results[i];
  //   sumAges += current.dob.age;
  // }
  // console.log(sumAges);
}

// Traz o primeiro registro da logica
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

// Retorna verdadeiro ou falso caso encontre ou não um registro passado na logica
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

// Retorna verdadeiro caso TODOS e apenas TODOS os registros atendam a lógica
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

// Ordenação com base na lógica
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.length - b.name.length;
    });

  console.log(mappedNames);
}

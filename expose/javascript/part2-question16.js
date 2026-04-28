for (const key in statistics) {
  if (statistics[key] % 2 == 1 || key[0] === 'r') {
    console.log(statistics[key]);
  }
}

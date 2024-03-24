const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  // NOTE(roman): displays an error from eslint
  // since there's a Promise here that's not awaited
  // (the error has a recommendation as well, so take a good look at it)
  returnTrueInAPromise();

  res.end('Hello from express!');
});

app.listen(PORT, () => {
  console.log('server listening on port', PORT);
});

function returnTrueInAPromise() {
  return Promise.resolve(true);
}

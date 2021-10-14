const attackDurationMS = 500;
const deathDurationMS = 1000;
const idleDurationMS = 1000;

const heroSize = 84;
const heroInitialLife = 100;

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
  attackDurationMS,
  deathDurationMS,
  idleDurationMS,
  heroSize,
  heroInitialLife,
  randomNumber,
};

const { SHELL, HOMEBREW_PREFIX } = process.env;

console.table({SHELL, HOMEBREW_PREFIX});

const characters = ["Flash", "Superman", "Batman"];

const [, , batman] = characters;

console.log(batman);
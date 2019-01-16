function makeFirstCharacterLowerCase(string) {
  return `${string.substring(0, 1).toLowerCase()}${string.substring(1)}`;
}

module.exports = makeFirstCharacterLowerCase;

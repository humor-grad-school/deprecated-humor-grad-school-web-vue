function makeFirstCharacterUpperCase(string) {
  return `${string.substring(0, 1).toUpperCase()}${string.substring(1)}`;
}

module.exports = makeFirstCharacterUpperCase;

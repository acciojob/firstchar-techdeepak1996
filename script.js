function firstChar(text) {
  // Trim the input text to remove leading and trailing spaces
  const trimmedText = text.trim();

  // Check if the trimmed text is empty or contains only spaces
  if (trimmedText === '') {
    return '';
  }

  // Iterate through each character of the trimmed text
  for (let char of trimmedText) {
    // If the character is not a space, return it
    if (char !== ' ') {
      return char;
    }
  }

  // If all characters are spaces, return an empty string
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

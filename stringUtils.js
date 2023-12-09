// Write a class with functionality for string

class StringUtils {
  static capitalize(string) {
    // Capitaliza una sola palabra
    if (!string) return null;
    const trimmedString = string.trim(); // Elimina espacios al inicio y al final
    return trimmedString.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  }

  static capitalizeWords(string) {
    // Capitaliza todas las palabras separadas por espacios
    const trimmedString = string.trim(); // Elimina espacios al inicio y al final
    return trimmedString.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  }
}

module.exports = StringUtils;

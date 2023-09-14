// Write a class with functionality for string

class StringUtils {
  static capitalize(string) {
    //Capitaliza una sola palabra
    const lowerCase = string.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  }

  static capitalizeWords(string) {
    //Capitaliza todas las palabras separadas por espacios
    return string.split(' ').map(StringUtils.capitalize).join(' ');
  }
}

module.exports = StringUtils;

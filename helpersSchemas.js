const customIfObjectExists = (object) => {
  if (object != undefined) {
    return true;
  }
  return false;
};

module.exports = { customIfObjectExists };

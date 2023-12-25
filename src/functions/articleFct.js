export const getAuteurInstitus = (auteur) => {
  let str = auteur.name + ", ";
  str +=
    auteur.institutions[0].institutions_name +
    ", " +
    auteur.institutions[1].institutions_name;
  if (auteur.institutions.length > 2) {
    str += " ...";
  }
  return str;
};

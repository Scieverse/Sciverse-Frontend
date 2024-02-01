export const getAuteurInstitus = (auteur) => {
  let str = auteur.name + ": ";
  str += auteur.institutions[0].institution_name;

  if (auteur.institutions.length > 2) {
    str += ", " + auteur.institutions[1].institution_name + " ...";
  } else if (auteur.institutions.length === 2)
    str += ", " + auteur.institutions[1].institution_name;
  return str;
};

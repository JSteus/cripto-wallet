export const nameFormatter = (name: string) => {
  const noVowels = name.replace(/[aeiou]/gi, '');

  return noVowels.toLocaleUpperCase().slice(0, 2);
};

export const passwordChecker = (password: string) => {
  const regex = /^(?=\D*\d)[^ ]{6,}$/gi;

  return password.match(regex);
};

export function randomNumber() {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

export function getAvtar(getNumber: number) {
  if (getNumber === 2) {
    return "https://avatar.iran.liara.run/public";
  } else if (getNumber === 3) {
    return "https://avatar.iran.liara.run/public/boy";
  } else {
    return "https://avatar.iran.liara.run/public";
  }
}

export const size = (multiplier = 1) => {
  const baseUnit = 8;
  return `${multiplier * baseUnit}px`;
};

export function containsNumber(str: string) {
  return /\d/.test(str);
}

export function extractSearchParams(locationSearch: string) {
  const key: string[] = [];
  const value: string[] = [];
  let isKey = true;
  for (let i = 1; i < locationSearch.length; i++) {
    if (locationSearch[i] === "=") {
      isKey = false;
    } else if (isKey) {
      key.push(locationSearch[i]);
    } else {
      value.push(locationSearch[i]);
    }
  }
  return { key: key.join(""), value: value.join("") };
}

export function capitalize(string: string) {
  return string
    .split("")
    .map((char: string, i: number) => {
      return i === 0 ? char.toUpperCase() : char;
    })
    .join("");
}

export function removeSelfFromListOfUsernames(
  usernames: string[],
  self: string
) {
  return usernames.filter((username) => username !== self);
}

export function parseDate(dateString: string) {
  return dateString.split(" ").slice(0, 4).join(" ");
}

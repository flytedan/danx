export function setItem(
  key: string,
  value: string | number | unknown[] | object | boolean
) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string, defaultValue = null) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
}

export function getStored(key, fallback) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : fallback;
}

export function setStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

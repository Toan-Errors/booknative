export function formatDate(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${day}/${month}/${year}`;
}

export function formatTime(date: string) {
  const d = new Date(date);
  const hour = d.getHours();
  const minute = d.getMinutes();
  return `${hour}:${minute}`;
}

export function formatDateTime(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hour = d.getHours();
  const minute = d.getMinutes();
  return `${day}/${month}/${year} ${hour}:${minute}`;
}

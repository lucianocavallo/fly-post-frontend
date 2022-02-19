export function dateConverter(date: string) {
  // '2022-02-19T18:41:20.901Z'
  const match = date.match(/(\d{4,4})\-(\d{2,2})\-(\d{2,2})/);
  if (match) return `${match[3]}/${match[2]}/${match[1]}`;
  return null;
}
// const date = dateConverter('2022-02-19T18:41:20.901Z');
// console.log(date);

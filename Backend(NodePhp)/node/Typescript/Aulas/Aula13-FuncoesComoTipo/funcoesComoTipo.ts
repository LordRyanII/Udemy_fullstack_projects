type mappStringFn = (item: string) => string;

export function mapString(array: string[], callbackfn: mappStringFn): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const items = array[i];
    newArray.push(callbackfn(items));
  }

  return newArray;
}

const abc: string[] = ["a", "b", "c"];

const abcMaiusculo = mapString(abc, (item: string) => {
  return item.toUpperCase();
});

console.log(abcMaiusculo);

export function update(list, id, key, value) {
  const keys = [id, terroristName, weapons, text];
  if (key in keys) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][id] === id) {
        list[i][key] = value;
      } else {
        console.log('ID not found');
      }
    }
  } else {
    console.log('KEY not found');
  }
}

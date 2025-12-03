export function report(
  input_weapons,
  input_text,
  input_id,
  input_terroristName = 'Muhammad'
) {
  let Details = {
    id: input_id,
    terroristName: input_terroristName,
    weapons: input_weapons,
    text: input_text,
  };
  return Details;
}

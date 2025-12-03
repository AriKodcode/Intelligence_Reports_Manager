import { db } from '../db/db_list.js';

export function save_report(new_report) {
  let check = 'ok';
  for (let i = 0; i < db.length; i++) {
    if (db[i].id === new_report.id) {
      console.log('Error: There is already the same ID on the list.');
      check = 'error';
    }
  }
  if (check === 'ok') {
    db.push(new_report);
  }
}

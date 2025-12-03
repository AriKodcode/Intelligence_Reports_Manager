import { db } from '../db/db_list.js';
import { report } from './report.js';

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

save_report(report(['knife'], 'palastini', '2345'));
save_report(report(['knife'], 'palastini', '22'));
console.log(db);

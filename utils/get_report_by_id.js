import { db } from '../db/db_list.js';
export function get_report_by_ID(get_id) {
  for (let i = 0; i < db.length; i++) {
    if (db[i][id] === get_id) {
      return db[i];
    }
  }
  console.log('error: not found id name');
}

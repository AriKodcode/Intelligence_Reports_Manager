import { db } from '../db/db_list.js';
export function delete_by_id() {
  for (let i = 0; i < db.length; i++) {
    if (db[i][id] === get_id) {
      db.remove(i);
    }
  }
  console.log('error: not found id name');
}

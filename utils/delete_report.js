import { db } from '../db/db_list.js';
export function delete_by_id(id) {
  for (let i = 0; i < db.length; i++) {
    if (db[i]['id'] === id) {
      db.pop(i);
    }
  }
  console.log('error: not found id name');
}

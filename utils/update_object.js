import { db } from '../db/db_list.js';
export function update(id, updates) {
  for (let obj of db) {
    if (obj.id == id) {
      for (let key in updates) {
        if (!key in obj) {
          throw new Error('invalid updates');
        }
        obj[key] = updates[key];
      }
      return db;
    }
  }
  throw new Error('Report with the given ID not found');
}

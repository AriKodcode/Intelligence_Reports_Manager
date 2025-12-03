import { db } from '../db/db_list.js';
export function getAllReports() {
  return db.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
}

import input from 'analiza-sync';
import { report } from './services/report.js';
import { update } from './utils/update_object.js';
import { delete_by_id } from './utils/delete_report.js';
import { getAllReports } from './utils/get_all_reports.js';
import { get_report_by_ID } from './utils/get_report_by_id.js';
import { save_report } from './services/saving_report.js';
let flag2 = true;
while (flag2) {
  console.log(
    'MENU:\nPress a nuber\n1. Add a new intelligence report\n2. Show all reports\n3. Search report by ID\n4. Delete report by ID\n5. Edit report by ID\n0. Exit'
  );
  let choice = input('make your choice: ');
  choice = Number(choice);
  if (choice === 1 || 2 || 3 || 4 || 5 || 0) {
    switch (choice) {
      case 1:
        let id1 = input('Enter terrorist ID: ');
        let weapons1 = input('Enter the terrorist weapons: ');
        let text1 = input('Write what happened in the accident: ');
        let name1 = input('Enter the name of the terrorist: ');
        if (id1 == '') {
          id1 = nanoid();
        }
        let new_report1 = report(id1, [weapons1], text1, name1);
        save_report(new_report1);
        console.log(`added new report\n`, new_report1);

        break;
      case 2:
        console.log(getAllReports());

        break;
      case 3:
        let id3 = input('Enter ID');
        console.log(get_report_by_ID(id3));

        break;
      case 4:
        let id4 = input('Enter ID');
        delete_by_id(id4);

        break;
      case 5:
        let obj = {};
        let id5 = input('Enter ID: ');
        while (true) {
          let key5 = input('Enter Key: ');
          let value5 = input('Enter value: ');
          obj[key5] = value5;
          let anuther_update = input(
            'Do you want to change any other things? Prees y or n'
          );
          if (anuther_update === 'n') {
            break;
          }
        }
        update(id5, obj);

        break;
      case 0:
        console.log('Exit');

        flag2 = false;
        break;
    }
  } else {
    console.log('press 1-5 or 0 for Exit');
  }
}

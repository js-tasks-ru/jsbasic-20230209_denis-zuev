/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  head = `<tr>
  <th>Имя</th>
  <th>Возраст</th>
  <th>Зарплата</th>
  <th>Город</th>
  <th></th>
</tr>`
  constructor(rows) {
    this.rows = rows;
    this.table = this.createTable();
  }

  get elem() {
    return this.table;
  }

  createTHead() {
    const tHead = document.createElement('thead');
    tHead.innerHTML = this.head;
    return tHead;
  }

  createTBody() {
    const tBody = document.createElement('tbody');

    for (let row of this.rows) {
      let tr = document.createElement('tr');

      for (let value of Object.values(row)) {
        let td = document.createElement('td')
        td.innerHTML = value;
        tr.appendChild(td);
      }

      let td = document.createElement('td');
      td.innerHTML = '<button>X</button>';
      tr.appendChild(td);
      tBody.appendChild(tr);
    }
    
    return tBody
  }

  createTable() {
    const table = document.createElement('table');
    table.appendChild(this.createTHead());
    table.appendChild(this.createTBody());
    return table

  }
}

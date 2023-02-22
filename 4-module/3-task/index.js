function highlight(table) {

  const tableHead = [];

  for (let elem of table.rows[0].children) {
    tableHead.push(elem.innerHTML);
  }

  const statusIndex = tableHead.indexOf('Status');
  const genderIndex = tableHead.indexOf('Gender');
  const ageIndex = tableHead.indexOf('Age');

  for (let row of table.tBodies[0].rows) {

    if (row.cells[statusIndex].hasAttribute('data-available')){

      row.cells[statusIndex].dataset.available === 'true' ? row.classList.add('available') : row.classList.add('unavailable');

    } else {

      row.setAttribute('hidden', true);

    }

    row.cells[genderIndex].innerHTML === 'm' ? row.classList.add('male') : row.classList.add('female');

    if (row.cells[ageIndex].innerHTML < 18) {

      row.style = 'text-decoration: line-through';

    }
  }
}

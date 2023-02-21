function highlight(table) {

  const tHead = [];

  for (let elem of table.rows[0].children) {
    tHead.push(elem.innerHTML);
  }

  const statusIndex = tHead.indexOf('Status');
  const genderIndex = tHead.indexOf('Gender');
  const ageIndex = tHead.indexOf('Age');

  for (let row of table.rows) {

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

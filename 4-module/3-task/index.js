function highlight(table) {

  const tHead = [];

  for (let elem of table.rows[0].children) {
    tHead.push(elem.innerHTML);
  }

  const statusIndex = tHead.indexOf('Status');
  const genderIndex = tHead.indexOf('Gender');
  const ageIndex = tHead.indexOf('Age');

  for (let i = 1; i < table.rows.length; i++) {

    if (table.rows[i].cells[statusIndex].hasAttribute('data-available')){

      table.rows[i].cells[statusIndex].dataset.available === 'true' ? table.rows[i].classList.add('available') : table.rows[i].classList.add('unavailable');

    } else {

      table.rows[i].setAttribute('hidden', true);

    }

    table.rows[i].cells[genderIndex].innerHTML === 'm' ? table.rows[i].classList.add('male') : table.rows[i].classList.add('female');

    if (table.rows[i].cells[ageIndex].innerHTML < 18) {

      table.rows[i].style = 'text-decoration: line-through';

    }
  }
}

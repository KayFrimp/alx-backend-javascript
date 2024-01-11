interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_1: Student = {
    firstName: 'Kay',
    lastName: 'Walker',
    age: 42,
    location: 'Kasoa'
}

const student_2: Student = {
    firstName: 'John',
    lastName: 'Snow',
    age: 35,
    location: 'Lorelle'
}

let studentsList: Student[] = [student_1, student_2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

th1.textContent = 'First Name';
th2.textContent = 'Location';

headerRow.appendChild(th1);
headerRow.appendChild(th2);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    td1.textContent = student.firstName;
    td2.textContent = student.location;

    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
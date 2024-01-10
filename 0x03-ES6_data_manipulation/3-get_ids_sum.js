function sumOfIds(total, student) {
  return total + student.id;
}

export default function getStudentIdsSum(students) {
  return students.reduce(sumOfIds, 0);
}

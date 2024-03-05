import fs from 'fs';

/**
 * Reads the data of students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
    }
    if (filePath) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const fileLines = data
            .toString('utf-8')
            .trim()
            .split('\n');
          const studentGroups = {};
          const dbFieldNames = fileLines[0].split(',');
          const studentPropNames = dbFieldNames
            .slice(0, dbFieldNames.length - 1);

          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord
              .slice(0, studentRecord.length - 1);
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            const studentEntries = studentPropNames
              .map((propName, idx) => [propName, studentPropValues[idx]]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }
          resolve(studentGroups);
        }
      });
    }
  });
}

module.exports = readDatabase;

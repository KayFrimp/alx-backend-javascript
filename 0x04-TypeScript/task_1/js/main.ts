interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string, 
    [attribute: string]: any
}
  
interface Directors extends Teacher {
    numberOfReports: number;
}
  
interface printTeacherFunction {
    (firstName: string, lastName: string ): string;
}
  
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

class StudentClass {
    firstName: string;
    lastName: string;
  
    constructor({firstName, lastName}: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }
    
    displayName(): string {
      return this.firstName;
    }
}
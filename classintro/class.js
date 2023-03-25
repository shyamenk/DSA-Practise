class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullname() {
    return `My Name is ${this.firstName} ${this.lastName}`
  }
}

const student = new Student('Colt ', 'Steel')
const fullName = student.getFullname()

console.log(fullName)

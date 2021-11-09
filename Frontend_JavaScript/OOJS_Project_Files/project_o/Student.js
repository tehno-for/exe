class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }
    get level() {
      let cc = this.credits;
      if(cc >90){
        return 'Senior';
      } else if(cc=>61 && cc <=90){
        return 'Junior';
      } else if(cc=>31){
        return 'Sophomore';
      } else {
        return 'Freshman';
      }
    }

    get major(){
      return this._major;
    }

    set major(major) {
      this._major = major;
      if(this.level=='Senior' || this.level=='Junior'){
        major = 5;
      } else {
        major = 'None';
      }
    }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9, 40);
console.log('Level: '+ student.level);
console.log('Major: '+ student.major);

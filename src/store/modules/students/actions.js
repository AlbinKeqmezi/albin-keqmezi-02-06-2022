export default {
    registerStudent(context, data) {
        let allstd = JSON.parse(localStorage.getItem('students')) || [];
        const studentInfo = {
            index: allstd.length.toString(),
            firstName: data.firstName,
            lastName: data.lastName,
            dateOfBirth: data.dateOfBirth,
            municipality: data.municipality,
        };

        allstd.push(studentInfo);
        let students = JSON.stringify(allstd)
        localStorage.setItem('students', students);

        context.commit('addStudent', studentInfo);
    },
    getStudents(context) {
        const responseData = JSON.parse(localStorage.getItem('students'));
        const students = [];

        for (const key in responseData) {
            const student = {
                index: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                dateOfBirth: responseData[key].dateOfBirth,
                municipality: responseData[key].municipality,
            };
            students.push(student);
        }
        context.commit('allStudents', students);
    },

    deleteStudent(context, payload) {
        let students = JSON.parse(localStorage.getItem('students'));
        students.splice(payload, 1);

        const stds = [];
        for (const key in students) {
            const student = {
                index: key,
                firstName: students[key].firstName,
                lastName: students[key].lastName,
                dateOfBirth: students[key].dateOfBirth,
                municipality: students[key].municipality,
            };
            stds.push(student);
        }
        localStorage.setItem('students', JSON.stringify(stds));
        context.commit('allStudents', stds);
    },

    editStudent(context, payload) {
        console.log(payload)
        let students = JSON.parse(localStorage.getItem('students'));
        let studentId = students.findIndex(student => student.index === payload.index);
        students[studentId] = payload;
        localStorage.setItem('students', JSON.stringify(students));
        context.commit('allStudents', students);
    }
}


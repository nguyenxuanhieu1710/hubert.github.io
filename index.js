var students = [];

function addStudentInputs() {
    var count = parseInt(prompt("Nhập số lượng sinh viên:"));

    var studentInputsContainer = document.getElementById("studentInputs");
    studentInputsContainer.innerHTML = "";

    for (var i = 0; i < count; i++) {
        var studentDiv = document.createElement("div");

        var msvInput = document.createElement("input");
        msvInput.type = "text";
        msvInput.placeholder = "Mã sinh viên";
        studentDiv.appendChild(msvInput);

        var hoTenInput = document.createElement("input");
        hoTenInput.type = "text";
        hoTenInput.placeholder = "Họ và tên";
        studentDiv.appendChild(hoTenInput);

        var ngaySinhInput = document.createElement("input");
        ngaySinhInput.type = "text";
        ngaySinhInput.placeholder = "Ngày tháng năm sinh";
        studentDiv.appendChild(ngaySinhInput);

        var lopHocInput = document.createElement("input");
        lopHocInput.type = "text";
        lopHocInput.placeholder = "Lớp học";
        studentDiv.appendChild(lopHocInput);

        var gpaInput = document.createElement("input");
        gpaInput.type = "text";
        gpaInput.placeholder = "Điểm GPA";
        studentDiv.appendChild(gpaInput);

        studentInputsContainer.appendChild(studentDiv);
    }
}

function displayStudents() {
    var studentInputs = document.getElementById("studentInputs").getElementsByTagName("input");
    students = [];

    for (var i = 0; i < studentInputs.length; i += 5) {
        var student = {};

        student.msv = studentInputs[i].value;
        student.hoTen = studentInputs[i + 1].value;
        student.ngaySinh = studentInputs[i + 2].value;
        student.lopHoc = studentInputs[i + 3].value;
        student.gpa = parseFloat(studentInputs[i + 4].value);

        students.push(student);
    }

    var result = "<table border='1'><tr><th>Mã SV</th><th>Họ và tên</th><th>Ngày sinh</th><th>Lớp học</th><th>GPA</th></tr>";

    for (var i = 0; i < students.length; i++) {
        result += "<tr>";
        result += "<td>" + students[i].msv + "</td>";
        result += "<td>" + students[i].hoTen + "</td>";
        result += "<td>" + students[i].ngaySinh + "</td>";
        result += "<td>" + students[i].lopHoc + "</td>";
        result += "<td>" + students[i].gpa + "</td>";
        result += "</tr>";
    }

    result += "</table>";

    document.getElementById("studentList").innerHTML = result;
}

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var studentInputs = document.getElementById("studentInputs").getElementsByTagName("input");

        for (var i = 0; i < studentInputs.length; i++) {
            if (studentInputs[i].value !== "") {
                studentInputs[i].style.display = "none"; 
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách tất cả các bài kiểm tra
    const tests = document.querySelectorAll(".mid-term-test, .ffminutes-test, .ftminutes-test");

    // Bắt sự kiện khi có sự thay đổi trong ô select môn học hoặc trạng thái
    const selectSubject = document.getElementById("selectSubject");
    const selectStatus = document.getElementById("selectStatus");

    selectSubject.addEventListener("change", filterTests);
    selectStatus.addEventListener("change", filterTests);

    function filterTests() {
        const selectedSubject = selectSubject.value;
        const selectedStatus = selectStatus.value;

        // Ẩn tất cả các bài kiểm tra
        tests.forEach(test => {
            test.style.display = "none";
        });

        // Hiển thị các bài kiểm tra tương ứng với môn học và trạng thái được chọn
        tests.forEach(test => {
            const testSubject = test.querySelector("h2").className;
            const testStatus = test.querySelector(".view-detail > div").className;

            if ((selectedSubject === "all" || selectedSubject === testSubject) &&
                (selectedStatus === "all" || selectedStatus === testStatus)) {
                test.style.display = "block";
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách tất cả các bài kiểm tra
    const tests = document.querySelectorAll(".mid-term-test, .ffminutes-test, .ftminutes-test");

    // Bắt sự kiện khi có sự thay đổi trong ô chọn loại đề
    const typeExams = document.querySelectorAll("[name='typeExam']");

    

    typeExams.forEach(typeExam => {
        typeExam.addEventListener("change", filterTests);
    });

    function filterTests() {
        const selectedType = document.querySelector("[name='typeExam']:checked").id;

        // Ẩn tất cả các bài kiểm tra
        tests.forEach(test => {
            test.style.display = "none";
        });

        // Hiển thị các bài kiểm tra tương ứng với loại đề được chọn
        if (selectedType === "radio-0") {
            document.querySelectorAll(".mid-term-test").forEach(test => {
                test.style.display = "block";
            });
        } else if (selectedType === "radio-1") {
            document.querySelectorAll(".ffminutes-test").forEach(test => {
                test.style.display = "block";
            });
        } else if (selectedType === "radio-2") {
            document.querySelectorAll(".ftminutes-test").forEach(test => {
                test.style.display = "block";
            });
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách tất cả các bài kiểm tra
    const tests = document.querySelectorAll(".mid-term-test, .ffminutes-test, .ftminutes-test");

    // Bắt sự kiện khi có sự thay đổi trong ô select môn học, trạng thái hoặc loại đề
    const selectSubject = document.getElementById("selectSubject");
    const selectStatus = document.getElementById("selectStatus");
    const typeExams = document.querySelectorAll("[name='typeExam']");

    selectSubject.addEventListener("change", filterTests);
    selectStatus.addEventListener("change", filterTests);
    typeExams.forEach(typeExam => {
        typeExam.addEventListener("change", filterTests);
    });

    function filterTests() {
        const selectedSubject = selectSubject.value;
        const selectedStatus = selectStatus.value;
        const selectedType = document.querySelector("[name='typeExam']:checked").id;

        // Ẩn tất cả các bài kiểm tra
        tests.forEach(test => {
            test.style.display = "none";
        });

        // Hiển thị các bài kiểm tra thỏa mãn các điều kiện được chọn
        tests.forEach(test => {
            const testSubject = test.querySelector("h2").className;
            const testStatus = test.querySelector(".view-detail > div").className;
            const testType = test.classList.contains("mid-term-test") ? "radio-0" :
                             test.classList.contains("ffminutes-test") ? "radio-1" : "radio-2";

            if ((selectedSubject === "all" || selectedSubject === testSubject) &&
                (selectedStatus === "all" || selectedStatus === testStatus) &&
                (selectedType === "all" || selectedType === testType)) {
                test.style.display = "block";
            }
        });
    }
});

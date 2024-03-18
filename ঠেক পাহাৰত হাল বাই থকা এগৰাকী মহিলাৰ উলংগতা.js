 <script>
        $(document).ready(() => {
            $('#convertButton').on('click', () => {
                const element = document.getElementById('reviewAssignment');
                if (!element) return;
                
                html2pdf()
                    .from(element)
                    .save('@smg_ceo_office.pdf');
            });

            $('#addButton').on('click', () => {
                const counter = $('#questionsAndAnswers textarea').length + 1;
                const newQuestion = `<label for="question${counter}">Question ${counter}:</label><textarea id="question${counter}" name="question[]"></textarea>`;
                const newAnswer = `<label for="answer${counter}">Answer ${counter}:</label><textarea id="answer${counter}" name="answer[]"></textarea>`;
                $('#questionsAndAnswers').append(newQuestion + newAnswer);
            });

            $('#Assignment').on('submit', (event) => {
                event.preventDefault();
                reviewInformation();
            });
        });

        function addMember() {
            const memberName = document.getElementById("memberName").value;
            const registrationNumber = document.getElementById("registrationNumber").value;
            if (!memberName || !registrationNumber) {
                alert("Please fill in both the member name and registration number.");
                return;
            }

            const table = document.getElementById("memberTable");
            const row = table.insertRow(-1);
            row.insertCell(0).textContent = memberName;
            row.insertCell(1).textContent = registrationNumber;

            // Clear the input fields
            document.getElementById("memberName").value = "";
            document.getElementById("registrationNumber").value = "";
        }

        function reviewInformation() {
            // Retrieve values from the form
            const cause = $('#cause').val();
            const muda = $('#muda').val();
            const schoolName = $('#schoolName').val();
            const date = $('#date').val();
            const groupNumber = $('#groupNumber').val();
            const subjectCode = $('#subjectCode').val();
            const subjectName = $('#subjectName').val();
            const lectureName = $('#lectureName').val();
            const is = $('#is').val();
            const reference = $('#reference').val();

            // Display values in the review section
            $('#reviewCause').text(cause);
            $('#reviewMuda').text(muda);
            $('#reviewSchoolName').text(schoolName);
            $('#reviewDate').text(date);
            $('#reviewGroupNumber').text(groupNumber);
            $('#reviewSubjectCode').text(subjectCode);
            $('#reviewSubjectName').text(subjectName);
            $('#reviewLectureName').text(lectureName);
            $('#reviewIs').text(is);
            $('#reviewReference').text(reference);

            // Display values in the review section for dynamic questions and answers
            const reviewQuestions = [];
            const reviewAnswers = [];

            $('#questionsAndAnswers textarea').each(function(index) {
                reviewQuestions.push(`Question ${index + 1}: ${$(this).val()}`);
                reviewAnswers.push(`Answer ${index + 1}: ${$('#answer' + (index + 1)).val()}`);
            });

            $('#reviewQuestion').text(reviewQuestions.join("\n"));
            $('#reviewAnswer').text(reviewAnswers.join("\n"));

            // Display values in the review section for the members table
            const reviewMembersTable = $('#reviewMemberTable');
            reviewMembersTable.empty();  // Clear the table

            const membersTable = $('#memberTable');
            const tableHeader = $('<thead><tr><th><b>Group Member</b></th><th><b>Registration Number</b></th></tr></thead>');
            reviewMembersTable.append(tableHeader);

            membersTable.find('tr:gt(0)').each(function() {
                const row = $('<tr></tr>');
                row.append(`<td>${$(this).find('td:eq(0)').text()}</td>`);
                row.append(`<td>${$(this).find('td:eq(1)').text()}</td>`);
                reviewMembersTable.append(row);
            });

            // Hide the form, show the review section
            $('#Assignment').hide();
            $('#reviewAssignment').show();
        }
   
    if (document.referrer !== "https://enockofficial.github.io/home/index.html" && document.referrer !== "") {
            window.location.href = "https://enockofficial.github.io/SMG-OFFICE-2024/login.php.html";
        }

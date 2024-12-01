// Function to add an attendance record
function addAttendance() {
  const name = document.getElementById('studentName').value.trim();
  const studentID = document.getElementById('studentID').value.trim();

  if (name && studentID) {
    const timestamp = new Date().toLocaleString();
    const attendanceData = JSON.parse(localStorage.getItem('attendance')) || [];
    attendanceData.push({ name, studentID, timestamp });
    localStorage.setItem('attendance', JSON.stringify(attendanceData));
    alert('Attendance added successfully!');
    document.getElementById('attendanceForm').reset();
  } else {
    alert('Please fill in all fields.');
  }
}

// Function to load attendance records
function loadAttendance() {
  const attendanceData = JSON.parse(localStorage.getItem('attendance')) || [];
  const attendanceList = document.getElementById('attendanceList');

  attendanceList.innerHTML = attendanceData.length
    ? attendanceData
        .map(
          (item, index) => `
            <div class="attendance-item">
              <span>${item.name} (ID: ${item.studentID}) - ${item.timestamp}</span>
              <button class="delete-btn" onclick="deleteAttendance(${index})">Delete</button>
            </div>
          `
        )
        .join('')
    : '<p>No attendance records found.</p>';
}

// Function to delete an attendance record
function deleteAttendance(index) {
  const attendanceData = JSON.parse(localStorage.getItem('attendance')) || [];
  attendanceData.splice(index, 1);
  localStorage.setItem('attendance', JSON.stringify(attendanceData));
  loadAttendance();
}

// Attach event listeners and initialize
if (document.getElementById('attendanceForm')) {
  document.getElementById('attendanceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addAttendance();
  });
}

if (document.getElementById('attendanceList')) {
  document.addEventListener('DOMContentLoaded', loadAttendance);
}

document.getElementById('yogaForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting

    // Perform validation checks here if needed

    alert('Form submitted successfully!');
    // You can add more processing here, such as sending the data to a server
});
/* FEEL FREE*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    document.getElementById('contact-form').reset();
});

/* Schedule*/
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const scheduleData = [
        { day: 'Monday', time: '08:00 - 09:30', timeOfDay: 'Morning', class: '100 YTTC - Beginners', instructor: 'Alice Johnson', location: 'Studio A' },
        { day: 'Monday', time: '18:00 - 19:30', timeOfDay: 'Evening', class: '200 YTTC - Advanced', instructor: 'Raj Patel', location: 'Home' },
        { day: 'Tuesday', time: '07:00 - 08:30', timeOfDay: 'Morning', class: '100 YTTC - Intermediate', instructor: 'Emma Smith', location: 'Studio A' },
        { day: 'Tuesday', time: '17:00 - 18:30', timeOfDay: 'Evening', class: '200 YTTC - Mixed Level', instructor: 'Sam Lee', location: 'Hall' },
        { day: 'Wednesday', time: '09:00 - 10:30', timeOfDay: 'Morning', class: '100 YTTC - Basics', instructor: 'Mia Davis', location: 'Studio A' },
        { day: 'Wednesday', time: '19:00 - 20:30', timeOfDay: 'Evening', class: '200 YTTC - Vinyasa Flow', instructor: 'Alex Martinez', location: 'Studio B' },
        { day: 'Thursday', time: '08:00 - 09:30', timeOfDay: 'Morning', class: '100 YTTC - Relaxation', instructor: 'Sarah Nguyen', location: 'Studio A' },
        { day: 'Thursday', time: '18:00 - 19:30', timeOfDay: 'Evening', class: '200 YTTC - Power Yoga', instructor: 'John Doe', location: 'Hall' },
        { day: 'Friday', time: '07:00 - 08:30', timeOfDay: 'Morning', class: '100 YTTC - Gentle Yoga', instructor: 'Natalie Kim', location: 'Studio A' },
        { day: 'Friday', time: '17:00 - 18:30', timeOfDay: 'Evening', class: '200 YTTC - Ashtanga', instructor: 'Laura Lee', location: 'Studio B' },
        { day: 'Saturday', time: '09:00 - 10:30', timeOfDay: 'Morning', class: '100 YTTC - Hatha Yoga', instructor: 'Ryan Chen', location: 'Hall' },
        { day: 'Saturday', time: '10:45 - 12:15', timeOfDay: 'Morning', class: '200 YTTC - Meditation', instructor: 'Kelly Brown', location: 'Studio B' },
        { day: 'Sunday', time: '08:00 - 09:30', timeOfDay: 'Morning', class: '100 YTTC - Flow Yoga', instructor: 'Emma Smith', location: 'Home' },
        { day: 'Sunday', time: '18:00 - 19:30', timeOfDay: 'Evening', class: '200 YTTC - Yin Yoga', instructor: 'Raj Patel', location: 'Studio B' },
    ];

    const scheduleBody = document.getElementById('schedule-body');
    
    function populateSchedule(data) {
        scheduleBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.day}</td>
                <td>${item.time}</td>
                <td>${item.class}</td>
                <td>${item.instructor}</td>
                <td>${item.location}</td>
            `;
            scheduleBody.appendChild(row);
        });
    }

    populateSchedule(scheduleData);

    window.filterSchedule = function() {
        const selectedDay = document.getElementById('dayFilter').value;
        const selectedTime = document.getElementById('timeFilter').value;
        const selectedClass = document.getElementById('classFilter').value;
        const selectedInstructor = document.getElementById('instructorFilter').value;
        const selectedLocation = document.getElementById('instructorFilter').value;
        
        const filteredData = scheduleData.filter(item => {
            return (selectedDay === 'All' || item.day === selectedDay) &&
                   (selectedTime === 'All' || item.timeOfDay === selectedTime) &&
                   (selectedClass === 'All' || item.class === selectedClass) &&
                   (selectedInstructor === 'All' || item.instructor ===selectedInstructor) &&
                   (selectedLocation === 'All' || item.location === selectedLocation);
        });

        populateSchedule(filteredData);
    };
});

/* Calendr*/
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const scheduleData = [
        { day: 'Monday', time: '08:00 - 09:30', class: '100 YTTC - Beginners', instructor: 'Alice Johnson', location: 'Studio A' },
        { day: 'Monday', time: '18:00 - 19:30', class: '200 YTTC - Advanced', instructor: 'Raj Patel', location: 'Studio B' },
        { day: 'Tuesday', time: '07:00 - 08:30', class: '100 YTTC - Intermediate', instructor: 'Emma Smith', location: 'Studio A' },
        { day: 'Tuesday', time: '17:00 - 18:30', class: '200 YTTC - Mixed Level', instructor: 'Sam Lee', location: 'Studio B' },
        { day: 'Wednesday', time: '09:00 - 10:30', class: '100 YTTC - Basics', instructor: 'Mia Davis', location: 'Studio A' },
        { day: 'Wednesday', time: '19:00 - 20:30', class: '200 YTTC - Vinyasa Flow', instructor: 'Alex Martinez', location: 'Studio B' },
        { day: 'Thursday', time: '08:00 - 09:30', class: '100 YTTC - Relaxation', instructor: 'Sarah Nguyen', location: 'Studio A' },
        { day: 'Thursday', time: '18:00 - 19:30', class: '200 YTTC - Power Yoga', instructor: 'John Doe', location: 'Studio B' },
        { day: 'Friday', time: '07:00 - 08:30', class: '100 YTTC - Gentle Yoga', instructor: 'Natalie Kim', location: 'Studio A' },
        { day: 'Friday', time: '17:00 - 18:30', class: '200 YTTC - Ashtanga', instructor: 'Laura Lee', location: 'Studio B' },
        { day: 'Saturday', time: '09:00 - 10:30', class: '100 YTTC - Hatha Yoga', instructor: 'Ryan Chen', location: 'Studio A' },
        { day: 'Saturday', time: '10:45 - 12:15', class: '200 YTTC - Meditation', instructor: 'Kelly Brown', location: 'Studio B' },
        { day: 'Sunday', time: '08:00 - 09:30', class: '100 YTTC - Flow Yoga', instructor: 'Emma Smith', location: 'Studio A' },
        { day: 'Sunday', time: '18:00 - 19:30', class: '200 YTTC - Yin Yoga', instructor: 'Raj Patel', location: 'Studio B' },
    ];

    // Function to render the calendar with class timings
    function renderCalendar() {
        const calendar = document.getElementById('calendar');
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Create a calendar grid for the week
        let calendarHTML = '<table><thead><tr>';
        weekDays.forEach(day => {
            calendarHTML += `<th>${day}</th>`;
        });
        calendarHTML += '</tr></thead><tbody><tr>';

        // Add classes to the appropriate days
        weekDays.forEach(day => {
            calendarHTML += '<td>';
            scheduleData.forEach(item => {
                if (item.day === day) {
                    calendarHTML += `
                        <div class="calendar-event">
                            <span class="event-time">${item.time}</span>
                            <span class="event-class">${item.class}</span>
                            <span class="event-instructor">${item.instructor}</span>
                        </div>`;
                }
            });
            calendarHTML += '</td>';
        });

        calendarHTML += '</tr></tbody></table>';
        calendar.innerHTML = calendarHTML;
    }

    // Render the calendar on page load
    renderCalendar();
});

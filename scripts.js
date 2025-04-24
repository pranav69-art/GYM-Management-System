// Sample data for demonstration purposes
let members = [];
let bills = [];
let notifications = [];

// Function to handle user login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login (replace with actual authentication logic)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html'; // Redirect to admin dashboard
    } else if (username === 'member' && password === 'member') {
        window.location.href = 'members.html'; // Redirect to member dashboard
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid username or password';
    }
});

// Function to handle adding a member
document.getElementById('addMemberForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const memberName = document.getElementById('memberName').value;
    const memberEmail = document.getElementById('memberEmail').value;
    const memberPackage = document.getElementById('memberPackage').value;

    // Add member to the array (replace with actual database logic)
    const newMember = { name: memberName, email: memberEmail, package: memberPackage };
    members.push(newMember);
    alert('Member added successfully!');

    // Clear the form
    document.getElementById('addMemberForm').reset();
    displayMembers();
});

// Function to display members in the table
function displayMembers() {
    const membersTableBody = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
    membersTableBody.innerHTML = ''; // Clear existing rows

    members.forEach((member, index) => {
        const row = membersTableBody.insertRow();
        row.insertCell(0).innerText = member.name;
        row.insertCell(1).innerText = member.email;
        row.insertCell(2).innerText = member.package;
        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button onclick="deleteMember(${index})">Delete</button>`;
    });
}

// Function to delete a member
function deleteMember(index) {
    members.splice(index, 1);
    displayMembers();
}

// Function to display bills
function displayBills() {
    const billsTableBody = document.getElementById('billsTable').getElementsByTagName('tbody')[0];
    billsTableBody.innerHTML = ''; // Clear existing rows

    bills.forEach(bill => {
        const row = billsTableBody.insertRow();
        row.insertCell(0).innerText = bill.id;
        row.insertCell(1).innerText = bill.amount;
        row.insertCell(2).innerText = bill.status;
    });
}

// Function to display notifications
function displayNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    notificationsList.innerHTML = ''; // Clear existing notifications

    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.innerText = notification;
        notificationsList.appendChild(li);
    });
}

// Logout functionality
document.getElementById('logoutButton')?.addEventListener('click', function() {
    // Simulate logout (replace with actual logout logic)
    window.location.href = 'index.html'; // Redirect to login page
});

// Sample data for bills and notifications (for demonstration)
bills = [
    { id: 1, amount: '$50', status: 'Paid' },
    { id: 2, amount: '$30', status: 'Pending' }
];

notifications = [
    'Your membership will expire in 5 days.',
    'New classes are available next week.'
];

// Call display functions on page load
if (document.getElementById('membersTable')) {
    displayMembers();
}

if (document.getElementById('billsTable')) {
    displayBills();
}

if (document.getElementById('notificationsList')) {
    displayNotifications();
}
function renderEmployee(employee) {
    if (employee.getRole() === "Manager") {
        return `
        <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/5 mb-4">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${employee.getName()}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${employee.getRole()}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>Office Number: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>`
    } else if (employee.getRole() === "Intern") {
        return `
        <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/5 mb-4">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${employee.getName()}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${employee.getRole()}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>School: ${employee.getSchool()}</li>
            </ul>
        </div>`

    } else if (employee.getRole() === "Engineer") {
        return `
        <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/5 mb-4">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${employee.getName()}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${employee.getRole()}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: ${employee.getId()}</li>
                <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li>GitHub: <a href="https://github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a></li>
            </ul>
        </div>`
    }
}

function renderEmployees(data) {

    return data.map(employee => renderEmployee(employee)).join('\n');

}

function generateHtml(data) {
    let website =
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Profile</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="font-mono">
    <header class="text-center text-4xl p-8 bg-cyan-300 text-gray-500">
        MN Employees Profile
    </header>

    <div id="card-container" class="flex flex-row flex-wrap justify-center py-5 drop-shadow-lg rounded-lg">
        
    ${renderEmployees(data)}
    

    </div>

</body>

</html>`

    return website;
}

module.exports = generateHtml
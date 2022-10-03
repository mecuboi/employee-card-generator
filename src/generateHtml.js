function renderEmployees(data) {
    let employeeCards = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].officeNumber) {
            employeeCards.innerHTML = `
            <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/5 mb-4">
                <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${data[i].getName()}</h3>
                <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${data[i].getRole()}</h4>
                <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                    <li>ID: ${data[i].getId()}</li>
                    <li>Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li>Office Number: ${data[i].getOfficeNumber()}</li>
                </ul>
            </div>`

        } else if (data[i].school) {
            employeeCards.innerHTML += `
            <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/5 mb-4">
                <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${data[i].getName()}</h3>
                <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${data[i].getRole()}</h4>
                <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                    <li>ID: ${data[i].getId()}</li>
                    <li>Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li>School: ${data[i].getSchool()}</li>
                </ul>
            </div>`

        } else if (data[i].gitHub) {
            employeeCards.innerHTML += `
            <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/5 mb-4">
                <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${data[i].getName()}</h3>
                <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${data[i].getRole()}</h4>
                <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                    <li>ID: ${data[i].getId()}</li>
                    <li>Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li>GitHub: <a href="https://github.com/${data[i].getGitHub()}" target="_blank">${data[i].getGitHub()}</a></li>
                </ul>
            </div>`
        } 
    }
        return employeeCards.innerHTML

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
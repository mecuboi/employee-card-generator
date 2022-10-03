// const Employee = require('../lib/employee')
// const Manager = require('../lib/manager')
// const Intern = require('../lib/intern')
// const Engineer = require('../lib/engineer')

function renderEngineer(engineer) {
    for (let i = 0; i < engineer.length; i++) {
        return `
        <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/6 mb-4">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${engineer[i].name}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${engineer[i].getRole()}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: ${engineer[i].id}</li>
                <li>Email: ${engineer[i].email}</li>
                <li>GitHub: ${engineer[i].gitHub}</li>
            </ul>
        </div>`
    }

}

function renderIntern(intern) {
    for (let i = 0; i < intern.length; i++) {
        return `
        <div class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/6 mb-4">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">${intern[i].name}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${intern[i].getRole()}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: ${intern[i].id}</li>
                <li>Email: ${intern[i].email}</li>
                <li>School: ${intern[i].school}</li>
            </ul>
        </div>`
    }
}


function generateHtml(manager, intern, engineer) {
    let html =
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
        <div id="card" class="flex flex-col border-2 border-slate-300 rounded-lg mx-2 basis-1/6 mb-4">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">J${manager[0].name}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${manager[0].getRole()}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: ${manager[0].id}</li>
                <li>Email: ${manager[0].email}</li>
                <li>Office Number: ${manager[0].officeNumber}</li>
            </ul>
        </div>
            
        ${renderEngineer(engineer)}

        ${renderIntern(intern)}

    </div>

</body>

</html>`

    return html;
}

module.exports = generateHtml
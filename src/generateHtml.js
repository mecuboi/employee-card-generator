function renderCards (data) {

}


function generateHtml(data) {
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
        <div id="card" class="flex flex-col border-2 border-slate-300 rounded-lg mx-2">
            <h3 class="text-2xl bg-yellow-200 text-gray-700 p-1 rounded-lg m-1">J${data.name}</h3>
            <h4 class="text-2xl bg-blue-200 text-gray-700 p-1 rounded-lg m-1">${data.role}</h4>
            <ul class="p-3 bg-slate-200 m-2 rounded-lg text-sm">
                <li>ID: 2</li>
                <li>Email: matthewd.jusuf@gmail.com</li>
                <li>Office Number: 0212345553</li>
            </ul>
        </div>
            

    </div>

</body>

</html>



`

return html;
}

module.exports = generateHtml
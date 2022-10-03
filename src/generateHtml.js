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
    <title>Employee Profiles</title>
</head>
<body>
    <header>
        MN company profile
    </header>
    <div>
    
    ${renderCards(data)}

    </div>
    
</body>
</html>



`

return html;
}
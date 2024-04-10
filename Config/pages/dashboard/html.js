const style_css = require('./css.js')

const html = `
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Capybank Dashboard</title>
    <style>
        ${style_css}
    </style>
</head>
<body>
    <div class="container">
        <div class="sideMenu">
            <div class="topBox">
                <img src="#" alt="Capy_logo">
                <h3>Capybank</h3>
            </div>
            <div class="optBox">
                 <ul>
                    <li>Página Inicial</li>
                    <li>Transferências</li>
                    <li>Pagamentos</li>
                    <li>Notificações</li>
                 </ul>           
            </div>
            <div class="botBox">
                <ul>
                    <li>Minha Conta</li>
                    <li>Configurações</li>
                    <li>Ajuda</li>
                </ul>
            </div>
        </div>
        <div class="topBar">
            <div class="leftSide">
                <h2>Início</h2>
            </div>
            <div class="midSide">
                <div class = 'search-area'>
                    <span class="material-symbols-outlined">search</span>
                    <input type="search" name="srchBar" id="srhBar">
                </div>
            </div>
            <div class="rgtSide">
                <!---user name (drop down menu)-->
                <span> Claudia Alves</span>
                <img src="user photo" alt="">
            </div>
        </div>
        <div class="content">
            <div class="box1">
                <h4>Cofre do Sr. capybara</h4>
            </div>
            <div class="box2">
                <h4>Saldo</h4>
            </div>
            <div class="box3">
                <h4>Histórico</h4>
            </div>
            <div class="box4">
                <h3>Shopping</h3>
            </div>
        </div>
    </div>
</body>
</html>
`

module.exports = html
const css = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
}

.container-left {
    height: 100vh;
    width: auto;
    background: #87B344;
    display: inline-block;
}

.container-left .logo-tudo {
    display: flex;
    justify-content: center;
}

.container-left .logo-tudo .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 400px;
    height: 60px;
    /* border-radius: 40px;
    border-color: white;
    border-style: solid; */
    margin-top: 30px;
}

.container-left .logo img {
    width: 55px;
    height: 55px;
}

.container-left span {
    font-size: 40px;
    color: white;
}

.container-left .form-box {
    margin-top: 100px;
    display: flex;
    justify-content: center;
}

.container-left .input-box input {
    width: 400px;
    height: 100%;
    /* background: transparent; */
    background: white;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 15px;
    font-size: 16px;
    color: #000;
    padding: 20px 45px 20px 45px;
    margin-bottom: 30px;
}

.container-left .input-box {
    color: white;
}

.container-left .center-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-left .center-button .bott .btn {
    display: flex;
    align-items: center;
    width: 200px;
    height: 45px;
    background: #77B255;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    font-weight: 600;
    margin-top: 20px;
    justify-content: center;
    justify-items: center;
}

.container-left .center-button .bott .btn:hover {
    background: #77B255;
}




/*parte direita*/

.container .container-direita .baner img {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 900px;
    z-index: 0;
}

.container .container-direita .titulo {
    z-index: 1;
    display: flex;
}
</style>`

module.exports = css
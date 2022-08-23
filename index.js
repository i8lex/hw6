function account() {

    const login = prompt("Enter your e-mail");

    const wrongLogin = `Wrong e-mail`;

    if(login !== `admin@test.io`) {
        return alert(wrongLogin);
    }

    const pass = prompt(`Enter your password`);

    const wrongPass = `Wrong password`;

    if(pass !== `admin1234`) {
        return alert(wrongPass);
    }

    return alert(`Login successful`);
}

account();
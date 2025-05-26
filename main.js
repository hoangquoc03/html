function solveEquation() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let kq = "";

    kq = "Phương trình: " + a + "x + " + b + " = 0<br>";

    if (a === 0) {
        if (b === 0) {
            kq += "Phương trình vô số nghiệm.";
        } else {
            kq += "Phương trình vô nghiệm.";
        }
    } else {
        let x = -b / a;
        kq += "Có nghiệm: " + x;
    }

    document.getElementById('result').innerHTML = kq;
}

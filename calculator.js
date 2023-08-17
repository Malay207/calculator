
function clean() {
    document.form.text.value = "";
}
function insert(num) {
    document.form.text.value = document.form.text.value + num;
}
function equal() {
    let exp = document.form.text.value;
    if (exp) {
        document.form.text.value = eval(exp);
    }
}
function back() {
    let expt = document.form.text.value;
    document.form.text.value = expt.substring(0, expt.length - 1);

}
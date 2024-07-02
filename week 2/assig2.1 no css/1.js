function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        var answer = eval(result);
        document.getElementById('result').value = answer;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

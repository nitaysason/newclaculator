var num1 = 0
var clear_flag = false


function do_math(op) {
    num1 = res.value
    clear_flag = true
    oper = op

}
function calc() {
    if (oper == "+") { res.value = +res.value + +num1 }
    if (oper == "-") { res.value = +res.value - +num1 }
    if (oper == "*") { res.value = +res.value * +num1 }
    if (oper == "/") { res.value = +num1 / +res.value }
    if (oper == "^") { res.value = Math.pow(+num1, +res.value) }
    if (oper == "√") { res.value = Math.sqrt(+num1) }
    if (oper == "m+") { res.value = num1 +=  res.value}

}


function addnum(new_digit) {
    if (clear_flag == true) {
        res.value = ""
        clear_flag = false
    }

    if (res.value == 0) {
        res.value = ""
    }


    if (res.value.length < 11)
        res.value += new_digit


}

function clear_result() {

    res.value = 0
}
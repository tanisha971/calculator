let string = "";
        let buttons = document.querySelectorAll('.button'); 
        Array.from(buttons).forEach((button) => {
            button.addEventListener('click', (e) =>{
                if(e.target.innerHTML == '=') {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } else if(e.target.innerHTML == '%') {
                    let parts = string.split(/([+\-*/])/); // Split by operators
                    let lastIndex = parts.length - 1;
                    let lastPart = parts[lastIndex];
                    if (lastPart.includes("%")) {
                        let num = parseFloat(parts[lastIndex - 1]);
                        let percent = parseFloat(lastPart.replace("%", ""));
                        let operator = parts[lastIndex - 2];
                        if (!isNaN(num) && !isNaN(percent) && operator) {
                            let result = 0;
                            switch (operator) {
                                case '+':
                                    result = num + (num * percent / 100);
                                    break;
                                case '-':
                                    result = num - (num * percent / 100);
                                    break;
                                case '*':
                                    result = num * (num * percent / 100);
                                    break;
                                case '/':
                                    result = num / (num * percent / 100);
                                    break;
                                default:
                                    result = num * percent / 100;
                            }
                            document.querySelector('input').value = result;
                            string = result.toString();
                        } else {
                            document.querySelector('input').value = "Invalid input";
                        }
                    } else {
                        string += "%";
                        document.querySelector('input').value = string;
                    }
                } else if(e.target.innerHTML == 'C') {
                    string = "";
                    document.querySelector('input').value = string;
                } else {
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                }
            });
        });
       
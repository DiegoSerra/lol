"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    The password should meet all of the following requirements:
    - Minimum 6 characters.
    - Should contain at least 1 number.
    - Should contain at least 1 uppercase letter.
    - Should contain at least 1 lowercase letter.
*/
var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.PasswordRequirements = function (AC) {
        var password = AC.get('password').value;
        var passwordConfirm = AC.get('passwordConfirm').value;
        var numberTest = /[0-9]/;
        var upperTest = /[A-Z]/;
        var lowerTest = /[a-z]/;
        var passwordErrors = {};
        var passwordConfirmErrors = {};
        if (password.length == 0) {
            passwordErrors.passRequired = true;
        }
        if (password.length < 6) {
            passwordErrors.passLength = true;
        }
        if (!numberTest.test(password)) {
            passwordErrors.passNumber = true;
        }
        if (!upperTest.test(password)) {
            passwordErrors.passUpper = true;
        }
        if (!lowerTest.test(password)) {
            passwordErrors.passLower = true;
        }
        if (password !== passwordConfirm) {
            passwordConfirmErrors.matchPassword = true;
        }
        if (Object.keys(passwordErrors).length) {
            AC.get('password').setErrors(passwordErrors);
        }
        if (Object.keys(passwordConfirmErrors).length) {
            AC.get('passwordConfirm').setErrors(passwordConfirmErrors);
        }
        return null;
    };
    PasswordValidation.displayRequeriments = function (str) {
        var res = "";
        if (Object.keys(str).length) {
            res += "Password must have at least";
            var requeriments = [];
            if (str.passLength)
                requeriments.push(" 6 characters");
            if (str.passNumber)
                requeriments.push(" 1 number");
            if (str.passUpper)
                requeriments.push(" 1 uppercase");
            if (str.passLower)
                requeriments.push(" 1 lowercase");
            return res + requeriments.join();
        }
        else {
            return res;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;
//# sourceMappingURL=password-validation.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DOM = {
    userName: null,
    password: null,
    registerResponse: null,
    loginResponse: null
};
function init() {
    var _a, _b, _c;
    DOM.userName = document.querySelector("#userName");
    DOM.password = document.querySelector("#password");
    DOM.registerResponse = document.querySelector("#registerResponse");
    DOM.loginResponse = document.querySelector("#loginResponse");
    (_a = document.getElementById("registerAction")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const result = yield registerApi({ userName: (_a = DOM.userName) === null || _a === void 0 ? void 0 : _a.value, password: (_b = DOM.password) === null || _b === void 0 ? void 0 : _b.value });
            if (DOM.registerResponse) {
                DOM.registerResponse.innerText = result;
            }
        }
        catch (ex) {
            if (DOM.registerResponse) {
                DOM.registerResponse.innerText = ex.message;
            }
        }
    }));
    (_b = document.getElementById("loginAction")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const userNameLogin = (_a = document.querySelector("#userNameLogin")) === null || _a === void 0 ? void 0 : _a.value;
            const passwordLogin = (_b = document.querySelector("#passwordLogin")) === null || _b === void 0 ? void 0 : _b.value;
            if (userNameLogin && passwordLogin) {
                const result = yield loginApi({ userName: userNameLogin, password: passwordLogin });
                if (DOM.loginResponse) {
                    if (result.token) {
                        localStorage.setItem("token", result.token);
                    }
                    DOM.loginResponse.innerText = JSON.stringify(result);
                }
            }
        }
        catch (ex) {
            if (DOM.loginResponse) {
                DOM.loginResponse.innerText = ex.message;
            }
        }
    }));
    (_c = document.getElementById("getUsersAction")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield getUsersApi();
            const element = document.querySelector("#getUsersResponse");
            if (element) {
                element.innerHTML = JSON.stringify(result);
            }
        }
        catch (ex) {
            alert("error");
        }
    }));
}
function registerApi(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const rawResponse = yield fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const content = yield rawResponse.text();
        return content;
    });
}
function loginApi(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const rawResponse = yield fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const content = yield rawResponse.json();
        return content;
    });
}
function getUsersApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const usersResponse = yield fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: new Headers({
                'Authorization': localStorage.getItem("token") || "",
                'Content-Type': 'application/json'
            }),
        });
        const content = yield usersResponse.json();
        return content;
    });
}
init();

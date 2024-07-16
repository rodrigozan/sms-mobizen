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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class SmsMobizen {
    constructor(apiKey, apiServer, apiVersion, format) {
        this.apiEnvironment = {
            apiKey,
            apiServer,
            apiVersion,
            format,
        };
    }
    createRequestBody(recipient, text) {
        return new URLSearchParams({
            recipient,
            text,
            output: this.apiEnvironment.format,
            api: this.apiEnvironment.apiVersion,
            apiKey: this.apiEnvironment.apiKey,
        });
    }
    sendSms(recipients, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiEnvironment.apiServer}/service/Message/sendsmsmessage`;
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
            const sendRequests = recipients.map((recipient) => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                const body = this.createRequestBody(recipient, text);
                try {
                    const response = yield axios_1.default.post(url, body.toString(), { headers });
                    return response.data;
                }
                catch (e) {
                    const error = e;
                    return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 0
                        ? 'The request was cancelled due to a timeout.'
                        : `Erro:r ${((_b = error.response) === null || _b === void 0 ? void 0 : _b.statusText) || 'Unknown'}`;
                }
            }));
            return Promise.all(sendRequests).then(results => results.map(result => result || 'Unknown error'));
        });
    }
}
exports.default = SmsMobizen;

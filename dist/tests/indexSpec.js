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
const __1 = __importDefault(require(".."));
const supertest_1 = __importDefault(require("supertest"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const reSize_1 = __importDefault(require("../reSize/reSize"));
function isIT(image) {
    return fs_1.default.existsSync(path_1.default.resolve('./', `${image}`)) ? true : false;
}
const request = (0, supertest_1.default)(__1.default);
describe('tests for the endpoint', () => {
    it('should return OK status', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    })),
        it('should return an ok status for the /image route with not valid data without query', () => __awaiter(void 0, void 0, void 0, function* () {
            const response2 = yield request.get('/image');
            expect(response2.status).toBe(200);
        })),
        it('should return OK status when passing right file name and numbers', () => __awaiter(void 0, void 0, void 0, function* () {
            let name = 'Nasa';
            let height = 450;
            let width = 600;
            const response3 = request.get(`/image?file=${name}&wid=${width}&hei=${height}`);
            let image = fs_1.default.existsSync(path_1.default.resolve('./', `${name}`));
            yield response3;
            expect(image).toBeTruthy;
        })),
        it('should check if the url won\'t work when passing wrong file name', () => __awaiter(void 0, void 0, void 0, function* () {
            let name = 'Egypt';
            let height = 450;
            let width = 600;
            let image = fs_1.default.existsSync(path_1.default.resolve('./', `${name}`));
            const response4 = request.get(`/image?file=${name}&wid=${width}&hei=${height}`);
            yield response4;
            expect(image).toBeFalse;
        }));
});
describe('tests for sharp and images', () => {
    it('should check if the initial image exists', () => {
        expect(isIT('Nasa.jpg')).toBe(true);
    }),
        it('should check if sharp is working', () => __awaiter(void 0, void 0, void 0, function* () {
            const name = 'Nasa';
            yield (0, reSize_1.default)(name, 500, 400);
            expect(isIT('Nasa_500_400.jpg')).toBe(true);
        }));
});

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaModule = void 0;
const common_1 = require("@nestjs/common");
const mascota_service_1 = require("./mascota.service");
const mascota_controller_1 = require("./mascota.controller");
let MascotaModule = class MascotaModule {
};
MascotaModule = __decorate([
    (0, common_1.Module)({
        controllers: [mascota_controller_1.MascotaController],
        providers: [mascota_service_1.MascotaService]
    })
], MascotaModule);
exports.MascotaModule = MascotaModule;
//# sourceMappingURL=mascota.module.js.map
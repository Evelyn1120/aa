"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaService = void 0;
const common_1 = require("@nestjs/common");
const mascota_entity_1 = require("./entities/mascota.entity");
let MascotaService = class MascotaService {
    constructor() {
        this.mascota = [
            { id: 1, dueno: '1', nombre: 'Ayme' },
            { id: 2, dueno: '2', nombre: 'Evelyn' },
        ];
    }
    create(CreateMascotaDto) {
        const mascota = new mascota_entity_1.Mascota();
        mascota.id = Math.max(...this.mascota.map(elemento => elemento.id), 0) + 1;
        mascota.dueno = CreateMascotaDto.dueno;
        mascota.nombre = CreateMascotaDto.nombre;
        this.mascota.push(mascota);
        return mascota;
    }
    findAll() {
        return this.mascota;
    }
    findOne(id) {
        const mascota = this.mascota.find(mascota => mascota.id === id);
        if (!mascota)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return mascota;
    }
    update(id, updateMascotaDto) {
        const { dueno } = updateMascotaDto;
        const { nombre } = updateMascotaDto;
        const mascota = this.findOne(id);
        if (dueno)
            mascota.dueno = dueno;
        this.mascota = this.mascota.map(elemento => {
            if (elemento.id === id)
                return mascota;
            return elemento;
        });
        return mascota;
    }
    remove(id) {
        this.findOne(id);
        this.mascota = this.mascota.filter(elemento => elemento.id !== id);
    }
};
MascotaService = __decorate([
    (0, common_1.Injectable)()
], MascotaService);
exports.MascotaService = MascotaService;
//# sourceMappingURL=mascota.service.js.map
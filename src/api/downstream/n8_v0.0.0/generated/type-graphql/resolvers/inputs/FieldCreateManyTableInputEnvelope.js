"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateManyTableInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateManyTableInput_1 = require("../inputs/FieldCreateManyTableInput");
let FieldCreateManyTableInputEnvelope = class FieldCreateManyTableInputEnvelope {
    data;
    skipDuplicates;
};
exports.FieldCreateManyTableInputEnvelope = FieldCreateManyTableInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldCreateManyTableInput_1.FieldCreateManyTableInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FieldCreateManyTableInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FieldCreateManyTableInputEnvelope.prototype, "skipDuplicates", void 0);
exports.FieldCreateManyTableInputEnvelope = FieldCreateManyTableInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateManyTableInputEnvelope", {})
], FieldCreateManyTableInputEnvelope);

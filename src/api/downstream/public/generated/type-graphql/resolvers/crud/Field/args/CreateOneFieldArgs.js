"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateInput_1 = require("../../../inputs/FieldCreateInput");
let CreateOneFieldArgs = class CreateOneFieldArgs {
    data;
};
exports.CreateOneFieldArgs = CreateOneFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateInput_1.FieldCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldCreateInput_1.FieldCreateInput)
], CreateOneFieldArgs.prototype, "data", void 0);
exports.CreateOneFieldArgs = CreateOneFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneFieldArgs);

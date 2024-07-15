"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateManyInput_1 = require("../../../inputs/FieldCreateManyInput");
let CreateManyFieldArgs = class CreateManyFieldArgs {
    data;
    skipDuplicates;
};
exports.CreateManyFieldArgs = CreateManyFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldCreateManyInput_1.FieldCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyFieldArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyFieldArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyFieldArgs = CreateManyFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyFieldArgs);

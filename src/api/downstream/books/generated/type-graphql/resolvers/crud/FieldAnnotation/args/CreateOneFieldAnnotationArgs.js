"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateInput_1 = require("../../../inputs/FieldAnnotationCreateInput");
let CreateOneFieldAnnotationArgs = class CreateOneFieldAnnotationArgs {
    data;
};
exports.CreateOneFieldAnnotationArgs = CreateOneFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateInput_1.FieldAnnotationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateInput_1.FieldAnnotationCreateInput)
], CreateOneFieldAnnotationArgs.prototype, "data", void 0);
exports.CreateOneFieldAnnotationArgs = CreateOneFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneFieldAnnotationArgs);

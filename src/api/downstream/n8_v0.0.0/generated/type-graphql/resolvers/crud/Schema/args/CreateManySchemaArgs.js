"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateManyInput_1 = require("../../../inputs/SchemaCreateManyInput");
let CreateManySchemaArgs = class CreateManySchemaArgs {
    data;
    skipDuplicates;
};
exports.CreateManySchemaArgs = CreateManySchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchemaCreateManyInput_1.SchemaCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySchemaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManySchemaArgs.prototype, "skipDuplicates", void 0);
exports.CreateManySchemaArgs = CreateManySchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySchemaArgs);

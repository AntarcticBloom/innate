"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateManyInput_1 = require("../../../inputs/TableCreateManyInput");
let CreateManyTableArgs = class CreateManyTableArgs {
    data;
    skipDuplicates;
};
exports.CreateManyTableArgs = CreateManyTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableCreateManyInput_1.TableCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTableArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTableArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyTableArgs = CreateManyTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTableArgs);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTableOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableWhereUniqueInput_1 = require("../../../inputs/TableWhereUniqueInput");
let FindUniqueTableOrThrowArgs = class FindUniqueTableOrThrowArgs {
    where;
};
exports.FindUniqueTableOrThrowArgs = FindUniqueTableOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], FindUniqueTableOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueTableOrThrowArgs = FindUniqueTableOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTableOrThrowArgs);

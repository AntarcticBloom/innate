"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableUpdateManyMutationInput_1 = require("../../../inputs/TableUpdateManyMutationInput");
const TableWhereInput_1 = require("../../../inputs/TableWhereInput");
let UpdateManyTableArgs = class UpdateManyTableArgs {
    data;
    where;
};
exports.UpdateManyTableArgs = UpdateManyTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateManyMutationInput_1.TableUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateManyMutationInput_1.TableUpdateManyMutationInput)
], UpdateManyTableArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], UpdateManyTableArgs.prototype, "where", void 0);
exports.UpdateManyTableArgs = UpdateManyTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTableArgs);

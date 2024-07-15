"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateInput_1 = require("../../../inputs/TableCreateInput");
let CreateOneTableArgs = class CreateOneTableArgs {
    data;
};
exports.CreateOneTableArgs = CreateOneTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateInput_1.TableCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateInput_1.TableCreateInput)
], CreateOneTableArgs.prototype, "data", void 0);
exports.CreateOneTableArgs = CreateOneTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTableArgs);

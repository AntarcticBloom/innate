"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateManySchemaInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateManySchemaInput_1 = require("../inputs/TableCreateManySchemaInput");
let TableCreateManySchemaInputEnvelope = class TableCreateManySchemaInputEnvelope {
    data;
    skipDuplicates;
};
exports.TableCreateManySchemaInputEnvelope = TableCreateManySchemaInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableCreateManySchemaInput_1.TableCreateManySchemaInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TableCreateManySchemaInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TableCreateManySchemaInputEnvelope.prototype, "skipDuplicates", void 0);
exports.TableCreateManySchemaInputEnvelope = TableCreateManySchemaInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateManySchemaInputEnvelope", {})
], TableCreateManySchemaInputEnvelope);

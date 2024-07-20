"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SchemaScalarFieldEnum;
(function (SchemaScalarFieldEnum) {
    SchemaScalarFieldEnum["id"] = "id";
    SchemaScalarFieldEnum["name"] = "name";
    SchemaScalarFieldEnum["tracked"] = "tracked";
    SchemaScalarFieldEnum["baselineVersionOfSchema"] = "baselineVersionOfSchema";
    SchemaScalarFieldEnum["isNewestProductionVersion"] = "isNewestProductionVersion";
    SchemaScalarFieldEnum["createdAt"] = "createdAt";
    SchemaScalarFieldEnum["updatedAt"] = "updatedAt";
})(SchemaScalarFieldEnum || (exports.SchemaScalarFieldEnum = SchemaScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SchemaScalarFieldEnum, {
    name: "SchemaScalarFieldEnum",
    description: undefined,
});

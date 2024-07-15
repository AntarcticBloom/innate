"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TableScalarFieldEnum;
(function (TableScalarFieldEnum) {
    TableScalarFieldEnum["id"] = "id";
    TableScalarFieldEnum["schemaId"] = "schemaId";
    TableScalarFieldEnum["name"] = "name";
    TableScalarFieldEnum["modelName"] = "modelName";
    TableScalarFieldEnum["relations"] = "relations";
    TableScalarFieldEnum["createdAt"] = "createdAt";
    TableScalarFieldEnum["updatedAt"] = "updatedAt";
})(TableScalarFieldEnum || (exports.TableScalarFieldEnum = TableScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TableScalarFieldEnum, {
    name: "TableScalarFieldEnum",
    description: undefined,
});

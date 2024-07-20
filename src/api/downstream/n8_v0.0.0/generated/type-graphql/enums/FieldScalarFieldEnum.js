"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FieldScalarFieldEnum;
(function (FieldScalarFieldEnum) {
    FieldScalarFieldEnum["id"] = "id";
    FieldScalarFieldEnum["tableId"] = "tableId";
    FieldScalarFieldEnum["name"] = "name";
    FieldScalarFieldEnum["type"] = "type";
    FieldScalarFieldEnum["createdAt"] = "createdAt";
    FieldScalarFieldEnum["updatedAt"] = "updatedAt";
})(FieldScalarFieldEnum || (exports.FieldScalarFieldEnum = FieldScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FieldScalarFieldEnum, {
    name: "FieldScalarFieldEnum",
    description: undefined,
});

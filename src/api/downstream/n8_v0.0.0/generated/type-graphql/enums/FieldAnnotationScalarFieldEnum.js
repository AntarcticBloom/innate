"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FieldAnnotationScalarFieldEnum;
(function (FieldAnnotationScalarFieldEnum) {
    FieldAnnotationScalarFieldEnum["id"] = "id";
    FieldAnnotationScalarFieldEnum["tableId"] = "tableId";
    FieldAnnotationScalarFieldEnum["modelName"] = "modelName";
    FieldAnnotationScalarFieldEnum["fieldId"] = "fieldId";
    FieldAnnotationScalarFieldEnum["fieldName"] = "fieldName";
    FieldAnnotationScalarFieldEnum["annotation"] = "annotation";
    FieldAnnotationScalarFieldEnum["createdAt"] = "createdAt";
    FieldAnnotationScalarFieldEnum["updatedAt"] = "updatedAt";
})(FieldAnnotationScalarFieldEnum || (exports.FieldAnnotationScalarFieldEnum = FieldAnnotationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FieldAnnotationScalarFieldEnum, {
    name: "FieldAnnotationScalarFieldEnum",
    description: undefined,
});

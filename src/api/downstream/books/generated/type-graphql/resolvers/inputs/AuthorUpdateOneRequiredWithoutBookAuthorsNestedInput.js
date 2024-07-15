"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateOrConnectWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateOrConnectWithoutBookAuthorsInput");
const AuthorCreateWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateWithoutBookAuthorsInput");
const AuthorUpdateToOneWithWhereWithoutBookAuthorsInput_1 = require("../inputs/AuthorUpdateToOneWithWhereWithoutBookAuthorsInput");
const AuthorUpsertWithoutBookAuthorsInput_1 = require("../inputs/AuthorUpsertWithoutBookAuthorsInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput = class AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput = AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput)
], AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateOrConnectWithoutBookAuthorsInput_1.AuthorCreateOrConnectWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCreateOrConnectWithoutBookAuthorsInput_1.AuthorCreateOrConnectWithoutBookAuthorsInput)
], AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpsertWithoutBookAuthorsInput_1.AuthorUpsertWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorUpsertWithoutBookAuthorsInput_1.AuthorUpsertWithoutBookAuthorsInput)
], AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateToOneWithWhereWithoutBookAuthorsInput_1.AuthorUpdateToOneWithWhereWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorUpdateToOneWithWhereWithoutBookAuthorsInput_1.AuthorUpdateToOneWithWhereWithoutBookAuthorsInput)
], AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "update", void 0);
exports.AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput = AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput", {})
], AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput);

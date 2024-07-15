"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Author: crudResolvers.AuthorCrudResolver,
    Book: crudResolvers.BookCrudResolver,
    BookAuthor: crudResolvers.BookAuthorCrudResolver,
    Administrator: crudResolvers.AdministratorCrudResolver,
    Field: crudResolvers.FieldCrudResolver,
    FieldAnnotation: crudResolvers.FieldAnnotationCrudResolver,
    RevokedRefreshToken: crudResolvers.RevokedRefreshTokenCrudResolver,
    Schema: crudResolvers.SchemaCrudResolver,
    Table: crudResolvers.TableCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Author: {
        aggregateAuthor: actionResolvers.AggregateAuthorResolver,
        createManyAuthor: actionResolvers.CreateManyAuthorResolver,
        createOneAuthor: actionResolvers.CreateOneAuthorResolver,
        deleteManyAuthor: actionResolvers.DeleteManyAuthorResolver,
        deleteOneAuthor: actionResolvers.DeleteOneAuthorResolver,
        findFirstAuthor: actionResolvers.FindFirstAuthorResolver,
        findFirstAuthorOrThrow: actionResolvers.FindFirstAuthorOrThrowResolver,
        authors: actionResolvers.FindManyAuthorResolver,
        author: actionResolvers.FindUniqueAuthorResolver,
        getAuthor: actionResolvers.FindUniqueAuthorOrThrowResolver,
        groupByAuthor: actionResolvers.GroupByAuthorResolver,
        updateManyAuthor: actionResolvers.UpdateManyAuthorResolver,
        updateOneAuthor: actionResolvers.UpdateOneAuthorResolver,
        upsertOneAuthor: actionResolvers.UpsertOneAuthorResolver
    },
    Book: {
        aggregateBook: actionResolvers.AggregateBookResolver,
        createManyBook: actionResolvers.CreateManyBookResolver,
        createOneBook: actionResolvers.CreateOneBookResolver,
        deleteManyBook: actionResolvers.DeleteManyBookResolver,
        deleteOneBook: actionResolvers.DeleteOneBookResolver,
        findFirstBook: actionResolvers.FindFirstBookResolver,
        findFirstBookOrThrow: actionResolvers.FindFirstBookOrThrowResolver,
        books: actionResolvers.FindManyBookResolver,
        book: actionResolvers.FindUniqueBookResolver,
        getBook: actionResolvers.FindUniqueBookOrThrowResolver,
        groupByBook: actionResolvers.GroupByBookResolver,
        updateManyBook: actionResolvers.UpdateManyBookResolver,
        updateOneBook: actionResolvers.UpdateOneBookResolver,
        upsertOneBook: actionResolvers.UpsertOneBookResolver
    },
    BookAuthor: {
        aggregateBookAuthor: actionResolvers.AggregateBookAuthorResolver,
        createManyBookAuthor: actionResolvers.CreateManyBookAuthorResolver,
        createOneBookAuthor: actionResolvers.CreateOneBookAuthorResolver,
        deleteManyBookAuthor: actionResolvers.DeleteManyBookAuthorResolver,
        deleteOneBookAuthor: actionResolvers.DeleteOneBookAuthorResolver,
        findFirstBookAuthor: actionResolvers.FindFirstBookAuthorResolver,
        findFirstBookAuthorOrThrow: actionResolvers.FindFirstBookAuthorOrThrowResolver,
        bookAuthors: actionResolvers.FindManyBookAuthorResolver,
        bookAuthor: actionResolvers.FindUniqueBookAuthorResolver,
        getBookAuthor: actionResolvers.FindUniqueBookAuthorOrThrowResolver,
        groupByBookAuthor: actionResolvers.GroupByBookAuthorResolver,
        updateManyBookAuthor: actionResolvers.UpdateManyBookAuthorResolver,
        updateOneBookAuthor: actionResolvers.UpdateOneBookAuthorResolver,
        upsertOneBookAuthor: actionResolvers.UpsertOneBookAuthorResolver
    },
    Administrator: {
        aggregateAdministrator: actionResolvers.AggregateAdministratorResolver,
        createManyAdministrator: actionResolvers.CreateManyAdministratorResolver,
        createOneAdministrator: actionResolvers.CreateOneAdministratorResolver,
        deleteManyAdministrator: actionResolvers.DeleteManyAdministratorResolver,
        deleteOneAdministrator: actionResolvers.DeleteOneAdministratorResolver,
        findFirstAdministrator: actionResolvers.FindFirstAdministratorResolver,
        findFirstAdministratorOrThrow: actionResolvers.FindFirstAdministratorOrThrowResolver,
        administrators: actionResolvers.FindManyAdministratorResolver,
        administrator: actionResolvers.FindUniqueAdministratorResolver,
        getAdministrator: actionResolvers.FindUniqueAdministratorOrThrowResolver,
        groupByAdministrator: actionResolvers.GroupByAdministratorResolver,
        updateManyAdministrator: actionResolvers.UpdateManyAdministratorResolver,
        updateOneAdministrator: actionResolvers.UpdateOneAdministratorResolver,
        upsertOneAdministrator: actionResolvers.UpsertOneAdministratorResolver
    },
    Field: {
        aggregateField: actionResolvers.AggregateFieldResolver,
        createManyField: actionResolvers.CreateManyFieldResolver,
        createOneField: actionResolvers.CreateOneFieldResolver,
        deleteManyField: actionResolvers.DeleteManyFieldResolver,
        deleteOneField: actionResolvers.DeleteOneFieldResolver,
        findFirstField: actionResolvers.FindFirstFieldResolver,
        findFirstFieldOrThrow: actionResolvers.FindFirstFieldOrThrowResolver,
        fields: actionResolvers.FindManyFieldResolver,
        field: actionResolvers.FindUniqueFieldResolver,
        getField: actionResolvers.FindUniqueFieldOrThrowResolver,
        groupByField: actionResolvers.GroupByFieldResolver,
        updateManyField: actionResolvers.UpdateManyFieldResolver,
        updateOneField: actionResolvers.UpdateOneFieldResolver,
        upsertOneField: actionResolvers.UpsertOneFieldResolver
    },
    FieldAnnotation: {
        aggregateFieldAnnotation: actionResolvers.AggregateFieldAnnotationResolver,
        createManyFieldAnnotation: actionResolvers.CreateManyFieldAnnotationResolver,
        createOneFieldAnnotation: actionResolvers.CreateOneFieldAnnotationResolver,
        deleteManyFieldAnnotation: actionResolvers.DeleteManyFieldAnnotationResolver,
        deleteOneFieldAnnotation: actionResolvers.DeleteOneFieldAnnotationResolver,
        findFirstFieldAnnotation: actionResolvers.FindFirstFieldAnnotationResolver,
        findFirstFieldAnnotationOrThrow: actionResolvers.FindFirstFieldAnnotationOrThrowResolver,
        fieldAnnotations: actionResolvers.FindManyFieldAnnotationResolver,
        fieldAnnotation: actionResolvers.FindUniqueFieldAnnotationResolver,
        getFieldAnnotation: actionResolvers.FindUniqueFieldAnnotationOrThrowResolver,
        groupByFieldAnnotation: actionResolvers.GroupByFieldAnnotationResolver,
        updateManyFieldAnnotation: actionResolvers.UpdateManyFieldAnnotationResolver,
        updateOneFieldAnnotation: actionResolvers.UpdateOneFieldAnnotationResolver,
        upsertOneFieldAnnotation: actionResolvers.UpsertOneFieldAnnotationResolver
    },
    RevokedRefreshToken: {
        aggregateRevokedRefreshToken: actionResolvers.AggregateRevokedRefreshTokenResolver,
        createManyRevokedRefreshToken: actionResolvers.CreateManyRevokedRefreshTokenResolver,
        createOneRevokedRefreshToken: actionResolvers.CreateOneRevokedRefreshTokenResolver,
        deleteManyRevokedRefreshToken: actionResolvers.DeleteManyRevokedRefreshTokenResolver,
        deleteOneRevokedRefreshToken: actionResolvers.DeleteOneRevokedRefreshTokenResolver,
        findFirstRevokedRefreshToken: actionResolvers.FindFirstRevokedRefreshTokenResolver,
        findFirstRevokedRefreshTokenOrThrow: actionResolvers.FindFirstRevokedRefreshTokenOrThrowResolver,
        revokedRefreshTokens: actionResolvers.FindManyRevokedRefreshTokenResolver,
        revokedRefreshToken: actionResolvers.FindUniqueRevokedRefreshTokenResolver,
        getRevokedRefreshToken: actionResolvers.FindUniqueRevokedRefreshTokenOrThrowResolver,
        groupByRevokedRefreshToken: actionResolvers.GroupByRevokedRefreshTokenResolver,
        updateManyRevokedRefreshToken: actionResolvers.UpdateManyRevokedRefreshTokenResolver,
        updateOneRevokedRefreshToken: actionResolvers.UpdateOneRevokedRefreshTokenResolver,
        upsertOneRevokedRefreshToken: actionResolvers.UpsertOneRevokedRefreshTokenResolver
    },
    Schema: {
        aggregateSchema: actionResolvers.AggregateSchemaResolver,
        createManySchema: actionResolvers.CreateManySchemaResolver,
        createOneSchema: actionResolvers.CreateOneSchemaResolver,
        deleteManySchema: actionResolvers.DeleteManySchemaResolver,
        deleteOneSchema: actionResolvers.DeleteOneSchemaResolver,
        findFirstSchema: actionResolvers.FindFirstSchemaResolver,
        findFirstSchemaOrThrow: actionResolvers.FindFirstSchemaOrThrowResolver,
        schemata: actionResolvers.FindManySchemaResolver,
        schema: actionResolvers.FindUniqueSchemaResolver,
        getSchema: actionResolvers.FindUniqueSchemaOrThrowResolver,
        groupBySchema: actionResolvers.GroupBySchemaResolver,
        updateManySchema: actionResolvers.UpdateManySchemaResolver,
        updateOneSchema: actionResolvers.UpdateOneSchemaResolver,
        upsertOneSchema: actionResolvers.UpsertOneSchemaResolver
    },
    Table: {
        aggregateTable: actionResolvers.AggregateTableResolver,
        createManyTable: actionResolvers.CreateManyTableResolver,
        createOneTable: actionResolvers.CreateOneTableResolver,
        deleteManyTable: actionResolvers.DeleteManyTableResolver,
        deleteOneTable: actionResolvers.DeleteOneTableResolver,
        findFirstTable: actionResolvers.FindFirstTableResolver,
        findFirstTableOrThrow: actionResolvers.FindFirstTableOrThrowResolver,
        tables: actionResolvers.FindManyTableResolver,
        table: actionResolvers.FindUniqueTableResolver,
        getTable: actionResolvers.FindUniqueTableOrThrowResolver,
        groupByTable: actionResolvers.GroupByTableResolver,
        updateManyTable: actionResolvers.UpdateManyTableResolver,
        updateOneTable: actionResolvers.UpdateOneTableResolver,
        upsertOneTable: actionResolvers.UpsertOneTableResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    }
};
const crudResolversInfo = {
    Author: ["aggregateAuthor", "createManyAuthor", "createOneAuthor", "deleteManyAuthor", "deleteOneAuthor", "findFirstAuthor", "findFirstAuthorOrThrow", "authors", "author", "getAuthor", "groupByAuthor", "updateManyAuthor", "updateOneAuthor", "upsertOneAuthor"],
    Book: ["aggregateBook", "createManyBook", "createOneBook", "deleteManyBook", "deleteOneBook", "findFirstBook", "findFirstBookOrThrow", "books", "book", "getBook", "groupByBook", "updateManyBook", "updateOneBook", "upsertOneBook"],
    BookAuthor: ["aggregateBookAuthor", "createManyBookAuthor", "createOneBookAuthor", "deleteManyBookAuthor", "deleteOneBookAuthor", "findFirstBookAuthor", "findFirstBookAuthorOrThrow", "bookAuthors", "bookAuthor", "getBookAuthor", "groupByBookAuthor", "updateManyBookAuthor", "updateOneBookAuthor", "upsertOneBookAuthor"],
    Administrator: ["aggregateAdministrator", "createManyAdministrator", "createOneAdministrator", "deleteManyAdministrator", "deleteOneAdministrator", "findFirstAdministrator", "findFirstAdministratorOrThrow", "administrators", "administrator", "getAdministrator", "groupByAdministrator", "updateManyAdministrator", "updateOneAdministrator", "upsertOneAdministrator"],
    Field: ["aggregateField", "createManyField", "createOneField", "deleteManyField", "deleteOneField", "findFirstField", "findFirstFieldOrThrow", "fields", "field", "getField", "groupByField", "updateManyField", "updateOneField", "upsertOneField"],
    FieldAnnotation: ["aggregateFieldAnnotation", "createManyFieldAnnotation", "createOneFieldAnnotation", "deleteManyFieldAnnotation", "deleteOneFieldAnnotation", "findFirstFieldAnnotation", "findFirstFieldAnnotationOrThrow", "fieldAnnotations", "fieldAnnotation", "getFieldAnnotation", "groupByFieldAnnotation", "updateManyFieldAnnotation", "updateOneFieldAnnotation", "upsertOneFieldAnnotation"],
    RevokedRefreshToken: ["aggregateRevokedRefreshToken", "createManyRevokedRefreshToken", "createOneRevokedRefreshToken", "deleteManyRevokedRefreshToken", "deleteOneRevokedRefreshToken", "findFirstRevokedRefreshToken", "findFirstRevokedRefreshTokenOrThrow", "revokedRefreshTokens", "revokedRefreshToken", "getRevokedRefreshToken", "groupByRevokedRefreshToken", "updateManyRevokedRefreshToken", "updateOneRevokedRefreshToken", "upsertOneRevokedRefreshToken"],
    Schema: ["aggregateSchema", "createManySchema", "createOneSchema", "deleteManySchema", "deleteOneSchema", "findFirstSchema", "findFirstSchemaOrThrow", "schemata", "schema", "getSchema", "groupBySchema", "updateManySchema", "updateOneSchema", "upsertOneSchema"],
    Table: ["aggregateTable", "createManyTable", "createOneTable", "deleteManyTable", "deleteOneTable", "findFirstTable", "findFirstTableOrThrow", "tables", "table", "getTable", "groupByTable", "updateManyTable", "updateOneTable", "upsertOneTable"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
    AggregateAuthorArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAuthorArgs: ["data", "skipDuplicates"],
    CreateOneAuthorArgs: ["data"],
    DeleteManyAuthorArgs: ["where"],
    DeleteOneAuthorArgs: ["where"],
    FindFirstAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAuthorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAuthorArgs: ["where"],
    FindUniqueAuthorOrThrowArgs: ["where"],
    GroupByAuthorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAuthorArgs: ["data", "where"],
    UpdateOneAuthorArgs: ["data", "where"],
    UpsertOneAuthorArgs: ["where", "create", "update"],
    AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBookArgs: ["data", "skipDuplicates"],
    CreateOneBookArgs: ["data"],
    DeleteManyBookArgs: ["where"],
    DeleteOneBookArgs: ["where"],
    FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBookOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBookArgs: ["where"],
    FindUniqueBookOrThrowArgs: ["where"],
    GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBookArgs: ["data", "where"],
    UpdateOneBookArgs: ["data", "where"],
    UpsertOneBookArgs: ["where", "create", "update"],
    AggregateBookAuthorArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBookAuthorArgs: ["data", "skipDuplicates"],
    CreateOneBookAuthorArgs: ["data"],
    DeleteManyBookAuthorArgs: ["where"],
    DeleteOneBookAuthorArgs: ["where"],
    FindFirstBookAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBookAuthorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBookAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBookAuthorArgs: ["where"],
    FindUniqueBookAuthorOrThrowArgs: ["where"],
    GroupByBookAuthorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBookAuthorArgs: ["data", "where"],
    UpdateOneBookAuthorArgs: ["data", "where"],
    UpsertOneBookAuthorArgs: ["where", "create", "update"],
    AggregateAdministratorArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAdministratorArgs: ["data", "skipDuplicates"],
    CreateOneAdministratorArgs: ["data"],
    DeleteManyAdministratorArgs: ["where"],
    DeleteOneAdministratorArgs: ["where"],
    FindFirstAdministratorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAdministratorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAdministratorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAdministratorArgs: ["where"],
    FindUniqueAdministratorOrThrowArgs: ["where"],
    GroupByAdministratorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAdministratorArgs: ["data", "where"],
    UpdateOneAdministratorArgs: ["data", "where"],
    UpsertOneAdministratorArgs: ["where", "create", "update"],
    AggregateFieldArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyFieldArgs: ["data", "skipDuplicates"],
    CreateOneFieldArgs: ["data"],
    DeleteManyFieldArgs: ["where"],
    DeleteOneFieldArgs: ["where"],
    FindFirstFieldArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstFieldOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyFieldArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueFieldArgs: ["where"],
    FindUniqueFieldOrThrowArgs: ["where"],
    GroupByFieldArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyFieldArgs: ["data", "where"],
    UpdateOneFieldArgs: ["data", "where"],
    UpsertOneFieldArgs: ["where", "create", "update"],
    AggregateFieldAnnotationArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyFieldAnnotationArgs: ["data", "skipDuplicates"],
    CreateOneFieldAnnotationArgs: ["data"],
    DeleteManyFieldAnnotationArgs: ["where"],
    DeleteOneFieldAnnotationArgs: ["where"],
    FindFirstFieldAnnotationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstFieldAnnotationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyFieldAnnotationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueFieldAnnotationArgs: ["where"],
    FindUniqueFieldAnnotationOrThrowArgs: ["where"],
    GroupByFieldAnnotationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyFieldAnnotationArgs: ["data", "where"],
    UpdateOneFieldAnnotationArgs: ["data", "where"],
    UpsertOneFieldAnnotationArgs: ["where", "create", "update"],
    AggregateRevokedRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyRevokedRefreshTokenArgs: ["data", "skipDuplicates"],
    CreateOneRevokedRefreshTokenArgs: ["data"],
    DeleteManyRevokedRefreshTokenArgs: ["where"],
    DeleteOneRevokedRefreshTokenArgs: ["where"],
    FindFirstRevokedRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstRevokedRefreshTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRevokedRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRevokedRefreshTokenArgs: ["where"],
    FindUniqueRevokedRefreshTokenOrThrowArgs: ["where"],
    GroupByRevokedRefreshTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRevokedRefreshTokenArgs: ["data", "where"],
    UpdateOneRevokedRefreshTokenArgs: ["data", "where"],
    UpsertOneRevokedRefreshTokenArgs: ["where", "create", "update"],
    AggregateSchemaArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManySchemaArgs: ["data", "skipDuplicates"],
    CreateOneSchemaArgs: ["data"],
    DeleteManySchemaArgs: ["where"],
    DeleteOneSchemaArgs: ["where"],
    FindFirstSchemaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstSchemaOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySchemaArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueSchemaArgs: ["where"],
    FindUniqueSchemaOrThrowArgs: ["where"],
    GroupBySchemaArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManySchemaArgs: ["data", "where"],
    UpdateOneSchemaArgs: ["data", "where"],
    UpsertOneSchemaArgs: ["where", "create", "update"],
    AggregateTableArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTableArgs: ["data", "skipDuplicates"],
    CreateOneTableArgs: ["data"],
    DeleteManyTableArgs: ["where"],
    DeleteOneTableArgs: ["where"],
    FindFirstTableArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTableOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTableArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTableArgs: ["where"],
    FindUniqueTableOrThrowArgs: ["where"],
    GroupByTableArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTableArgs: ["data", "where"],
    UpdateOneTableArgs: ["data", "where"],
    UpsertOneTableArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Author: relationResolvers.AuthorRelationsResolver,
    Book: relationResolvers.BookRelationsResolver,
    BookAuthor: relationResolvers.BookAuthorRelationsResolver,
    Field: relationResolvers.FieldRelationsResolver,
    FieldAnnotation: relationResolvers.FieldAnnotationRelationsResolver,
    Schema: relationResolvers.SchemaRelationsResolver,
    Table: relationResolvers.TableRelationsResolver
};
const relationResolversInfo = {
    Author: ["bookAuthors"],
    Book: ["bookAuthors"],
    BookAuthor: ["author", "book"],
    Field: ["table", "fieldAnnotations"],
    FieldAnnotation: ["field", "table"],
    Schema: ["tables"],
    Table: ["fields", "fieldAnnotations", "schema"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Author: ["id", "name", "createdAt", "updatedAt"],
    Book: ["id", "name", "createdAt", "updatedAt"],
    BookAuthor: ["bookId", "authorId"],
    Administrator: ["id", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    Field: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldAnnotation: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    RevokedRefreshToken: ["id", "value", "actualExpiration"],
    Schema: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    Table: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt"],
    User: ["id", "email", "banned", "username", "verified", "createdAt", "updatedAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateAuthor: ["_count", "_min", "_max"],
    AuthorGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateBook: ["_count", "_min", "_max"],
    BookGroupBy: ["id", "name", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateBookAuthor: ["_count", "_min", "_max"],
    BookAuthorGroupBy: ["bookId", "authorId", "_count", "_min", "_max"],
    AggregateAdministrator: ["_count", "_min", "_max"],
    AdministratorGroupBy: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateField: ["_count", "_min", "_max"],
    FieldGroupBy: ["id", "tableId", "name", "type", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateFieldAnnotation: ["_count", "_min", "_max"],
    FieldAnnotationGroupBy: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateRevokedRefreshToken: ["_count", "_min", "_max"],
    RevokedRefreshTokenGroupBy: ["id", "value", "actualExpiration", "_count", "_min", "_max"],
    AggregateSchema: ["_count", "_min", "_max"],
    SchemaGroupBy: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateTable: ["_count", "_min", "_max"],
    TableGroupBy: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AuthorCount: ["bookAuthors"],
    AuthorCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
    AuthorMinAggregate: ["id", "name", "createdAt", "updatedAt"],
    AuthorMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
    BookCount: ["bookAuthors"],
    BookCountAggregate: ["id", "name", "createdAt", "updatedAt", "_all"],
    BookMinAggregate: ["id", "name", "createdAt", "updatedAt"],
    BookMaxAggregate: ["id", "name", "createdAt", "updatedAt"],
    BookAuthorCountAggregate: ["bookId", "authorId", "_all"],
    BookAuthorMinAggregate: ["bookId", "authorId"],
    BookAuthorMaxAggregate: ["bookId", "authorId"],
    AdministratorCountAggregate: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt", "_all"],
    AdministratorMinAggregate: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorMaxAggregate: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    FieldCount: ["fieldAnnotations"],
    FieldCountAggregate: ["id", "tableId", "name", "type", "createdAt", "updatedAt", "_all"],
    FieldMinAggregate: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldMaxAggregate: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldAnnotationCountAggregate: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt", "_all"],
    FieldAnnotationMinAggregate: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldAnnotationMaxAggregate: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    RevokedRefreshTokenCountAggregate: ["id", "value", "actualExpiration", "_all"],
    RevokedRefreshTokenMinAggregate: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenMaxAggregate: ["id", "value", "actualExpiration"],
    SchemaCount: ["tables"],
    SchemaCountAggregate: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "_all"],
    SchemaMinAggregate: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    SchemaMaxAggregate: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    TableCount: ["fields", "fieldAnnotations"],
    TableCountAggregate: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt", "_all"],
    TableMinAggregate: ["id", "schemaId", "name", "modelName", "createdAt", "updatedAt"],
    TableMaxAggregate: ["id", "schemaId", "name", "modelName", "createdAt", "updatedAt"],
    UserCountAggregate: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    AuthorWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "bookAuthors"],
    AuthorOrderByWithRelationInput: ["id", "name", "createdAt", "updatedAt", "bookAuthors"],
    AuthorWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "updatedAt", "bookAuthors"],
    AuthorOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "_count", "_max", "_min"],
    AuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
    BookWhereInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt", "bookAuthors"],
    BookOrderByWithRelationInput: ["id", "name", "createdAt", "updatedAt", "bookAuthors"],
    BookWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "updatedAt", "bookAuthors"],
    BookOrderByWithAggregationInput: ["id", "name", "createdAt", "updatedAt", "_count", "_max", "_min"],
    BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "createdAt", "updatedAt"],
    BookAuthorWhereInput: ["AND", "OR", "NOT", "bookId", "authorId", "author", "book"],
    BookAuthorOrderByWithRelationInput: ["bookId", "authorId", "author", "book"],
    BookAuthorWhereUniqueInput: ["bookId_authorId", "AND", "OR", "NOT", "bookId", "authorId", "author", "book"],
    BookAuthorOrderByWithAggregationInput: ["bookId", "authorId", "_count", "_max", "_min"],
    BookAuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "bookId", "authorId"],
    AdministratorWhereInput: ["AND", "OR", "NOT", "id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorOrderByWithRelationInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorWhereUniqueInput: ["id", "email", "username", "AND", "OR", "NOT", "hash", "salt", "magicLinkToken", "banned", "verified", "createdAt", "updatedAt"],
    AdministratorOrderByWithAggregationInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt", "_count", "_max", "_min"],
    AdministratorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    FieldWhereInput: ["AND", "OR", "NOT", "id", "tableId", "name", "type", "createdAt", "updatedAt", "table", "fieldAnnotations"],
    FieldOrderByWithRelationInput: ["id", "tableId", "name", "type", "createdAt", "updatedAt", "table", "fieldAnnotations"],
    FieldWhereUniqueInput: ["id", "AND", "OR", "NOT", "tableId", "name", "type", "createdAt", "updatedAt", "table", "fieldAnnotations"],
    FieldOrderByWithAggregationInput: ["id", "tableId", "name", "type", "createdAt", "updatedAt", "_count", "_max", "_min"],
    FieldScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldAnnotationWhereInput: ["AND", "OR", "NOT", "id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt", "field", "table"],
    FieldAnnotationOrderByWithRelationInput: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt", "field", "table"],
    FieldAnnotationWhereUniqueInput: ["id", "AND", "OR", "NOT", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt", "field", "table"],
    FieldAnnotationOrderByWithAggregationInput: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt", "_count", "_max", "_min"],
    FieldAnnotationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    RevokedRefreshTokenWhereInput: ["AND", "OR", "NOT", "id", "value", "actualExpiration"],
    RevokedRefreshTokenOrderByWithRelationInput: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenWhereUniqueInput: ["id", "value", "AND", "OR", "NOT", "actualExpiration"],
    RevokedRefreshTokenOrderByWithAggregationInput: ["id", "value", "actualExpiration", "_count", "_max", "_min"],
    RevokedRefreshTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value", "actualExpiration"],
    SchemaWhereInput: ["AND", "OR", "NOT", "id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "tables"],
    SchemaOrderByWithRelationInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "tables"],
    SchemaWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "tables"],
    SchemaOrderByWithAggregationInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "_count", "_max", "_min"],
    SchemaScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    TableWhereInput: ["AND", "OR", "NOT", "id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations", "schema"],
    TableOrderByWithRelationInput: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations", "schema"],
    TableWhereUniqueInput: ["id", "AND", "OR", "NOT", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations", "schema"],
    TableOrderByWithAggregationInput: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt", "_count", "_max", "_min"],
    TableScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserOrderByWithRelationInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserWhereUniqueInput: ["id", "email", "username", "AND", "OR", "NOT", "hash", "salt", "magicLinkToken", "banned", "verified", "createdAt", "updatedAt"],
    UserOrderByWithAggregationInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AuthorCreateInput: ["id", "name", "createdAt", "updatedAt", "bookAuthors"],
    AuthorUpdateInput: ["id", "name", "createdAt", "updatedAt", "bookAuthors"],
    AuthorCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
    AuthorUpdateManyMutationInput: ["id", "name", "createdAt", "updatedAt"],
    BookCreateInput: ["id", "name", "createdAt", "updatedAt", "bookAuthors"],
    BookUpdateInput: ["id", "name", "createdAt", "updatedAt", "bookAuthors"],
    BookCreateManyInput: ["id", "name", "createdAt", "updatedAt"],
    BookUpdateManyMutationInput: ["id", "name", "createdAt", "updatedAt"],
    BookAuthorCreateInput: ["author", "book"],
    BookAuthorUpdateInput: ["author", "book"],
    BookAuthorCreateManyInput: ["bookId", "authorId"],
    BookAuthorUpdateManyMutationInput: [],
    AdministratorCreateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorUpdateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorCreateManyInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorUpdateManyMutationInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    FieldCreateInput: ["id", "name", "type", "createdAt", "updatedAt", "table", "fieldAnnotations"],
    FieldUpdateInput: ["id", "name", "type", "createdAt", "updatedAt", "table", "fieldAnnotations"],
    FieldCreateManyInput: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldUpdateManyMutationInput: ["id", "name", "type", "createdAt", "updatedAt"],
    FieldAnnotationCreateInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt", "field", "table"],
    FieldAnnotationUpdateInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt", "field", "table"],
    FieldAnnotationCreateManyInput: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldAnnotationUpdateManyMutationInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt"],
    RevokedRefreshTokenCreateInput: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenUpdateInput: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenCreateManyInput: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenUpdateManyMutationInput: ["id", "value", "actualExpiration"],
    SchemaCreateInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "tables"],
    SchemaUpdateInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt", "tables"],
    SchemaCreateManyInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    SchemaUpdateManyMutationInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    TableCreateInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations", "schema"],
    TableUpdateInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations", "schema"],
    TableCreateManyInput: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt"],
    TableUpdateManyMutationInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserUpdateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserCreateManyInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UuidFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BookAuthorListRelationFilter: ["every", "some", "none"],
    BookAuthorOrderByRelationAggregateInput: ["_count"],
    AuthorCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    AuthorMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    AuthorMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    UuidWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BookCountOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    BookMaxOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    BookMinOrderByAggregateInput: ["id", "name", "createdAt", "updatedAt"],
    AuthorRelationFilter: ["is", "isNot"],
    BookRelationFilter: ["is", "isNot"],
    BookAuthorBookIdAuthorIdCompoundUniqueInput: ["bookId", "authorId"],
    BookAuthorCountOrderByAggregateInput: ["bookId", "authorId"],
    BookAuthorMaxOrderByAggregateInput: ["bookId", "authorId"],
    BookAuthorMinOrderByAggregateInput: ["bookId", "authorId"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolNullableFilter: ["equals", "not"],
    SortOrderInput: ["sort", "nulls"],
    AdministratorCountOrderByAggregateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorMaxOrderByAggregateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    AdministratorMinOrderByAggregateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    UuidNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not"],
    TableNullableRelationFilter: ["is", "isNot"],
    FieldAnnotationListRelationFilter: ["every", "some", "none"],
    FieldAnnotationOrderByRelationAggregateInput: ["_count"],
    FieldCountOrderByAggregateInput: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldMaxOrderByAggregateInput: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldMinOrderByAggregateInput: ["id", "tableId", "name", "type", "createdAt", "updatedAt"],
    UuidNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "mode", "not", "_count", "_min", "_max"],
    FieldNullableRelationFilter: ["is", "isNot"],
    FieldAnnotationCountOrderByAggregateInput: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldAnnotationMaxOrderByAggregateInput: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldAnnotationMinOrderByAggregateInput: ["id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    RevokedRefreshTokenCountOrderByAggregateInput: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenMaxOrderByAggregateInput: ["id", "value", "actualExpiration"],
    RevokedRefreshTokenMinOrderByAggregateInput: ["id", "value", "actualExpiration"],
    TableListRelationFilter: ["every", "some", "none"],
    TableOrderByRelationAggregateInput: ["_count"],
    SchemaCountOrderByAggregateInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    SchemaMaxOrderByAggregateInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    SchemaMinOrderByAggregateInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    JsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
    FieldListRelationFilter: ["every", "some", "none"],
    SchemaNullableRelationFilter: ["is", "isNot"],
    FieldOrderByRelationAggregateInput: ["_count"],
    TableCountOrderByAggregateInput: ["id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt"],
    TableMaxOrderByAggregateInput: ["id", "schemaId", "name", "modelName", "createdAt", "updatedAt"],
    TableMinOrderByAggregateInput: ["id", "schemaId", "name", "modelName", "createdAt", "updatedAt"],
    JsonNullableWithAggregatesFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    UserCountOrderByAggregateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "hash", "salt", "magicLinkToken", "email", "banned", "username", "verified", "createdAt", "updatedAt"],
    BookAuthorCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    BookAuthorUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BookAuthorCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
    BookAuthorUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AuthorCreateNestedOneWithoutBookAuthorsInput: ["create", "connectOrCreate", "connect"],
    BookCreateNestedOneWithoutBookAuthorsInput: ["create", "connectOrCreate", "connect"],
    AuthorUpdateOneRequiredWithoutBookAuthorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    BookUpdateOneRequiredWithoutBookAuthorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    TableCreateNestedOneWithoutFieldsInput: ["create", "connectOrCreate", "connect"],
    FieldAnnotationCreateNestedManyWithoutFieldInput: ["create", "connectOrCreate", "createMany", "connect"],
    TableUpdateOneWithoutFieldsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    FieldAnnotationUpdateManyWithoutFieldNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    FieldCreateNestedOneWithoutFieldAnnotationsInput: ["create", "connectOrCreate", "connect"],
    TableCreateNestedOneWithoutFieldAnnotationsInput: ["create", "connectOrCreate", "connect"],
    FieldUpdateOneWithoutFieldAnnotationsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TableUpdateOneWithoutFieldAnnotationsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TableCreateNestedManyWithoutSchemaInput: ["create", "connectOrCreate", "createMany", "connect"],
    TableUpdateManyWithoutSchemaNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    FieldCreateNestedManyWithoutTableInput: ["create", "connectOrCreate", "createMany", "connect"],
    FieldAnnotationCreateNestedManyWithoutTableInput: ["create", "connectOrCreate", "createMany", "connect"],
    SchemaCreateNestedOneWithoutTablesInput: ["create", "connectOrCreate", "connect"],
    FieldUpdateManyWithoutTableNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    FieldAnnotationUpdateManyWithoutTableNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SchemaUpdateOneWithoutTablesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NestedUuidFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedUuidWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedUuidNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedUuidNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedJsonNullableFilter: ["equals", "path", "string_contains", "string_starts_with", "string_ends_with", "array_contains", "array_starts_with", "array_ends_with", "lt", "lte", "gt", "gte", "not"],
    BookAuthorCreateWithoutAuthorInput: ["book"],
    BookAuthorCreateOrConnectWithoutAuthorInput: ["where", "create"],
    BookAuthorCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    BookAuthorUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    BookAuthorUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    BookAuthorUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    BookAuthorScalarWhereInput: ["AND", "OR", "NOT", "bookId", "authorId"],
    BookAuthorCreateWithoutBookInput: ["author"],
    BookAuthorCreateOrConnectWithoutBookInput: ["where", "create"],
    BookAuthorCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
    BookAuthorUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
    BookAuthorUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
    BookAuthorUpdateManyWithWhereWithoutBookInput: ["where", "data"],
    AuthorCreateWithoutBookAuthorsInput: ["id", "name", "createdAt", "updatedAt"],
    AuthorCreateOrConnectWithoutBookAuthorsInput: ["where", "create"],
    BookCreateWithoutBookAuthorsInput: ["id", "name", "createdAt", "updatedAt"],
    BookCreateOrConnectWithoutBookAuthorsInput: ["where", "create"],
    AuthorUpsertWithoutBookAuthorsInput: ["update", "create", "where"],
    AuthorUpdateToOneWithWhereWithoutBookAuthorsInput: ["where", "data"],
    AuthorUpdateWithoutBookAuthorsInput: ["id", "name", "createdAt", "updatedAt"],
    BookUpsertWithoutBookAuthorsInput: ["update", "create", "where"],
    BookUpdateToOneWithWhereWithoutBookAuthorsInput: ["where", "data"],
    BookUpdateWithoutBookAuthorsInput: ["id", "name", "createdAt", "updatedAt"],
    TableCreateWithoutFieldsInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fieldAnnotations", "schema"],
    TableCreateOrConnectWithoutFieldsInput: ["where", "create"],
    FieldAnnotationCreateWithoutFieldInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt", "table"],
    FieldAnnotationCreateOrConnectWithoutFieldInput: ["where", "create"],
    FieldAnnotationCreateManyFieldInputEnvelope: ["data", "skipDuplicates"],
    TableUpsertWithoutFieldsInput: ["update", "create", "where"],
    TableUpdateToOneWithWhereWithoutFieldsInput: ["where", "data"],
    TableUpdateWithoutFieldsInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fieldAnnotations", "schema"],
    FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput: ["where", "update", "create"],
    FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput: ["where", "data"],
    FieldAnnotationUpdateManyWithWhereWithoutFieldInput: ["where", "data"],
    FieldAnnotationScalarWhereInput: ["AND", "OR", "NOT", "id", "tableId", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldCreateWithoutFieldAnnotationsInput: ["id", "name", "type", "createdAt", "updatedAt", "table"],
    FieldCreateOrConnectWithoutFieldAnnotationsInput: ["where", "create"],
    TableCreateWithoutFieldAnnotationsInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "schema"],
    TableCreateOrConnectWithoutFieldAnnotationsInput: ["where", "create"],
    FieldUpsertWithoutFieldAnnotationsInput: ["update", "create", "where"],
    FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput: ["where", "data"],
    FieldUpdateWithoutFieldAnnotationsInput: ["id", "name", "type", "createdAt", "updatedAt", "table"],
    TableUpsertWithoutFieldAnnotationsInput: ["update", "create", "where"],
    TableUpdateToOneWithWhereWithoutFieldAnnotationsInput: ["where", "data"],
    TableUpdateWithoutFieldAnnotationsInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "schema"],
    TableCreateWithoutSchemaInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations"],
    TableCreateOrConnectWithoutSchemaInput: ["where", "create"],
    TableCreateManySchemaInputEnvelope: ["data", "skipDuplicates"],
    TableUpsertWithWhereUniqueWithoutSchemaInput: ["where", "update", "create"],
    TableUpdateWithWhereUniqueWithoutSchemaInput: ["where", "data"],
    TableUpdateManyWithWhereWithoutSchemaInput: ["where", "data"],
    TableScalarWhereInput: ["AND", "OR", "NOT", "id", "schemaId", "name", "modelName", "relations", "createdAt", "updatedAt"],
    FieldCreateWithoutTableInput: ["id", "name", "type", "createdAt", "updatedAt", "fieldAnnotations"],
    FieldCreateOrConnectWithoutTableInput: ["where", "create"],
    FieldCreateManyTableInputEnvelope: ["data", "skipDuplicates"],
    FieldAnnotationCreateWithoutTableInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt", "field"],
    FieldAnnotationCreateOrConnectWithoutTableInput: ["where", "create"],
    FieldAnnotationCreateManyTableInputEnvelope: ["data", "skipDuplicates"],
    SchemaCreateWithoutTablesInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    SchemaCreateOrConnectWithoutTablesInput: ["where", "create"],
    FieldUpsertWithWhereUniqueWithoutTableInput: ["where", "update", "create"],
    FieldUpdateWithWhereUniqueWithoutTableInput: ["where", "data"],
    FieldUpdateManyWithWhereWithoutTableInput: ["where", "data"],
    FieldScalarWhereInput: ["AND", "OR", "NOT", "id", "tableId", "name", "type", "createdAt", "updatedAt"],
    FieldAnnotationUpsertWithWhereUniqueWithoutTableInput: ["where", "update", "create"],
    FieldAnnotationUpdateWithWhereUniqueWithoutTableInput: ["where", "data"],
    FieldAnnotationUpdateManyWithWhereWithoutTableInput: ["where", "data"],
    SchemaUpsertWithoutTablesInput: ["update", "create", "where"],
    SchemaUpdateToOneWithWhereWithoutTablesInput: ["where", "data"],
    SchemaUpdateWithoutTablesInput: ["id", "name", "tracked", "isNewestProductionVersion", "createdAt", "updatedAt"],
    BookAuthorCreateManyAuthorInput: ["bookId"],
    BookAuthorUpdateWithoutAuthorInput: ["book"],
    BookAuthorCreateManyBookInput: ["authorId"],
    BookAuthorUpdateWithoutBookInput: ["author"],
    FieldAnnotationCreateManyFieldInput: ["id", "tableId", "modelName", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldAnnotationUpdateWithoutFieldInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt", "table"],
    TableCreateManySchemaInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt"],
    TableUpdateWithoutSchemaInput: ["id", "name", "modelName", "relations", "createdAt", "updatedAt", "fields", "fieldAnnotations"],
    FieldCreateManyTableInput: ["id", "name", "type", "createdAt", "updatedAt"],
    FieldAnnotationCreateManyTableInput: ["id", "modelName", "fieldId", "fieldName", "annotation", "createdAt", "updatedAt"],
    FieldUpdateWithoutTableInput: ["id", "name", "type", "createdAt", "updatedAt", "fieldAnnotations"],
    FieldAnnotationUpdateWithoutTableInput: ["id", "modelName", "fieldName", "annotation", "createdAt", "updatedAt", "field"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;

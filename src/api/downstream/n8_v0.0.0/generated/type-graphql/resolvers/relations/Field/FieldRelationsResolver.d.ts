import type { GraphQLResolveInfo } from "graphql";
import { Field } from "../../../models/Field";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
import { Table } from "../../../models/Table";
import { FieldFieldAnnotationsArgs } from "./args/FieldFieldAnnotationsArgs";
import { FieldTableArgs } from "./args/FieldTableArgs";
export declare class FieldRelationsResolver {
    table(field: Field, ctx: any, info: GraphQLResolveInfo, args: FieldTableArgs): Promise<Table | null>;
    fieldAnnotations(field: Field, ctx: any, info: GraphQLResolveInfo, args: FieldFieldAnnotationsArgs): Promise<FieldAnnotation[]>;
}

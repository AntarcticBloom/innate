import type { GraphQLResolveInfo } from "graphql";
import { Field } from "../../../models/Field";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
import { Table } from "../../../models/Table";
import { FieldAnnotationFieldArgs } from "./args/FieldAnnotationFieldArgs";
import { FieldAnnotationTableArgs } from "./args/FieldAnnotationTableArgs";
export declare class FieldAnnotationRelationsResolver {
    field(fieldAnnotation: FieldAnnotation, ctx: any, info: GraphQLResolveInfo, args: FieldAnnotationFieldArgs): Promise<Field | null>;
    table(fieldAnnotation: FieldAnnotation, ctx: any, info: GraphQLResolveInfo, args: FieldAnnotationTableArgs): Promise<Table | null>;
}

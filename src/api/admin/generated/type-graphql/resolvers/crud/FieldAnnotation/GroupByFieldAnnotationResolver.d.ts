import type { GraphQLResolveInfo } from "graphql";
import { GroupByFieldAnnotationArgs } from "./args/GroupByFieldAnnotationArgs";
import { FieldAnnotationGroupBy } from "../../outputs/FieldAnnotationGroupBy";
export declare class GroupByFieldAnnotationResolver {
    groupByFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: GroupByFieldAnnotationArgs): Promise<FieldAnnotationGroupBy[]>;
}

import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyFieldAnnotationArgs } from "./args/UpdateManyFieldAnnotationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFieldAnnotationResolver {
    updateManyFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFieldAnnotationArgs): Promise<AffectedRowsOutput>;
}

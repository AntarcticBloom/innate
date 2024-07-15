import { SchemaOrderByWithRelationInput } from "../../../inputs/SchemaOrderByWithRelationInput";
import { SchemaWhereInput } from "../../../inputs/SchemaWhereInput";
import { SchemaWhereUniqueInput } from "../../../inputs/SchemaWhereUniqueInput";
export declare class FindManySchemaArgs {
    where?: SchemaWhereInput | undefined;
    orderBy?: SchemaOrderByWithRelationInput[] | undefined;
    cursor?: SchemaWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "tracked" | "isNewestProductionVersion" | "createdAt" | "updatedAt"> | undefined;
}

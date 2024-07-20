import { TableCreateNestedManyWithoutSchemaInput } from "../inputs/TableCreateNestedManyWithoutSchemaInput";
export declare class SchemaCreateInput {
    id?: string | undefined;
    name: string;
    tracked?: boolean | undefined;
    baselineVersionOfSchema?: string | undefined;
    isNewestProductionVersion?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    tables?: TableCreateNestedManyWithoutSchemaInput | undefined;
}

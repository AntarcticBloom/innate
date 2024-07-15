import { SchemaCreateWithoutTablesInput } from "../inputs/SchemaCreateWithoutTablesInput";
import { SchemaUpdateWithoutTablesInput } from "../inputs/SchemaUpdateWithoutTablesInput";
import { SchemaWhereInput } from "../inputs/SchemaWhereInput";
export declare class SchemaUpsertWithoutTablesInput {
    update: SchemaUpdateWithoutTablesInput;
    create: SchemaCreateWithoutTablesInput;
    where?: SchemaWhereInput | undefined;
}

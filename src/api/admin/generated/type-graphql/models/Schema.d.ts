import { Table } from "../models/Table";
import { SchemaCount } from "../resolvers/outputs/SchemaCount";
export declare class Schema {
    id: string;
    name: string;
    tracked?: boolean | null;
    isNewestProductionVersion?: boolean | null;
    createdAt: Date;
    updatedAt: Date;
    tables?: Table[];
    _count?: SchemaCount | null;
}

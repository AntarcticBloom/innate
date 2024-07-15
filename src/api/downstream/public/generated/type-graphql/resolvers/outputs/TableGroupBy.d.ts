import { Prisma } from "@prisma/client";
import { TableCountAggregate } from "../outputs/TableCountAggregate";
import { TableMaxAggregate } from "../outputs/TableMaxAggregate";
import { TableMinAggregate } from "../outputs/TableMinAggregate";
export declare class TableGroupBy {
    id: string;
    schemaId: string | null;
    name: string;
    modelName: string;
    relations: Prisma.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TableCountAggregate | null;
    _min: TableMinAggregate | null;
    _max: TableMaxAggregate | null;
}

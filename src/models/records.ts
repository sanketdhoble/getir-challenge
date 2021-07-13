import { BaseEntity } from "./base-entity";

export interface Record extends BaseEntity {
    key: string,
    counts: number[],
    value: string
}
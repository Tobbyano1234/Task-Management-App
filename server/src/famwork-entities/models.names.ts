import { Admin } from "./Admin"
import { General } from "./General"
import { Product } from "./Product"
import { Task } from "./Task"
import { User } from "./User"


export enum ModelNames {
    PRODUCT = "product",
    USER ="user",
    ADMIN ="admin",
    TASK ="task",
    GENERAL ="general"
}

export type ModelTypeMap = {
    [ModelNames.PRODUCT]: Product,
    [ModelNames.USER]: User,
    [ModelNames.ADMIN]: Admin,
    [ModelNames.TASK]: Task,
    [ModelNames.GENERAL]: General,
}
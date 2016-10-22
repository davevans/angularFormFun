import { IPortfolio } from "./portfolio";

export interface IAccount{
    accountNumber: string;
    portfolio: IPortfolio;
}
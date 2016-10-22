import { IPosition } from "./position";

export interface IPortfolio {
    portfolioCode: string;
    cashBalance: number,
    positions: IPosition[];
}
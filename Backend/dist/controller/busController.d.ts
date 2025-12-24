import { Request, Response } from "express";
declare const _default: {
    getBuses: (req: Request, res: Response) => Promise<void>;
    regBus: (req: Request, res: Response) => Promise<void>;
    findBusByNumber: (busNumber: string) => Promise<(import("mongoose").Document<unknown, {}, {
        busName: string;
        busNum: string;
        totalSeat: number;
        source: string;
        destination: string;
        fair: number;
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        busName: string;
        busNum: string;
        totalSeat: number;
        source: string;
        destination: string;
        fair: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
};
export default _default;
//# sourceMappingURL=busController.d.ts.map
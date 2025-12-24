import mongoose from "mongoose";
declare const Bus: mongoose.Model<{
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
}, mongoose.Document<unknown, {}, {
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        busName: string;
        busNum: string;
        totalSeat: number;
        source: string;
        destination: string;
        fair: number;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        busName: string;
        busNum: string;
        totalSeat: number;
        source: string;
        destination: string;
        fair: number;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    busName: string;
    busNum: string;
    totalSeat: number;
    source: string;
    destination: string;
    fair: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Bus;
//# sourceMappingURL=buses.d.ts.map
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

class Postion {
  lat: number;
  lng: number;
}

export enum AreaTypeEnum {
  MultiPolygon = 'MultiPolygon',
  Point = 'Point',
}

@Schema({ timestamps: true, autoCreate: true })
export class Partner {
  @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
  _id: string;
  @Prop({ required: true })
  tradingName: string;
  @Prop({ required: true })
  ownerName: string;
  @Prop({ required: true, index: true, unique: true })
  document: string;
  @Prop(
    raw({
      type: { type: String, enum: AreaTypeEnum },
      coordinates: { type: Array },
    }),
  )
  address: {
    type: string;
    coordinates: Postion[];
  };
}

export type PartnerDocument = Partner & Document;

export const PartnerSchema = SchemaFactory.createForClass(Partner);

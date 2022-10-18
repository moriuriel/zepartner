import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export type Position = number[]; // [number, number] | [number, number, number];

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
    coordinates: Position;
  };
  @Prop(
    raw({
      type: { type: String, enum: AreaTypeEnum },
      coordinates: { type: Array },
    }),
  )
  coverageArea: {
    type: string;
    coordinates: Position[][][];
  };
}

export type PartnerDocument = Partner & Document;

export const PartnerSchema = SchemaFactory.createForClass(Partner);

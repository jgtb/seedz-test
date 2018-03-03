import { Document, Schema, Model, model} from "mongoose";

export interface IProperty extends Document {
  description?: string;
}

export var PropertySchema: Schema = new Schema({
  description: String,
});

export const Property: Model<IProperty> = model<IProperty>('Property', PropertySchema, 'properties');

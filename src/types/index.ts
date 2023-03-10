export enum FieldType {
  STRING = 'string',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
}

export type TextField = {
  type: FieldType.STRING;
  minLength?: number;
  maxLength?: number;
};

export type IntegerField = {
  type: FieldType.INTEGER;
  minimum?: number;
  maximum?: number;
};

export type BooleanField = {
  type: FieldType.BOOLEAN;
};

export type EnumField = {
  enum: Array<string | number>;
};

export type ObjectField = {
  type: FieldType.OBJECT;
  properties: {
    [x in string]?: Field;
  };
  required?: Array<string>;
};

export type ArrayField = {
  type: FieldType.ARRAY;
  items: Field;
  minItems?: number;
  maxItems?: number;
};

export type Field = TextField | IntegerField | BooleanField | EnumField | ObjectField | ArrayField;

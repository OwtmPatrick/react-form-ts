export enum FieldType {
  STRING = 'string',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
}

export type Field = {
  type?: FieldType;
  enum?: Array<string | number>;
  properties?: {
    [x in string]?: Field;
  };
  items?: Field;
  title?: string;
  name?: string;
};

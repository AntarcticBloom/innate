export enum FieldTypes {
  Int = 'Int',
  Json = 'Json',
  Bytes = 'Bytes',
  Float = 'Float',
  String = 'String',
  Boolean = 'Boolean',
  DateTime = 'DateTime',

  List = 'List',
  Enum = 'Enum',
}

export type SharedFieldProps = {
  /** Field name; TODO: not sure whether this is the PostgreSQL name of the field, and whether Prisma @@map()'ed names take effect here */
  name: string
  /** The field type */
  type: FieldTypes
}

export type ScalarField = {
  isEnum: false
  isList: false
}

export type EnumOption<ValueType extends string | number> = {
  /** An optional alternate name for the option to be displayed in the UI, if different than in the database */
  uiName?: string
  /** One of many enumerated values in the enum */
  value: ValueType
  /** An optional explanation for the utility of this particular enumerated value in the context of the parent enum */
  description?: string
}

/** Object type enumerating whether the field is an enum (and not a list); and its corresponding options (number type)  */
export type NumericEnumField = {
  isList: false
  isEnum: true
  options: {
    [key: number]: EnumOption<number>
  }
}

/** Object type enumerating whether the field is an enum (and not a list); and its corresponding options (string type)  */
export type StringEnumField = {
  isList: false
  isEnum: true
  options: {
    [key: string]: EnumOption<string>
  }
}

export type EnumField = NumericEnumField | StringEnumField

/** Object type enumerating whether the field is a list (and not an enum); `SharedFieldProps['type']` signifies the plural type contained in the list */
export type ListField = {
  isList: true
  isEnum: false
}

export type AssociationField = {
  isList: true
  isEnum: false
}

export type Field = SharedFieldProps & (EnumField | ListField | ScalarField)

export type Model = {
  /** The name of the model as accessible from PostgreSQL */
  name: string
  /** The name of the model to display in the UI */
  uiName: string
  /** The fields of the model */
  fields: {
    [key: string]: Field
  }
}

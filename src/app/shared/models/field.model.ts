export type Field = {
  type?: string;
  ctrlType: string;
  colSize: string;
  label: string;
  placeholder?: string;
  formControlName: string;
  value: string;
  values?: [];
  options?: { label: string; value: number }[];
  row?: number;
  colors?: string;
  textBefore?: string;
  textAfter?: string;
};

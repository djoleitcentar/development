export type Field = {
  type?: string;
  ctrlType: string;
  colSize: string;
  nzSpan?: number;
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

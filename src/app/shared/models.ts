export type User = {
    name: string;
    title: string;
    email: string;
    role: string;
    edit: boolean;
}

export type Key = {
    title: string;
    key: string;
}

export type Field = {
    type: string;
    colSize: string;
    label: string;
    placeholder?: string;
    formControlName: string;
    value: string;
    options?: string[];
}
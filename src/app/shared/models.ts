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
    label: string;
    placeholder: string;
    formControlName: string;
    value: string;
}
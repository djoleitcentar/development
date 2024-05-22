export const usersHeaderFilter = [
  {
    type: 'text',
    ctrlType: 'input',
    colSize: 'col-span-6',
    label: 'Name',
    placeholder: '',
    formControlName: 'name',
    value: '',
  },
  {
    ctrlType: 'dropdown',
    colSize: 'col-span-6',
    label: 'Role',
    placeholder: '',
    formControlName: 'role_id',
    value: '',
    options: [
      { label: 'Administrator', value: 2 },
      { label: 'Developer', value: 3 },
    ],
  },
];

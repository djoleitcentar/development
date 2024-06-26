export const updateUserForm = [
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
    type: 'text',
    ctrlType: 'input',
    colSize: 'col-span-6',
    label: 'Email',
    placeholder: '',
    formControlName: 'email',
    value: '',
  },
  {
    type: 'text',
    ctrlType: 'dropdown',
    colSize: 'col-span-12',
    label: 'Role',
    placeholder: '',
    formControlName: 'role_id',
    value: '',
    options: [
      { label: 'Administrator', value: 2 },
      { label: 'Developer', value: 3 },
    ],
  },
  {
    type: 'password',
    ctrlType: 'input',
    colSize: 'col-span-6',
    label: 'Password',
    placeholder: '',
    formControlName: 'password',
    value: '',
  },
  {
    type: 'password',
    ctrlType: 'input',
    colSize: 'col-span-6',
    label: 'Password confirmation',
    placeholder: '',
    formControlName: 'password_confirmation',
    value: '',
  },
];

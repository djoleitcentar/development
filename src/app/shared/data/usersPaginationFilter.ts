export const usersPaginationFilter = [
  {
    ctrlType: 'dropdown',
    colSize: 'col-span-4',
    label: '',
    placeholder: '',
    formControlName: 'per_page',
    value: 5,
    options: [
      { label: '5 / page', value: 5 },
      { label: '10 / page', value: 10 },
      { label: '20 / page', value: 20 },
      { label: '50 / page', value: 50 },
      { label: '100 / page', value: 100 },
    ],
  },
  {
    type: 'text',
    ctrlType: 'input',
    colSize: 'col-span-6',
    label: '',
    placeholder: '',
    formControlName: 'page',
    value: '',
    textBefore: 'Go to',
    textAfter: 'Page',
  },
];

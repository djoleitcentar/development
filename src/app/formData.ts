
export const formFieldsData = [
    {
        type: "input",
        colSize: "col-span-2",
        label: "Name",
        placeholder: "John...",
        formControlName: "name",
        value: ""
    },
    {
        type: "input",
        colSize: "col-span-9",
        label: "Email",
        placeholder: "john@mail.com",
        formControlName: "email",
        value: ""
    },
    {
        type: "input",
        colSize: "col-span-3",
        label: "Phone",
        placeholder: "061 321 573",
        formControlName: "phone",
        value: ""
    },
    {
        type: "dropdown",
        colSize: "col-span-9",
        label: "Brand",
        placeholder: "Choose brand",
        formControlName: "brand",
        value: "Choose brand",
        options: [
            "Choose brand",
            "Apple",
            "Amazon",
            "Microsoft",
            "Google",
            "Samsung",
            "Nike",
            "Coca-Cola",
            "Disney",
            "McDonald's",
            "Tesla",
            "Louis Vuitton",
            "Toyota",
            "Adidas",
            "Starbucks",
            "Netflix",
            "LEGO",
            "Gucci",
            "IKEA",
            "HP",
            "Sony"
        ]
    },
    {
        type: "textarea",
        colSize: "col-span-3",
        label: "Message",
        placeholder: "Message...",
        formControlName: "message",
        value: ""
    }
]
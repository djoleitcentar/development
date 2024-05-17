export const formFieldsData = [
    {
        type: "text",
        ctrlType: "input",
        colSize: "col-span-12",
        label: "Name",
        placeholder: "John...",
        formControlName: "name",
        value: ""
    },
    {
        type: "email",
        ctrlType: "input",
        colSize: "col-span-12",
        label: "Email",
        placeholder: "john@mail.com",
        formControlName: "email",
        value: ""
    },
    {
        type: "text",
        ctrlType: "input",
        colSize: "col-span-12",
        label: "Phone",
        placeholder: "061 321 573",
        formControlName: "phone",
        value: ""
    },
    {
        ctrlType: "dropdown",
        colSize: "col-span-12",
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
        ctrlType: "textarea",
        colSize: "col-span-12",
        label: "Message",
        placeholder: "Message...",
        formControlName: "message",
        value: ""
    }
]
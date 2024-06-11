import { reactive } from 'vue';

const store = reactive({ 
    instructors: [
         {
            name: "Mike Hart",
            role: "Principle Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            locations: [
                "San Diego",
                "Los Angeles",
                "Fresno",
                "San Francisco"
            ]
         },
         {
            name: "John Smith",
            role: "Course Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            locations: [
                "New York",
                "New Jersey",
                "Washington D.C.",
                "Virginia"
            ]
         },
         {
            name: "Angela Hart",
            picture: {
                home: "",
                about: "",
             },
            role: "Driving Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            locations: [
                "New York",
                "South Carolina",
                "Washington D.C.",
                "Florida"
            ]
         }
    ],
    testimonials: [
        {
            name: "Sophia Jones",
            picture: "testimonial-sophia.png"
        },
        {
            name: "Harold Green",
            picture: "testimonial-harold.webp"
        },
        {
            name: "Grant Harvey",
            picture: "testimonial-grant.webp"
        },
        {
            name: "Kate Lewis",
            picture: "testimonial-kate.webp"
        },
        {
            name: "Kelly Johnson",
            picture: "testimonial-kelly.webp"
        }
    ]
});

export { store }
const configurationJson = {
    flow: {
        questions:[
            {
                title : {
                    Español : "¿Recuerdas tu matrícula? 🚗",
                    English : "¿Do you remember car license plate? 🚗"
                },
                numero: 1,
                variableName: "license-plate",
                typology : "number",
                helper :{
                    Español : "Esto es una ayuda",
                    English : "This is a helper"
                },
                label : {
                    Español : "Matrícula",
                    English : "License plate"
                },
            },
            {
                title : {
                    Español : "¿Con qué edad te sacaste el carnet de conducir?",
                    English : "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                },                
                numero: 2,
                variableName: "second-variable",
                typology : "number",
                helper :{
                    Español : "Si el carnet ha sido convalidado en España, introduzca la fecha de ese trámite. Si ha validado su carnet y la DGT reconoce su antiguedad, entonces la fecha en que sacó su primera licencia de conducir coches",
                    English : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                },
                label : {
                    Español : "Pregunta",
                    English : "Question"
                }
            },
            {
                title : {
                    Español : "Este es tu presupuesto 💙",
                    English : "This is your price 💙"
                }, 
                numero: 3,
                custom: "Precio"
            }
        ]
    },
    logo: true,
}

export default function handleRequest (req, res) {
    const {id} = req.query;
    console.log(id);
    res.status = 200;
    res.json({configurationJson});
}
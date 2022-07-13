const configurationJson = {
    flow: {
        questions:[
            {
                title : {
                    "Español" : "¿Recuerdas tu matrícula? 🚗",
                    "English" : "¿Do you remember car license plate? 🚗"
                },
                numero: 1
            },
            {
                title : {
                    "Español" : "Pregunta 2",
                    "English" : "Question 2"
                },                
                numero: 2
            },
            {
                title : {
                    "Español" : "Este es tu presupuesto 💙",
                    "English" : "This is your price 💙"
                }, 
                numero: 3,
                custom: "Precio"
            }
        ]
    },
    logo: true
}

export default (req, res) => {
    const {id} = req.query;
    console.log(id);
    res.status = 200;
    res.json({configurationJson});
}
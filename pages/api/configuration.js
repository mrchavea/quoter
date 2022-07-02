const configurationJson = {
    flow: {
        questions:[
            {
                title : "¿Recuerdas tu matrícula? 🚗",
                numero: 1
            },
            {
                title : "Pregunta número 2",
                numero: 2
            },
            {
                title : "Este es tu presupuesto 💙",
                numero: 3,
                custom: "Precio"
            }
        ]
    }
}

export default (req, res) => {
    const {id} = req.query;
    console.log(id);
    res.status = 200;
    res.json({configurationJson});
}
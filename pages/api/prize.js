export default function handleRequest (req, res) {
    const {id} = req.query;
    res.status = 200;
    res.json({prize: 278.92});
}
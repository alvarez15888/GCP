const app = require("express")();

app.get ("/", (req, res) => {
    res.send("E ai, blz?");
});

app.listen(8080, () => console.log("Aplicacao rodando"));
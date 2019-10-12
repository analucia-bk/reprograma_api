const professoras = require ("../model/professoras.json")
exports.get = (req, res) => {
    // const arrProfs =[]
    // for (let i=0; i<professoras.length; i++){
    //     const semCpf = {}
    //     semCpf.id = professoras[i].id
    //     semCpf.nome = professoras[i].nome
    //     semCpf.especialidade = professoras[i].especialidade
    //     semCpf.signo = professoras[i].signo
    //     arrProfs.push(semCpf)
    // }
    console.log(req.url)
    res.status(200).send(profSemCpf)
}

    const profSemCpf = professoras.map(item => {
        item.cpf = "*******"
        return item
    })
 exports.getById = (req,res) =>{
    const id = req.params.id
    if (id > 4 || id <= 0){
        res.send("id não é válido")
 }
 console.log(id)
 res.status(200).send(profSemCpf.find(profSemCpf => profSemCpf.id == id))
 }

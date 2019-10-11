const alunas = require ("../model/alunas.json")
exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(alunas)
}
exports.getById = (req,res) => {
    const id = req.params.id
    if (id > 17 || id <= 0){
        res.send("id não é válido")
    }
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}
exports.getBooks = (req,res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if (!aluna){
        res.send("não localizada")
    }
    const livros = aluna.livros
    const titulos = livros.map(livro => livro.titulo)
    res.status(200).send(titulos)
}

exports.getSp = (req, res) => {
    const nasceuSp = alunas.filter (menina => menina.nasceuEmSp == "true")
    const meninasSP = nasceuSp.map(aluna => aluna.nome)
    res.status(200).send(meninasSP)
}
exports.getAge = (req, res) => {
   const id = req.params.id
   const aluna = alunas.find(aluna => aluna.id == id)
   const dataNasc = aluna.dateOfBirth
   const arrData = dataNasc.split('/')
   const dia = arrData [0]
   const mes = arrData [1]
   const ano = arrData [2]
   const idade = calcularIdade(ano, mes,dia)
   res.status(200).send({idade})
}
function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }
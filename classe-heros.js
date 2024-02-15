class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não sabe atacar";
                break;
        }
        console.log("o " + this.tipo + " atacou usando " + ataque);
    }
}

const mago = new Hero("Merlin", 300, "mago");
const guerreiro = new Hero("Aragorn", 35, "guerreiro");
const monge = new Hero("Kyoshi", 250, "monge");
const ninja = new Hero("Hanzo", 200, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
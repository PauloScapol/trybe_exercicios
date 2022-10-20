let status = "grande";

switch (status) {
    case "aprovada":
        console.log("Parabéns, vocÊ foi aprovada(o)!");
        break;
    
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;

    default:
        console.log("Informação incorreta");
}
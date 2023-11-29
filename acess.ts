import { validationAcess } from "./login";
import { SistemaSeguranca } from "./singleton";

let ValidationEmail: string
let ValidationPassword: string


//testando com e-amil incorreto
ValidationEmail='aleatorio1@gmail.com';
ValidationPassword= 'teste1'
validationAcess()

//testando com e-mail correto e senha incorreta
ValidationEmail='aleatorio@gmail.com';
ValidationPassword= 'teste2'
validationAcess()

//Testando com e-mail e senha corretp
ValidationEmail='aleatorio@gmail.com';
ValidationPassword= 'teste1'
validationAcess()

//Testando fazer login com acesso já permitido
ValidationEmail='aleatorio@gmail.com';
ValidationPassword= 'teste1'
validationAcess()

//Demonstrando que apenas uma instância pode ser criada
const teste1 = SistemaSeguranca.getInstance()
const teste2 = SistemaSeguranca.getInstance()
console.log('\n');
console.log(teste1===teste2);


export {ValidationEmail,ValidationPassword}
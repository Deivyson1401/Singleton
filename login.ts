
import { perfil } from "./perfil";
import { SistemaSeguranca } from "./singleton";
import { ValidationEmail, ValidationPassword } from "./acess";

const validationAcess = ()=>{
    if (perfil.lvlacess === false) {
        if (ValidationEmail === perfil.Email){
            if (ValidationPassword===perfil.senha) {
                console.log('\nacesso permitido');
                SistemaSeguranca.getInstance()
                console.log(`Acesso permitido? ${perfil.lvlacess}`);
            } else {
                console.log('\nSenha incorreta, acesso negado');
                console.log(`Acesso permitido? ${perfil.lvlacess}`);
            }
        } else {
            console.log('\ne-mail incorreto');
            console.log(`Acesso permitido? ${perfil.lvlacess}`);
        }
    } else {
        console.log('\nSeu acesso já foi permitido');
    }
}

export {validationAcess}
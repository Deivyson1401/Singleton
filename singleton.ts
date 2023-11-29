import { perfil } from "./perfil"

class SistemaSeguranca {
    private static validation: SistemaSeguranca | null = null
    private constructor (){}

    static getInstance(): SistemaSeguranca {
        if (SistemaSeguranca.validation === null) {
            SistemaSeguranca.validation = new SistemaSeguranca()
            perfil.lvlacess = true
        } else {
            console.log('Seu acesso já está permitido');
            console.log(`Acesso permitido?${perfil.lvlacess}`);
        }
        return SistemaSeguranca.validation
    }
}

export {SistemaSeguranca}
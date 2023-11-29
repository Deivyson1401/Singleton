import { perfil } from "./perfil"

class SistemaSeguranca {
    private static validation: SistemaSeguranca | null = null
    private constructor (){}

    static getInstance(): SistemaSeguranca {
        if (SistemaSeguranca.validation === null) {
            SistemaSeguranca.validation = new SistemaSeguranca()
            perfil.lvlacess = true
        }
        return SistemaSeguranca.validation
    }
}

export {SistemaSeguranca}
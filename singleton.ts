import { perfil } from "./perfil"

class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null
    private constructor (){}

    static getInstance(): SistemaSeguranca {
        if (SistemaSeguranca.instance === null) {
            SistemaSeguranca.instance = new SistemaSeguranca
        }
        return SistemaSeguranca.instance
    }
}
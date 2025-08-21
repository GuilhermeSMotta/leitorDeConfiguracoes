// { "databaseUrl": "mongodb://localhost:27017", "port": 3000, "debugMode": true })
import { promises as fs } from 'fs';
interface Config {
    databaseUrl: String;
    port: number;
    debugMode: boolean
}

async function carregarConfig(): Promise<void> {
    try {
        const dados = await fs.readFile('config.json', 'utf-8');
        const config: Config = JSON.parse(dados);

        console.log("Configuração carregada:");
        console.log(`Porta do servidor: ${config.port}`);
        console.log(`Modo Debug: ${config.debugMode}`);
    } catch (error) {
        console.error("Erro ao ler arquivo de configuração:", error);
    }
}
carregarConfig();
import fs from 'fs/promises';

export async function readJSONFile<T>(path: string): Promise<T> {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data);
}
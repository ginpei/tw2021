import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { DeepReadonly } from "../misc/DeepReadonly";
import { merge } from "../misc/merge";
import {
  createDatabaseContent,
  DatabaseContent,
  databaseContentSchema,
} from "./databaseContent";

let database: DummyDatabase | null = null;

class DummyDatabase {
  private dataValue: DatabaseContent = this.initializeDatabase();

  get data(): DeepReadonly<DatabaseContent> {
    return this.dataValue;
  }

  constructor(private filePath: string) {}

  save(data: DatabaseContent) {
    const merged = merge(this.dataValue, data);
    this.dataValue = databaseContentSchema.parse(merged);
    this.writeDatabase();
  }

  private initializeDatabase(): DatabaseContent {
    try {
      return this.readDatabase();
    } catch (error) {
      return createDatabaseContent();
    }
  }

  private readDatabase(): DatabaseContent {
    // read
    const json = readFileSync(this.filePath, "utf8");

    // deserialize
    const data = JSON.parse(json);
    const validContent = databaseContentSchema.parse(data);

    return validContent;
  }

  private writeDatabase(): void {
    // serialize
    const json = JSON.stringify(this.dataValue, null, 2);

    // write
    const dir = dirname(this.filePath);
    mkdirSync(dir, { recursive: true });
    writeFileSync(this.filePath, json, "utf8");
  }
}

export function getDatabase(): DummyDatabase {
  if (!database) {
    const filePath = resolve(process.cwd(), "db/database.json");
    database = new DummyDatabase(filePath);
  }
  return database;
}

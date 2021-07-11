import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { DeepReadonly } from "../misc/DeepReadonly";
import { merge } from "../misc/merge";
import {
  createDatabaseContent,
  DatabaseContent,
  databaseContentSchema,
} from "./databaseContent";

const databaseFileDir = resolve(process.cwd(), "db/");

const databaseFilePath = resolve(databaseFileDir, "database.json");

let database: DummyDatabase | null = null;

class DummyDatabase {
  private dataValue: DatabaseContent = this.initializeDatabase();

  get data(): DeepReadonly<DatabaseContent> {
    return this.dataValue;
  }

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
    const json = readFileSync(databaseFilePath, "utf8");

    // deserialize
    const data = JSON.parse(json);
    const validContent = databaseContentSchema.parse(data);

    return validContent;
  }

  private writeDatabase(): void {
    // serialize
    const json = JSON.stringify(this.dataValue, null, 2);

    // write
    mkdirSync(databaseFileDir, { recursive: true });
    writeFileSync(databaseFilePath, json, "utf8");
  }
}

export function getDatabase(): DummyDatabase {
  if (!database) {
    database = new DummyDatabase();
  }
  return database;
}

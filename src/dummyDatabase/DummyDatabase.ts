import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { Session } from "../data/session";
import {
  createDatabaseContent,
  DatabaseContent,
  databaseContentSchema,
} from "./databaseContent";

const databaseFileDir = resolve(process.cwd(), "db/");

const databaseFilePath = resolve(databaseFileDir, "database.json");

let database: DummyDatabase | null = null;

class DummyDatabase {
  data: DatabaseContent = this.initializeDatabase();

  save() {
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
    const json = JSON.stringify(this.data);

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

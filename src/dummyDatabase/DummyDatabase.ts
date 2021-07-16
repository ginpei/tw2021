import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { DeepReadonly } from "../misc/DeepReadonly";
import { merge } from "../misc/merge";
import dummyMessageDatabase from "../_fixture/messageData.dummy";
import dummyUserDatabase from "../_fixture/userData.dummy";
import {
  createDatabaseContent,
  DatabaseContent,
  databaseContentSchema,
} from "./databaseContent";

let database: DummyDatabase | null = null;

class DummyDatabase {
  private dataValue: DatabaseContent;

  get data(): DeepReadonly<DatabaseContent> {
    return this.dataValue;
  }

  constructor(private filePath: string) {
    this.dataValue = this.initializeDatabase();
  }

  save(data: Partial<DatabaseContent>) {
    const merged = merge(this.dataValue, data);
    this.dataValue = databaseContentSchema.parse(merged);
    this.writeDatabase();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(...args: any[]) {
    // eslint-disable-next-line no-console
    console.log("[DummyDatabase]", ...args);
  }

  private initializeDatabase(): DatabaseContent {
    try {
      return this.readDatabase();
    } catch (error) {
      this.log("Failed to read database", error);

      const users = Object.fromEntries(dummyUserDatabase.map((v) => [v.id, v]));
      const messages = Object.fromEntries(
        dummyMessageDatabase.map((v) => [v.id, v])
      );
      return createDatabaseContent({ messages, users });
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

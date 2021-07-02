export function sleep(ms: number): Promise<void> {
  return new Promise((f) => setTimeout(f, ms));
}

export function generateId(): string {
  return Math.random().toFixed(32).slice(2);
}

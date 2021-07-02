export function sleep(ms: number): Promise<void> {
  return new Promise((f) => setTimeout(f, ms));
}

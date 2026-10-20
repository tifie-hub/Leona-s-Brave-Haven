import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export type SubmissionRecord = {
  id: string;
  type: "contact" | "application";
  createdAt: string;
  payload: Record<string, string | number>;
};

export async function storeSubmission(
  type: SubmissionRecord["type"],
  payload: Record<string, string | number>,
) {
  const record: SubmissionRecord = {
    id: `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    createdAt: new Date().toISOString(),
    payload,
  };

  const directory = path.join(process.cwd(), "data", "submissions");
  await mkdir(directory, { recursive: true });
  await writeFile(
    path.join(directory, `${record.id}.json`),
    JSON.stringify(record, null, 2),
    "utf8",
  );

  return record;
}

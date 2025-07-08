export interface AlertData {
  type: "ERROR" | "SUCCESS" | "WARN";
  message: string;
  description?: string;
}
export type TaskType = {
    text: string;
    priority?: "high" | "medium" | "low";
    status?: "progress" | "pending" | "completed";
    isComplete: boolean;
    created_at: Date;
  };

 export type ButtonProps = {

  }
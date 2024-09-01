export const useCounter = () => useState<Number>("counter", () => 0)
export const useColor = () => useState<string>("color", () => "pink")
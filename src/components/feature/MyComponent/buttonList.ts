type ButtonListType = {
  id: number;
  title: string;
  type: "button" | "submit";
  isActive: boolean;
};

export const buttonList: ButtonListType[] = [
  { id: 1, title: "Clickable Button", type: "button", isActive: true },
  { id: 2, title: "Dump Button", type: "button", isActive: false },
];

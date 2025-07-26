export const user = JSON.parse(localStorage.getItem("user")!);

const fullName = user?.fullName || "";
const parts = fullName.trim().split(" "); 

export const firstName = parts[0] || "";
export const lastName = parts.slice(1).join(" ") || "";
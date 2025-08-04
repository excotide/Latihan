type Admin = {
    role: "admin";
    akses: string[];
};

type User = {
    nama: string;
    email: string;
};

type AdminUser = Admin & User;

const admin1: AdminUser = {
    role: "admin",
    akses: ["admin", "user"],
    nama: "labiq",
    email: "labiqjazz@gmail.com"
};

console.log(admin1);
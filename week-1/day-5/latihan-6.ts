type StatusLogin = "login" | "logout" | "guest";

const cekAkses = (status: StatusLogin) => {
    status === "login" ? console.log("Selamat datang kembali") : status === "logout" ? console.log("Silakan login kembali") : console.log("Akses terbatas untuk tamu");
};

cekAkses("login");
cekAkses("guest");
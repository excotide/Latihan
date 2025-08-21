import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("koneksi berhasil!")
    } catch (error) {
        console.log("koneksi gagal!")
    }
}

export default connectDB;
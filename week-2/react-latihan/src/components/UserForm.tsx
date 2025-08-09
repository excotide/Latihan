import React, { useState } from "react";
import type { User } from "../types/user";

type UserFormProps = {
    onAddUser: (user: User) => void
};

export default function UserForm({ onAddUser }: UserFormProps) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !age) {
            alert("Nama dan umur wajib!");
            return;
        };

        const newUser: User = {
            id: Date.now(),
            name,
            age: Number(age),
        };

        onAddUser(newUser);
        setName("");
        setAge("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nama: </label>
                <input
                type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama"
                />
            </div>
            <div>
                <label>Umur: </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Masukkan umur"
                />
            </div>

            <button type="submit">Tambah</button>
        </form>
    );
};
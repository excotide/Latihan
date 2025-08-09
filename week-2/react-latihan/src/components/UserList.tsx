import type { User } from "../types/user"

type UserListProps = {
    users: User[];
};

export default function UserList({ users }: UserListProps) {
    if (users.length === 0) {
        return <p>Belum ada data user.</p>
    }

    return (
        <p>
            {users.map((user, index) => (
                <p key={user.id}>
                    {index + 1}. Nama: {user.name} - Umur: {user.age}
                </p>
            ))}
        </p>
    );
}
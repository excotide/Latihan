type User = {
    name: string
    age: number
    address: {
        city: string
        country: string
    }
}

type UserProfileProps = {
    user: User
}

const UserProfile = ({ user }: UserProfileProps) => {
    return (
        <div>
            <h2>Profile Pengguna</h2>
            <p>Nama: {user.name}</p>
            <p>Umur: {user.age}</p>
            <p>Alamat: {user.address.city}, {user.address.country}</p>
        </div>
    )
}

export default UserProfile
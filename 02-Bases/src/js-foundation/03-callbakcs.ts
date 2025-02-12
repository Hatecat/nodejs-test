interface User {
    id: number;
    name: string;
}

const users:User[] = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe"
    }
];


export function getUserById(id:number, callback: (error?: string | null, user?: User) => void) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    // console.log({ user });
    if (!user) {
        return callback(`User nor found with id: ${id}`);
    }
    return callback(undefined, user);
}


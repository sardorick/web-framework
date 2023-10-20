import { User } from "./models/User";

const user = new User({ id: 1, name: 'gani', age: 67 });

user.on('save', () => {
    console.log(user);
});

user.save();

import User from "../models/user.models";

export const signup = async(req, res) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400).json({
            message: "User already exists"
        })
    }
    const user = new User.create({
        name,
        email,
        password
    })

    res.status(201).json({user, message: "User created successfully"})
}

export const login = async(req, res) => {
    res.send("login route");
}

export const logout = async(req, res) => {
    res.send("logout route");
}
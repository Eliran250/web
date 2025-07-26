import userModel from "../models/userSchema";


export const getAllUsers = async (req: any, res: any) => {
    try {
        const user = await userModel.find();
        res.json(user)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const getUserById = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.json(user)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const createUser = async (req: any, res: any) => {
    try {
        const { email } = req.body;
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" })
        }
        const user = await userModel.create(req.body)
        res.status(201).json(user)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteUser = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(201).json({ message: `${user} deleted succsessfuly` })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const updateUser = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndUpdate(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(201).json({ message: `${user.fullName} updated succsessfuly` })
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const login = async(req:any,res:any)=>{
    const {email,password} = req.body;
    const user:any = await userModel.findOne({email,password});
    if (user) {
        res.status(200).json(user);
    }
    else{
        res.status(401).json({message: "Invalid email or password"});
    }
}



































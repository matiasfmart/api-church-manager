import { validationResult } from "express-validator";

export const login = (req, res) => {
    res.json({ok: req.body});
};

export const register = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    res.json({ok: "register ok"});
};
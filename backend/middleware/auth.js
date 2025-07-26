import jwt from "jsonwebtoken"

const authMiddleware = async(req, res, next) => {
    const {token} = req.headers;
    console.log("Token received:", token);
    if (!token) {
         return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log("Token decoded:", token_decode);
        if (!req.body) {
            req.body = {};
        }
        req.body.userId = token_decode.id;
        console.log("UserId set in req.body:", req.body.userId);
        next();
    } catch (error) {
        console.log("JWT verification error:", error)
        res.json({success:false,message:"error"})
    }
}

export default authMiddleware
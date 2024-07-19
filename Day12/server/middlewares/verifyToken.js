import jwt, { decode } from 'jsonwebtoken'
export const verifyToken = (req, res, next) => {
    const { token } = req.cookies
    if (!token) {
        return res.status(401).json({ message: "User Unauthorized" })
    }
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
    } catch (error) {
        return res.status(400).json({ err: error.message })
    }
    if (!decoded) {
        return res.status(401).json({ message: "User Couldn't Be Verified" })
    }
    next()
}
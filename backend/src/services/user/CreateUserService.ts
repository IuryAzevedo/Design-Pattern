import prismaClient from "../../prisma"
interface UserRequest{
    nome: string
    email: string
    password: string
}
class CreateUserService {
    async execute({nome, email, password} : UserRequest){
        if(!email){
            throw new Error("email incorreto, tente novamente");
        }

        const userExists = await prismaClient.user.findFirst({
            where: {
                email: email
            },

        })
        if (userExists) {
            throw new Error("email já cadastrado");    
        }
        const user = await prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                password: password
            },
            select: {
                id: true,
                email: true, 
                password: true
            }
        })
        return user;
    }
}
export {CreateUserService}
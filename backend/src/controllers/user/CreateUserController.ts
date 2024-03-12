import { Response, Request, NextFunction } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email, password } = req.body;
    const createUserService = new CreateUserService();
    try {
      const create = createUserService.execute({
        nome,
        email,
        password,
      });
      return res.send(200).json(create);
    } catch (error) {
      console.log("não foi possível criar um usuário ", error);
    }
  }
}

export { CreateUserController };

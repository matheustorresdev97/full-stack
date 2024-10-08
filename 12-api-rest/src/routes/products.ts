import { ProductsController } from "@/controllers/products-controller";
import { myMiddleware } from "@/middlewares/my-middleware";
import { Router } from "express";

const productsRoutes = Router();
const productsControllers = new ProductsController()

productsRoutes.get("/", productsControllers.index);
productsRoutes.post("/", myMiddleware, productsControllers.create);

export { productsRoutes };

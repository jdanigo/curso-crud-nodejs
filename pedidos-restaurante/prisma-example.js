import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {

    try {
        // Connect the client
        await prisma.$connect()
        // ... you will write your Prisma Client queries here
        console.log("se ha conectado exitosamente")
        
        //Crear un usuario en la base de datos;
        const createdUser = await prisma.user.create({
            data: {
                name: "Daniel",
                lastName: "Garces",
                email: "tatanbmx+dos@gmail.com"
            }
        })
        
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }

  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
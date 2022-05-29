import { PrismaClient } from "@prisma/client"

export default async function handle(req, res) {
  const prisma = new PrismaClient()
  // console.log(req.body);
  await prisma.$connect();
  if(await prisma.user.findFirst({where: { email: req.body.email}})) {
    res.status(404).json({error: 'User With Email Found'})
  }else {
  await prisma.user.create({
   data: {
     name: req.body.name,
      email: req.body.email,
    }
  }).then((resp) => {
    // console.log(resp);
     res.status(200).json(JSON.stringify({name: resp.name, email: resp.email}))
  })
}
}
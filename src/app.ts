import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Yaba Ernesto',
    email: 'yaba@gmail.com',
  },
})

export const app = fastify()

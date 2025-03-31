import { PrismaCheckInRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { CheckInUseCase } from '../check-in'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCheckInUseCase() {
  const prismaCheckInUseCase = new PrismaCheckInRepository()
  const prismaGymsRepository = new PrismaGymsRepository()

  const checkInUseCase = new CheckInUseCase(
    prismaCheckInUseCase,
    prismaGymsRepository,
  )

  return checkInUseCase
}

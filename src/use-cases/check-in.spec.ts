import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckInUseCase } from './chek-in'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'

let checkInsRepository: CheckInsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(checkInsRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shoud be able to check in', async () => {
    const { checkIn } = await sut.execute({
      userId: 'user-id',
      gymId: 'gym-id',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('shoud not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 0, 0, 0))

    await sut.execute({
      userId: 'user-id',
      gymId: 'gym-id',
    })

    await expect(() =>
      sut.execute({
        userId: 'user-id',
        gymId: 'gym-id',
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('shoud be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 0, 0, 0))

    await sut.execute({
      userId: 'user-id',
      gymId: 'gym-id',
    })

    vi.setSystemTime(new Date(2022, 0, 21, 0, 0, 0))

    const { checkIn } = await sut.execute({
      userId: 'user-id',
      gymId: 'gym-id',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})

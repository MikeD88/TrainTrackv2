import {
  trainings,
  training,
  createTraining,
  updateTraining,
  deleteTraining,
} from './trainings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trainings', () => {
  scenario('returns all trainings', async (scenario) => {
    const result = await trainings()

    expect(result.length).toEqual(Object.keys(scenario.training).length)
  })

  scenario('returns a single training', async (scenario) => {
    const result = await training({ id: scenario.training.one.id })

    expect(result).toEqual(scenario.training.one)
  })

  scenario('creates a training', async (scenario) => {
    const result = await createTraining({
      input: {
        name: 'String2186571',
        duration: 3904212,
        collections: scenario.training.two.collections,
      },
    })

    expect(result.name).toEqual('String2186571')
    expect(result.duration).toEqual(3904212)
    expect(result.collections).toEqual(scenario.training.two.collections)
  })

  scenario('updates a training', async (scenario) => {
    const original = await training({
      id: scenario.training.one.id,
    })
    const result = await updateTraining({
      id: original.id,
      input: { name: 'String46766222' },
    })

    expect(result.name).toEqual('String46766222')
  })

  scenario('deletes a training', async (scenario) => {
    const original = await deleteTraining({
      id: scenario.training.one.id,
    })
    const result = await training({ id: original.id })

    expect(result).toEqual(null)
  })
})
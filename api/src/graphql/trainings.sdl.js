export const schema = gql`
  type Training {
    id: Int!
    name: String!
    duration: Int!
    link: String
    description: String
    collectionsObj: Collection
    collections: [String]!
  }

  type Query {
    trainings: [Training!]! @requireAuth
    training(id: Int!): Training @requireAuth
  }

  input CreateTrainingInput {
    name: String!
    duration: Int!
    link: String
    description: String
    collections: [String]!
  }

  input UpdateTrainingInput {
    name: String
    duration: Int
    link: String
    description: String
    collections: [String]!
  }

  type Mutation {
    createTraining(input: CreateTrainingInput!): Training! @requireAuth
    updateTraining(id: Int!, input: UpdateTrainingInput!): Training!
      @requireAuth
    deleteTraining(id: Int!): Training! @requireAuth
  }
`
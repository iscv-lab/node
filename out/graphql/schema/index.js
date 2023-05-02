const typeDefs = `#graphql
  type Book {
    id: Int
    title: String
    author: String
  }

  type Employee {
    category:     Int
    id:           Int
    user:         String
    name:         String
    phone:        String
    professional: String
    email:        String
    github:       String
    linkedin:     String
    sourceImage:  String
  }

  type Skill {
    id:           Int
    employeeId:   Int
    title: String
    level: Int
  }

  type CV {
    id: Int
    employeeId: Int 
    time: String
    source: String
  }

  type DefaultCV {
    category: Int
    id: Int
    user: String
    name: String
    phone: String
    professional: String
    email: String
    github: String
    linkedin: String
    sourceImage: String
    skills: [Skill]
  }

type Post  {
    id: Int
    businessId: Int
    businessName: String
    businessUser: String
    businessSourceImage: String
    hashTag: String
    time: String
    content: String
    imageSource: String
    job: String
    status: Int
}

  type Query {
    books: [Book]
    book(id: ID!): Book
    employees: [Employee]
    employee(id: ID!): Employee
    employeeByUser(user: String): Employee
    skillsByEmployee(employeeId: ID!): [Skill]
    cvs: [CV]
    cv: CV
    defaultCV(employeeId: ID!): DefaultCV
    prediction(id: ID!): [Post]
    post(id: ID!): Post
  }
`;

export { typeDefs };

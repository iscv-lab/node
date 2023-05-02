const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
  }

  type Employee {
    category:     Int
    id:           ID
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
    id:           ID
    employeeId:    ID
    title: String
    level: Int
  }

  type CV {
    id: Int
    employeeId: Int 
    time: Float
    source: String
  }

  type DefaultCV {
    category: Int
    id: ID
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
  }
`;

export { typeDefs };

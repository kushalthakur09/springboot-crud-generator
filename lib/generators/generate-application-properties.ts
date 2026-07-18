export function generateApplicationProperties() {
  return `spring.application.name=demo

spring.datasource.url=
spring.datasource.username=
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
`;
}
export const REPOSITORY_TEMPLATE = `
package {{PACKAGE_NAME}}.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import {{PACKAGE_NAME}}.entity.{{ENTITY_NAME}};

@Repository
public interface {{ENTITY_NAME}}Repository extends JpaRepository<{{ENTITY_NAME}}, Long> {

}
`;
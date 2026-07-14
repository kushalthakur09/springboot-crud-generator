export const SERVICE_TEMPLATE = `
package {{PACKAGE_NAME}}.service;

import {{PACKAGE_NAME}}.dto.{{ENTITY_NAME}}Dto;

import java.util.List;

public interface {{ENTITY_NAME}}Service {

    {{ENTITY_NAME}}Dto create({{ENTITY_NAME}}Dto dto);

    {{ENTITY_NAME}}Dto update(Long id, {{ENTITY_NAME}}Dto dto);

    void delete(Long id);

    {{ENTITY_NAME}}Dto getById(Long id);

    List<{{ENTITY_NAME}}Dto> getAll();
}
`;
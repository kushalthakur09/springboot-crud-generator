export const SERVICE_IMPL_TEMPLATE = `
package {{PACKAGE_NAME}}.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import {{PACKAGE_NAME}}.dto.{{ENTITY_NAME}}Dto;
import {{PACKAGE_NAME}}.repository.{{ENTITY_NAME}}Repository;
import {{PACKAGE_NAME}}.service.{{ENTITY_NAME}}Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class {{ENTITY_NAME}}ServiceImpl implements {{ENTITY_NAME}}Service {

    private final {{ENTITY_NAME}}Repository repository;

    @Override
    public {{ENTITY_NAME}}Dto create({{ENTITY_NAME}}Dto dto) {
        return null;
    }

    @Override
    public {{ENTITY_NAME}}Dto update(Long id, {{ENTITY_NAME}}Dto dto) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public {{ENTITY_NAME}}Dto getById(Long id) {
        return null;
    }

    @Override
    public List<{{ENTITY_NAME}}Dto> getAll() {
        return List.of();
    }
}
`;
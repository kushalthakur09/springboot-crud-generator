export const MAPPER_TEMPLATE = `
package {{PACKAGE_NAME}}.mapper;

import org.mapstruct.Mapper;

import {{PACKAGE_NAME}}.dto.{{ENTITY_NAME}}Dto;
import {{PACKAGE_NAME}}.entity.{{ENTITY_NAME}};

@Mapper(componentModel = "spring")
public interface {{ENTITY_NAME}}Mapper {

    {{ENTITY_NAME}}Dto toDto({{ENTITY_NAME}} entity);

    {{ENTITY_NAME}} toEntity({{ENTITY_NAME}}Dto dto);

}
`;
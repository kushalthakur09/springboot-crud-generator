export const CONTROLLER_TEMPLATE = `
package {{PACKAGE_NAME}}.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import {{PACKAGE_NAME}}.dto.{{ENTITY_NAME}}Dto;
import {{PACKAGE_NAME}}.service.{{ENTITY_NAME}}Service;

import java.util.List;

@RestController
@RequestMapping("/api/{{ENDPOINT}}")
@RequiredArgsConstructor
public class {{ENTITY_NAME}}Controller {

    private final {{ENTITY_NAME}}Service service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public {{ENTITY_NAME}}Dto create(
            @Valid
            @RequestBody {{ENTITY_NAME}}Dto dto
    ) {
        return service.create(dto);
    }

    @GetMapping("/{id}")
    public {{ENTITY_NAME}}Dto getById(
            @PathVariable Long id
    ) {
        return service.getById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<{{ENTITY_NAME}}Dto> getAll() {
        return service.getAll();
    }

    @PutMapping("/{id}")
    public {{ENTITY_NAME}}Dto update(
            @PathVariable Long id,
            @Valid
            @RequestBody {{ENTITY_NAME}}Dto dto
    ) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(
            @PathVariable Long id
    ) {
        service.delete(id);
    }

}
`;

    export const ENTITY_TEMPLATE = `
    package {{PACKAGE_NAME}}.entity;

    import jakarta.persistence.*;
    import jakarta.validation.constraints.*;
    import lombok.*;

    @Entity
    @Table(name = "{{TABLE_NAME}}")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public class {{ENTITY_NAME}} {

    {{FIELDS}}

    }
    `;
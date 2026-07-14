export const DTO_TEMPLATE = `
package {{PACKAGE_NAME}}.dto;

import lombok.*;
import jakarta.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class {{ENTITY_NAME}}Dto {

{{FIELDS}}

}
`;
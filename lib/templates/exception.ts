export const EXCEPTION_TEMPLATE = `
package {{PACKAGE_NAME}}.exception;

public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }

}
`;
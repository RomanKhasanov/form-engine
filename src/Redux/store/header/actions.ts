export function changeHeader(path: string, value: any): any {
    return {
        type: "CHANGE_HEADER",
        path: path,
        value: value,
    };
}

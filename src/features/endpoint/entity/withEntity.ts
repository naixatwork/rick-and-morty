export default function withEntity(...entities: string[]): string {
    const entitiesCopy = [...entities];
    const joinedEntities = entitiesCopy.join("/");
    return joinedEntities;
}
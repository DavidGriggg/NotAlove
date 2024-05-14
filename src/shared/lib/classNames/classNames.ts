export type Modes = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string | undefined,
    modes: Modes = {},
    additional: Array<string | undefined> = []
): string {
    const modeClassNames = Object.entries(modes).map(([className, value]) =>
        value ? [className] : []
    );

    return [cls || "", ...additional.filter(Boolean), ...modeClassNames]
        .join(" ")
        .trim();
}

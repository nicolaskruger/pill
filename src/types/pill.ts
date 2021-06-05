

enum Color {
    RED,
    BLUE
}

const { RED, BLUE } = Color;

type EnumColorValue = EnumDictionary<Color, string>;

const enumColorValue: EnumColorValue = {
    [RED]: "red",
    [BLUE]: "blue"
}

type Pill = {
    color: Color,
    efect: String
}

type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

export type { Pill, EnumDictionary }
export { enumColorValue, Color }
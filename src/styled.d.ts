import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            PRIMARY_COLOR: string;
            SECONDARY_COLOR: string;
            GREY_MEDIUM: string;
            GREY_DARK: string;
            GREY_ULTRA_DARK: string;
            GRADIENT: string;
        };
        text: {
            FONT_SIZE_SMALL: string;
            FONT_SIZE_MEDIUM: string;
            FONT_SIZE_LARGE: string;
            FONT_SIZE_XLARGE: string;
            FONT_SIZE_XXLARGE: string;
            LINE_HEIGHT: string;
        };
        breakpoints: {
            XX_SMALL: string;
            X_SMALL: string;
            SMALL: string;
            MEDIUM: string;
        },
        RADIUS: string;
        BOX_SHADOW: string;
    }
}

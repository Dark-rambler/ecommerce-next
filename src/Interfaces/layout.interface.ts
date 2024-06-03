export interface Layout {
    children?: React.ReactNode;
}

export interface Option {
    Label: string;
    Link: string;
    function: () => void;
    Icon: IconSelectorTypes;
}

export type IconSelectorTypes = "menu" | "close" | "moon" | "sun"  ;

export interface Menu {
    options: Option[];
}


export interface IconSelectorProps {
    name: IconSelectorTypes;
    color?: string;
    width?: string;
    height?: string;
    stroke?: number;
    fill?: string;
    className?: React.ComponentProps<'div'>['className'];
}
import { IconName } from "../../assets/constants/iconos";

export interface DropdownProps {
    label: string;
    children: React.ReactNode;
    nombreIcono: IconName;
    className?: string;
}

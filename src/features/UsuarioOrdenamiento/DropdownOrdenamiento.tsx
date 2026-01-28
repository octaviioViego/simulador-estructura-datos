import { IconName } from "../../assets/constants/iconos";
import { useState } from "react";
import "./Dropdown.css";
import { iconos } from "../../assets/constants/iconos";

export interface DropdownProps {
    label: string;
    children: React.ReactNode;
    nombreIcono?: IconName;
    className?: string;
}


const Dropdown = ({ label, children, nombreIcono, className }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const iconoSeleccionado = nombreIcono ? iconos[nombreIcono] : "";


    return (
        <div className="dropdown">
            <button
                className={className || "dropdown-button"}
                onClick={() => setOpen(!open)}
            >
                {nombreIcono && <img src={iconoSeleccionado} alt={nombreIcono} />}
                {label}

            </button>

            {open && (
                <div className="dropdown-menu">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;

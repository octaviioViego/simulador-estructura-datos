import { useState } from "react";
import "./Dropdown.css";
import { iconos } from "../../assets/constants/iconos";
import { DropdownProps } from "./DropdownProps.types";


const Dropdown = ({ label, children, nombreIcono, className }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const iconoSeleccionado = iconos[nombreIcono];

    return (
        <div className="dropdown">
            <button
                className={className || "dropdown-button"}
                onClick={() => setOpen(!open)}
            >
                <img src={iconoSeleccionado} alt="test" />
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

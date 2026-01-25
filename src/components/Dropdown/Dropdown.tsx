import { useState } from "react";
import "./Dropdown.css";
import { iconos } from "../../assets/constants/iconos";
import { DropdownProps } from "./DropdownProps.types";


const Dropdown = ({ label, children }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <button
                className="dropdown-button"
                onClick={() => setOpen(!open)}
            >
                <img src={iconos.Menu} alt="test" />
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

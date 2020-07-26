import React, { Component, useEffect, useState, useRef } from "react";

interface NavBarDropdownTsxProps {
  value: string;
  options: Array<string>;
  placeholder: string;
  onChange: (String: string) => void;
}

class NavBarDropdownTsx extends Component<NavBarDropdownTsxProps> {
  render() {
    let placeholder = "Select";
    const { onChange, options, value } = this.props;
    const node: NonNullable<any> = useRef();

    const [open, setOpen] = useState(false);

    const handleClick = (e: NonNullable<any>) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setOpen(false);
    };

    const handleChange = (selectedValue: any) => {
      onChange(selectedValue);
      setOpen(false);
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);

    return (
      <div ref={node} className="dropdown">
        <button className="dropdown-toggler" onClick={(e) => setOpen(!open)}>
          {value || placeholder}
        </button>
        {open && (
          <ul className="dropdown-menu">
            {options.map((opt) => (
              <li
                className="dropdown-menu-item"
                onClick={(e) => handleChange(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default NavBarDropdownTsx;

import React from "react";

function CSelect({
    design,
    defaultValue,
    handleChange,
    value,
    options,
}: {
    design: "underline" | "button",
    defaultValue: string,
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    value: string,
    options: Array<{ value: string, label: string }>,
}) {
    const underlineCSS = "outline-none";
    const buttonCSS = "outline-none border rounded px-3 py-1 border-slate-300 font-sm";
    return (
        <select
            className={design === "underline" ? underlineCSS : buttonCSS}
            onChange={handleChange}
            value={value || defaultValue}
        >
            {options.map((v) => (
                <option key={v.value} value={v.value}>
                    {v.label}
                </option>
            ))}
        </select>
    );
}

export default CSelect;

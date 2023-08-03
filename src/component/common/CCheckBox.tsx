function CCheckBox({
    isChecked,
    setIsChecked,
    label,
}: {
    isChecked: boolean,
    setIsChecked: (params: boolean) => void,
    label: string,
}) {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name=""
                id="check-all-day"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="hidden"
            />
            <label
                htmlFor="check-all-day"
                className={`flex justify-center w-5 h-5 mr-2 bg-white border border-neutral-600 cursor-pointer ${
                    isChecked
                        ? "bg-blue-600 border-none after:content-['✔'] after:top:0 after:text-md after:text-white after:align-center"
                        : ""
                }`}
            ></label>
            <label htmlFor="check-all-day" className="cursor-pointer">
                {label}
            </label>
        </div>
    );
}

export default CCheckBox;

import "./inputcompo.css";
export default function InputComponent({
  label,
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <div className="firstInput">
      <p className="secondInput">{label}</p>
      <input
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="lastInput"
      />
    </div>
  );
}

export default function TextField({ value, onChange = () => {} }) {
  return (
    <input
      className={`border border-blue-400 bg-blue-500 text-white p-2`}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

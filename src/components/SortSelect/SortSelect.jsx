import cls from "./SortSelect.module.css";

export const SortSelect = ({ value, onChange }) => {
  return (
    <select
      name="filter"
      id=""
      value={value}
      onChange={onChange}
      className={cls.select}
    >
      <option value="">sort by</option>
      <option value="_sort=level">level ASC</option>
      <option value="_sort=-level">level DESC</option>
      <option value="_sort=completed">Completed ASC</option>
      <option value="_sort=-completed">Completed DESC</option>
    </select>
  );
};

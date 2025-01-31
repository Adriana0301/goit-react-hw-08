import { selectFilter } from "../../redux/filters/selectors.js";
import { changeFilter } from "../../redux/filters/slice.js";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchBoxWrapper}>
      <input
        type="text"
        placeholder="Find contacts by name"
        name="filter"
        value={value}
        onChange={handleChange}
        className={s.searchBoxInput}
      />
    </div>
  );
};

export default SearchBox;

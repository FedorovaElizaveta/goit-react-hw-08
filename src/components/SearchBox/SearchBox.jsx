import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeField,
  changeNameFilter,
  changeNumberilter,
} from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const inputValue = event.target.value.toLowerCase().trim();
    dispatch(changeNameFilter(inputValue));
    dispatch(changeField("name"));
  };

  const handleNumberChange = (event) => {
    const inputValue = event.target.value.toLowerCase().trim();
    dispatch(changeNumberilter(inputValue));
    dispatch(changeField("number"));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <div>
        <p className={css.searchBoxText}>Find contact by name</p>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Enter name..."
          className={css.searchBoxInput}
        />
      </div>

      <div>
        <p className={css.searchBoxText}>Find contact by number</p>
        <input
          onChange={handleNumberChange}
          type="text"
          placeholder="Enter number..."
          className={css.searchBoxInput}
        />
      </div>
    </div>
  );
};

export default SearchBox;

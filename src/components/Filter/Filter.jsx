import { FilterContainer, FilterInput, FilterLabal } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice.js';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  return (
    <FilterContainer>
      <FilterLabal>
        Find contacts by name:
        <FilterInput
          value={filter}
          type="text"
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </FilterLabal>
    </FilterContainer>
  );
};
export default Filter;

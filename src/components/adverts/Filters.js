import './Filters.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiTags } from '../../store/selectors.js';
import { apiTagsLoad } from '../../store/actions.js';

const Filters = ({ getAdvertsFilter }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('');
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const apiTags = useSelector(getApiTags);
  const dispatch = useDispatch();
  const filters = [name, sale, minPrice, maxPrice, tags];

  useEffect(() => {
    dispatch(apiTagsLoad());
  }, [dispatch]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeSale = (event) => {
    let isForSale = event.target.value;
    if (isForSale === 'true') {
      isForSale = true;
    }
    if (isForSale === 'false') {
      isForSale = false;
    }

    setSale(isForSale);
  };

  const handleChangeTags = (event) => {
    const tagsArray = Array.from(event.target.selectedOptions);
    let tags = tagsArray.map((option) => {
      return option.value;
    });
    tags = tags.filter((tag) => tag !== '');
    setTags(tags);
  };

  //TODO controlar que precio mínimo sea menor que máximo y viceversa
  const handleChangeMinPrice = (event) => {
    if (event.target.value === '') {
      setMinPrice('');
    } else {
      setMinPrice(event.target.value);
    }
  };

  const handleChangeMaxPrice = (event) => {
    if (event.target.value === '') {
      setMaxPrice('');
    } else {
      setMaxPrice(event.target.value);
    }
  };
  //----------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    getAdvertsFilter(filters);
  };

  return (
    <form className="adverts-filters-container" onSubmit={handleSubmit}>
      <div className="adverts-filters">
        <div>
          <label htmlFor="byName">Por nombre</label>
          <input type="text" name="byName" id="byName" onChange={handleChangeName} value={name} />
        </div>

        <div>
          <fieldset className="filter-fieldset-radio" onChange={handleChangeSale} value={sale}>
            <legend>Tipo de anuncio:</legend>

            <label htmlFor="bySell">Venta</label>
            <input type="radio" name="bySell" id="bySell" value={true} />

            <label htmlFor="byBuy">Compra</label>
            <input type="radio" name="bySell" id="byBuy" value={false} />

            <label htmlFor="All">Todos</label>
            <input type="radio" name="bySell" id="All" value="" />
          </fieldset>
        </div>

        <div className="byPrice">
          <label htmlFor="byPrice">Por precio</label>
          <input
            type="number"
            name="byPrice"
            id="byPriceMin"
            placeholder="Precio mínimo"
            onWheel={(event) => event.currentTarget.blur()}
            onChange={handleChangeMinPrice}
            value={minPrice}
          />
          <input
            type="number"
            name="byPrice"
            id="byPriceMax"
            placeholder="Precio máximo"
            onWheel={(event) => event.currentTarget.blur()}
            onChange={handleChangeMaxPrice}
            value={maxPrice}
          />
        </div>

        <div>
          <label htmlFor="byTags">Por tags</label>
          <select
            name="byTags"
            id="byTags"
            style={{ padding: '20px' }}
            multiple
            onChange={handleChangeTags}
            value={tags}
          >
            <option key="none" value="" id="none">
              ---
            </option>
            {apiTags.map((tag) => {
              return (
                <option key={tag} value={tag} id={tag}>
                  {`${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit" /* disabled={isDisabled()} */>Filtrar</button>
      </div>
    </form>
  );
};

export default Filters;

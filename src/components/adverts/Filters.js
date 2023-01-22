import './Filters.css';
import { useState } from 'react';

/* import Slider from 'rc-slider';
 import 'rc-slider/assets/index.css';*/
/* import storage from '../../utils/storage.js';
 */

const Filters = ({ getAdvertsFilter }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('');
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filters = [name, sale, minPrice, maxPrice, tags];

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

          {/* <Slider value={[0, 1000]} range /> */}
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
            <option value="" id="none">
              ---
            </option>
            <option value="lifestyle" id="lifestyle">
              Lifestyle
            </option>
            <option value="mobile" id="mobile">
              Mobile
            </option>
            <option value="motor" id="motor">
              Motor
            </option>
            <option value="work" id="work">
              Work
            </option>
          </select>
        </div>

        <button type="submit" /* disabled={isDisabled()} */>Filtrar</button>
      </div>
    </form>
  );
};

export default Filters;

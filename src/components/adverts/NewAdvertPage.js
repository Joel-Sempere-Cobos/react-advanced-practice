import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { advertCreate } from '../../store/actions.js';
import Layout from '../layout/Layout.js';
import './NewAdvertPage.css';

const NewAdvertPage = ({ onLogout }) => {
  const [name, setName] = useState('');
  const [sale, setSale] = useState('');
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const formData = new FormData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeSale = (event) => {
    const isForSale = event.target.value;
    setSale(isForSale);
  };

  const handleChangeTags = (event) => {
    const tagsArray = Array.from(event.target.selectedOptions);
    const tags = tagsArray.map((option) => {
      return option.value;
    });
    setTags(tags);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangePhoto = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsFetching(true);

      formData.append('name', name);
      formData.append('sale', sale);
      formData.append('price', price);
      formData.append('tags', tags);
      photo && formData.append('photo', photo);

      const createdAdvert = await dispatch(advertCreate(formData));
      navigate(`/adverts/${createdAdvert.id}`);
    } catch (error) {
      if (error.status === 401) {
        navigate('/login');
      }
      console.log(error);
      setIsFetching(false);
    }
  };

  const isDisabled = () => !(name && (sale || !sale) && tags.length && price) || isFetching;

  return (
    <div>
      <Layout onLogout={onLogout}>
        <h1>Crea tu anuncio</h1>
        <div className="adverts-create-container">
          <form onSubmit={handleSubmit}>
            <div className="adverts-create">
              <div>
                <label htmlFor="Name">Nombre</label>
                <input type="text" name="Name" id="Name" onChange={handleChangeName} value={name} />
              </div>

              <div>
                <fieldset
                  className="filter-fieldset-radio"
                  onChange={handleChangeSale}
                  value={sale}
                >
                  <legend>Tipo de anuncio:</legend>

                  <label htmlFor="Sell">Venta</label>
                  <input type="radio" name="Sell" id="Sell" value={true} />

                  <label htmlFor="Buy">Compra</label>
                  <input type="radio" name="Sell" id="Buy" value={false} />
                </fieldset>
              </div>

              <div className="Price">
                <label htmlFor="Price">Precio</label>
                <input
                  type="number"
                  name="Price"
                  id="Price"
                  onWheel={(event) => event.currentTarget.blur()}
                  onChange={handleChangePrice}
                  value={price}
                />

                {/* <Slider value={[0, 1000]} range /> */}
              </div>

              <div>
                <label htmlFor="Tags">Tags</label>
                <select
                  style={{ padding: '20px' }}
                  multiple
                  onChange={handleChangeTags}
                  name="Tags"
                  id="Tags"
                  value={tags}
                >
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

              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleChangePhoto}
                accept="image/*"
              />
            </div>
            <button type="submit" disabled={isDisabled()}>
              Publicar
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default NewAdvertPage;

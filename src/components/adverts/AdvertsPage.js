import { useEffect, useState } from 'react';
import Layout from '../layout/Layout.js';
import './AdvertsPage.css';
import { Link } from 'react-router-dom';
import Filters from './Filters.js';
import { useDispatch, useSelector } from 'react-redux';
import { advertsLoad } from '../../store/actions.js';
import { getAdvertsRedux } from '../../store/selectors.js';

const AdvertsPage = ({ onLogout }) => {
  const adverts = useSelector(getAdvertsRedux);
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(advertsLoad());
  }, [dispatch]);

  const forSale = (sale) => {
    return sale ? 'Vendo' : 'Compro';
  };

  const getAdvertsFilter = (filters) => {
    setFilters(filters);
  };

  let filteredAdverts = adverts;

  filteredAdverts = adverts.filter((advert) => {
    return (
      !filters.length ||
      ((filters[0] === '' || filters[0] === advert.name) &&
        (filters[1] === '' || filters[1] === advert.sale) &&
        (filters[2] === '' || filters[2] <= advert.price) &&
        (filters[3] === '' || filters[3] >= advert.price) &&
        (!filters[4].length || JSON.stringify(filters[4]) === JSON.stringify(advert.tags)))
    );
  });

  return (
    <Layout onLogout={onLogout}>
      <div className="advertsPage">
        {adverts.length ? (
          <div>
            <h1>Listado de anuncios</h1>
            <Filters getAdvertsFilter={getAdvertsFilter} />
            <ul>
              {filteredAdverts.length === 0 && (
                <div>
                  No hay anuncios que cumplan con esos requisitos. Modifica los filtros o{' '}
                  <Link to="/adverts/new">publica un anuncio.</Link>
                </div>
              )}
              {filteredAdverts.map((advert) => (
                <li key={advert.id}>
                  <Link className="advert-detail-link" to={`/adverts/${advert.id}`}>
                    <ul className="advert-container">
                      <li>
                        <strong>{advert.name}</strong>
                      </li>
                      <li>{forSale(advert.sale)}</li>
                      <li>Precio: {advert.price}€</li>
                      <li>Tags: {advert.tags && advert.tags.join(', ')}</li>
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            No hay anuncios. <Link to="/adverts/new">¡Publica el primer anuncio!</Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdvertsPage;

import React, { useState, useEffect } from 'react';
import './Planning.scss';
import { recordAPI } from '../../api/recordAPI';
import { categoryAPI } from '../../api/categoryAPI';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Planning = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const bill = useSelector((state) => state.infoReducer.info.bill);

  useEffect(() => {
    async function loadData() {
      const categories = await categoryAPI.getCategories();

      await recordAPI.getRecords().then((items) => {
        const transformedData = categories.map((category) => {
          const spend = items
            .filter((item) => item.categoryId === category.id)
            .filter((item) => item.type === 'outcome')
            .reduce((total, item) => {
              return (total += +item.amount);
            }, 0);

          const percent = (100 * spend) / category.limit;
          const progressPercent = percent > 100 ? 100 : percent;
          const progressColor =
            percent < 60 ? 'green' : percent < 100 ? 'yellow' : 'red';

          return {
            ...category,
            progressPercent,
            progressColor,
            spend,
          };
        });

        setItems(transformedData);
        setLoading(false);
      });
    }

    loadData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className='page-title page-title-planning'>
        <h3>Планирование</h3>
        <h4 className='bill'>{bill}</h4>
      </div>

      {!items.length && (
        <p className='center'>
          Записей пока нет,
          <NavLink to={'/record'}>создать запись</NavLink>
        </p>
      )}

      {items.length > 0 && (
        <section>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <p>
                  <strong>{item.name}:</strong>
                  {item.spend} из {item.limit}
                </p>
                <div className='progress'>
                  <div
                    className={'determinate ' + item.progressColor}
                    style={{ width: item.progressPercent + '%' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Planning;

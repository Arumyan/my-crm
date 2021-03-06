import React, { useState, useEffect } from 'react';
import HistoryTable from './HistoryTable/HistoryTable';
import { recordAPI } from '../../api/recordAPI';
import { categoryAPI } from '../../api/categoryAPI';
import Loader from '../../components/Loader/Loader';
import { NavLink } from 'react-router-dom';

const History = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const categories = await categoryAPI.getCategories();
      const records = await recordAPI.getRecords();

      const transformedRecords = records.map((record) => {
        return {
          ...record,
          categoryName: categories.find(
            (category) => category.id === record.categoryId
          ).name,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход',
        };
      });

      setRecords(transformedRecords);
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <>
      <div className='page-title'>
        <h3>История записей</h3>
      </div>

      {/* <div className='history-chart'>
        <canvas></canvas>
      </div> */}

      <section>
        {loading && <Loader />}
        {!loading && !records.length && (
          <p className='center'>
            Записей пока нет, <NavLink to={'/record'}>создать запись</NavLink>
          </p>
        )}
        {!loading && records.length > 0 && <HistoryTable records={records} />}
      </section>
    </>
  );
};

export default History;
